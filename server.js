// Import required libraries
const express = require('express');
const { TextToSpeechClient } = require('@google-cloud/text-to-speech');
const { Translate } = require('@google-cloud/translate').v2;
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Initialize Google Cloud clients
const ttsClient = new TextToSpeechClient();
const translateClient = new Translate();

// API to translate text (accepts string or array of strings)
app.post('/api/translate', async (req, res) => {
  const { text, targetLang } = req.body;

  if (!text || !targetLang) {
    return res.status(400).json({ error: 'text and targetLang are required' });
  }

  try {
    // Batch translate supported by Google API
    const [translation] = await translateClient.translate(text, targetLang);

    // Always respond with an array for consistency
    const translatedTexts = Array.isArray(translation) ? translation : [translation];

    res.json({ translatedTexts });
  } catch (err) {
    console.error('Translation failed:', err);
    res.status(500).json({ error: 'Translation failed' });
  }
});

// Helper to get supported language codes for TTS
async function getSupportedLanguageCodes() {
  try {
    const [result] = await ttsClient.listVoices();
    const codes = new Set();

    result.voices.forEach(voice => {
      voice.languageCodes.forEach(code => codes.add(code));
    });

    return Array.from(codes);
  } catch (err) {
    console.error('Failed to fetch supported language codes:', err);
    return [];
  }
}

// Helper to resolve full language code for TTS from short code
async function resolveLanguageCode(shortCode) {
  const supportedCodes = await getSupportedLanguageCodes();
  const match = supportedCodes.find(code => code.startsWith(shortCode + '-'));
  return match || 'en-US';
}

// API to synthesize speech from text
app.post('/api/speak', async (req, res) => {
  let { text, languageCode } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'text is required' });
  }

  try {
    if (!languageCode) {
      const [detection] = await translateClient.detect(text);
      languageCode = detection.language;
    }

    const fullLangCode = await resolveLanguageCode(languageCode);

    const [response] = await ttsClient.synthesizeSpeech({
      input: { text },
      voice: {
        languageCode: fullLangCode,
        ssmlGender: 'NEUTRAL',
      },
      audioConfig: { audioEncoding: 'MP3' },
    });

    res.set({
      'Content-Type': 'audio/mpeg',
      'Content-Length': response.audioContent.length,
      'Content-Disposition': 'inline; filename="speech.mp3"',
    });

    res.send(response.audioContent);
  } catch (err) {
    console.error('Text-to-Speech failed:', err);
    res.status(500).json({ error: 'Text-to-Speech failed' });
  }
});

// SPA client routes fallback to index.html
const clientRoutes = ['/greencard', '/parenta', '/parentc', '/visa', '/spouse'];
clientRoutes.forEach(route => {
  app.get(route, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// Start server on port 8080 (Cloud Run default) or environment port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
