import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography, Stack, Paper } from '@mui/material';

export default function AccessibilityBar({ stepText, onSetTranslation}) {
  const [translatedText, setTranslatedText] = useState('');
  const [langCode, setLangCode] = useState('es'); // default target language (Spanish)
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    setLoading(true);
    try {
      const translatedItems = await Promise.all(
        checklist.map(async (item) => {
          const { data } = await axios.post('/api/translate', {
            text: item.label,
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

  const handleSpeak = async () => {
    try {
      const response = await axios.post('/api/speak', {
        text: translatedText || stepText,
        languageCode: langCode,
      }, { responseType: 'arraybuffer' });

      const blob = new Blob([response.data], { type: 'audio/mpeg' });
      const audio = new Audio(URL.createObjectURL(blob));
      audio.play();
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
            <MenuItem value="es">Spanish</MenuItem>
            <MenuItem value="fr">French</MenuItem>
            <MenuItem value="zh">Chinese</MenuItem>
            <MenuItem value="en">English</MenuItem>
            {/* Add more supported languages here */}
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
  
          <Button variant="outlined" color="secondary" onClick={handleSpeak} size="small">
            Speak
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
}