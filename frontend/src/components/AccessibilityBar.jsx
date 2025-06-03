import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, Paper } from '@mui/material';

// Recursively collect all translatable text from 'label' and 'section' fields
function collectTranslatableTexts(items) {
  let texts = [];
  for (const item of items) {
    if (item.label && typeof item.label === 'string') {
      texts.push(item.label);
    } else if (item.section && typeof item.section === 'string') {
      texts.push(item.section);
    }
    if (Array.isArray(item.children)) {
      texts = texts.concat(collectTranslatableTexts(item.children));
    }
  }
  return texts;
}

// Recursively replace only label and section fields
function replaceLabelSectionTranslations(items, translationMap) {
  return items.map(item => {
    const newItem = { ...item };

    if (item.label && translationMap.has(item.label)) {
      newItem.label = translationMap.get(item.label);
    }
    if (item.section && translationMap.has(item.section)) {
      newItem.section = translationMap.get(item.section);
    }

    if (Array.isArray(item.children)) {
      newItem.children = replaceLabelSectionTranslations(item.children, translationMap);
    }

    return newItem;
  });
}

export default function AccessibilityBar({ stepText, checklist, onSetTranslation }) {
  const [translatedChecklist, setTranslatedChecklist] = useState(null);
  const [langCode, setLangCode] = useState('en');
  const [loading, setLoading] = useState(false);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTranslate = async () => {
    if (!checklist) return;
    setLoading(true);
    try {
      const textsToTranslate = collectTranslatableTexts(checklist).filter(Boolean);
      const uniqueTexts = [...new Set(textsToTranslate)];

      const translatedTexts = await Promise.all(
        uniqueTexts.map(async (text) => {
          const { data } = await axios.post('/api/translate', {
            text,
            targetLang: langCode,
          });
          return data.translatedText;
        })
      );

      const translationMap = new Map();
      uniqueTexts.forEach((orig, idx) => {
        translationMap.set(orig, translatedTexts[idx]);
      });

      const newTranslatedChecklist = replaceLabelSectionTranslations(checklist, translationMap);
      setTranslatedChecklist(newTranslatedChecklist);
      onSetTranslation(newTranslatedChecklist);

    } catch (error) {
      console.error('Translation error:', error);
      onSetTranslation('Translation failed. Please try again.');
    }
    setLoading(false);
  };

  const handleSpeak = async () => {
    let textToSpeak = '';

    if (translatedChecklist) {
      const texts = collectTranslatableTexts(translatedChecklist).filter(Boolean);
      textToSpeak = texts.join('\n');
    } else if (typeof stepText === 'string') {
      textToSpeak = stepText;
    }

    if (!textToSpeak.trim()) {
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
        {
          text: textToSpeak,
          languageCode: langCode,
        },
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
