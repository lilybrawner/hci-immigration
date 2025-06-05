import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, Paper } from '@mui/material';

export default function AccessibilityBar({
  stepText = '',        
  onSetTranslation,     
  langCode,             
  setLangCode,          
}) {
  const [loading, setLoading] = useState(false);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Normalize stepText to always be a string
  const safeStepText = Array.isArray(stepText) ? stepText.join('\n') : stepText;

  // Handle translate button click
  const handleTranslate = async () => {
    if (typeof safeStepText !== 'string' || !safeStepText.trim()) return;

    setLoading(true);
    try {
      const textsToTranslate = safeStepText.split('\n').filter(line => line.trim());

      const { data } = await axios.post('/api/translate', {
        texts: textsToTranslate,
        targetLang: langCode,
      });

      if (Array.isArray(data.translatedTexts)) {
        onSetTranslation(data.translatedTexts);
      } else {
        console.error('Unexpected translation API response', data);
        onSetTranslation([]);
      }
    } catch (error) {
      console.error('Translation error:', error);
      onSetTranslation([]);
    }
    setLoading(false);
  };

  // Handle speak button click
  const handleSpeak = async () => {
    if (!safeStepText.trim()) {
      console.warn('No valid text to speak');
      return;
    }

    if (audioRef.current && !audioRef.current.ended) {
      if (!audioRef.current.paused) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
      return;
    }

    try {
      const response = await axios.post(
        '/api/speak',
        { text: safeStepText, languageCode: langCode },
        { responseType: 'arraybuffer' }
      );

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

  const handleLangChange = (e) => {
    setLangCode(e.target.value);
  };

  return (
    <Paper
      elevation={3}
      sx={{ p: 1.5, mt: 1.5, backgroundColor: '#fafafa', width: 'auto', display: 'inline-flex' }}
    >
      <Stack spacing={1} direction="row" alignItems="center" sx={{ width: 'auto' }}>
        <FormControl size="small" sx={{ minWidth: 140 }}>
          <InputLabel id="lang-select-label">Language</InputLabel>
          <Select
            labelId="lang-select-label"
            id="lang-select"
            value={langCode}
            label="Language"
            onChange={handleLangChange}
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
          <Button variant="contained" color="primary" onClick={handleTranslate} disabled={loading} size="small">
            {loading ? 'Translating...' : 'Translate'}
          </Button>

          <Button variant="outlined" color="secondary" onClick={handleSpeak} size="small">
            {isPlaying ? 'Pause' : 'Speak'}
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
}
