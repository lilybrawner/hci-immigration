// Import required libraries
const express = require('express');
const { TextToSpeechClient } = require('@google-cloud/text-to-speech');
const { Translate } = require('@google-cloud/translate').v2;

const app = express();
app.use(express.json());

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Serve React app for any unknown routes (to enable client side routing)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// Initialize the Google Cloud clients
const ttsClient = new TextToSpeechClient();
const translateClient = new Translate();

// API to translate text
app.post('/api/translate', async (req, res) => {
  const { text, targetLang } = req.body;

  if (!text || !targetLang) {
    return res.status(400).json({ error: 'text and targetLang are required' });
  }

  try {
    const [translation] = await translateClient.translate(text, targetLang);
    res.json({ translatedText: translation });
  } catch (err) {
    console.error(err);
    res.status(500).send('Translation failed');
  }
});

// Function to get supported language codes for TTS
async function getSupportedLanguageCodes() {
  const [result] = await ttsClient.listVoices();
  const voices = result.voices;

  const codes = new Set();
  voices.forEach(voice => {
    voice.languageCodes.forEach(code => codes.add(code));
  });

  return Array.from(codes); 
}

// Function to resolve the language code
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
    console.error('TTS failed:', err);
    res.status(500).send('Text-to-Speech failed');
  }
});

// Start the server on the appropriate port
const PORT = process.env.PORT || 8080; // Cloud Run uses 8080 by default
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
