import React, { useState } from 'react';
import { useRef } from 'react';
import axios from 'axios';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography, Stack, Paper } from '@mui/material';

export default function AccessibilityBar({ stepText, checklist, onSetTranslation }) {
  const [translatedText, setTranslatedText] = useState('');
  const [langCode, setLangCode] = useState('en');
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    if (!checklist) return;
    setLoading(true);
    try {
      // Filter only items with label or section as string
      const textsToTranslate = checklist
        .map(item => item.label || item.section)
        .filter(text => typeof text === 'string');
  
      const translatedItems = await Promise.all(
        textsToTranslate.map(async (text) => {
          const { data } = await axios.post('/api/translate', {
            text,
            targetLang: langCode,
          });
          return data.translatedText;
        })
      );
      const translatedTextCombined = translatedItems.join('\n');
      setTranslatedText(translatedTextCombined);
      onSetTranslation(translatedTextCombined);
    } catch (error) {
      console.error('Translation error:', error);
      setTranslatedText('Translation failed. Please try again.');
    }
    setLoading(false);
  };

const audioRef = useRef(null);
const [isPlaying, setIsPlaying] = useState(false);

const handleSpeak = async () => {
  const textToSpeak = typeof translatedText === 'string' && translatedText.trim()
    ? translatedText
    : (typeof stepText === 'string' ? stepText : '');

  if (!textToSpeak) {
    console.warn('No valid text to speak');
    return;
  }

  // If audio already exists and hasn't ended
  if (audioRef.current && !audioRef.current.ended) {
    if (!audioRef.current.paused) {
      // Pause if currently playing
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // Resume if paused
      audioRef.current.play();
      setIsPlaying(true);
    }
    return;
  }

  // Else, fetch new audio and play from start
  try {
    const response = await axios.post('/api/speak', {
      text: textToSpeak,
      languageCode: langCode,
    }, { responseType: 'arraybuffer' });

    const blob = new Blob([response.data], { type: 'audio/mpeg' });
    const audio = new Audio(URL.createObjectURL(blob));

    audioRef.current = audio;

    audio.play();
    setIsPlaying(true);

    audio.onended = () => setIsPlaying(false);
  } catch (error) {
    console.error('Speech synthesis error:', error);
  }
};


  return (
    <Paper elevation={3} sx={{ p: 1.5, mt: 1.5, backgroundColor: '#fafafa', width: 'auto', display: 'inline-flex'}}>
      <Stack spacing={1} direction="row" alignItems="center" sx={{ width: 'auto' }}>
        <FormControl size="small" sx={{ minWidth: 140 }}>
          <InputLabel id="lang-select-label">Language</InputLabel>
          <Select
            labelId="lang-select-label"
            id="lang-select"
            value={langCode}
            label="Language"
            onChange={(e) => setLangCode(e.target.value)}
            size="small"
          >
            <MenuItem value="en">English</MenuItem>
<MenuItem value="es">Spanish</MenuItem>
<MenuItem value="fr">French</MenuItem>
<MenuItem value="zh">Chinese</MenuItem>
<MenuItem value="hi">Hindi</MenuItem>
<MenuItem value="tl">Tagalog</MenuItem>
<MenuItem value="vi">Vietnamese</MenuItem>
<MenuItem value="ar">Arabic</MenuItem>
          </Select>
        </FormControl>
  
        <Box sx={{ display: 'flex', gap: 0.5 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleTranslate}
            disabled={loading}
            size="small"
          >
            {loading ? 'Translating...' : 'Translate'}
          </Button>
  
          <Button
  variant="outlined"
  color="secondary"
  onClick={handleSpeak}
  size="small"
>
  {isPlaying ? 'Pause' : 'Speak'}
</Button>
        </Box>
      </Stack>
    </Paper>
  );
}