import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, Paper } from '@mui/material';

// Helper to extract plain text from JSX (for translation lookup)
function extractTextFromJSX(node) {
  if (typeof node === 'string') return node;
  if (Array.isArray(node)) return node.map(extractTextFromJSX).join(' ');
  if (React.isValidElement(node)) {
    return extractTextFromJSX(node.props.children);
  }
  return String(node);
}

// Recursively collect all text entries in checklist for translation
function collectTextsForTranslation(items) {
  let texts = [];
  for (const item of items) {
    if (item.label) {
      texts.push(extractTextFromJSX(item.label));
    } else if (item.section) {
      texts.push(extractTextFromJSX(item.section));
    }

    if (item.type === 'dropdown' && Array.isArray(item.options)) {
      for (const opt of item.options) {
        if (typeof opt === 'string') {
          texts.push(opt);
        } else if (opt.label) {
          texts.push(extractTextFromJSX(opt.label));
          if (Array.isArray(opt.children)) {
            texts = texts.concat(collectTextsForTranslation(opt.children));
          }
        }
      }
    }

    if (Array.isArray(item.children)) {
      texts = texts.concat(collectTextsForTranslation(item.children));
    }
  }
  return texts;
}

// Recursively replace texts in checklist items using a translation map
function replaceTextsWithTranslations(items, translationMap) {
  return items.map(item => {
    let newItem = { ...item };

    // Replace label
    if (item.label) {
      const originalText = extractTextFromJSX(item.label);
      if (translationMap.has(originalText)) {
        const translated = translationMap.get(originalText);
        newItem.label = translated;
      }
    } else if (item.section) {
      const originalText = extractTextFromJSX(item.section);
      if (translationMap.has(originalText)) {
        newItem.section = translationMap.get(originalText);
      }
    }

    // Replace dropdown options and their children recursively
    if (item.type === 'dropdown' && Array.isArray(item.options)) {
      newItem.options = item.options.map(opt => {
        if (typeof opt === 'string') {
          return translationMap.get(opt) || opt;
        } else if (opt.label) {
          const originalOptText = extractTextFromJSX(opt.label);
          let newOpt = {
            ...opt,
            label: translationMap.get(originalOptText) || opt.label,
          };
          if (Array.isArray(opt.children)) {
            newOpt.children = replaceTextsWithTranslations(opt.children, translationMap);
          }
          return newOpt;
        }
        return opt;
      });
    }

    // Replace recursively in children
    if (Array.isArray(item.children)) {
      newItem.children = replaceTextsWithTranslations(item.children, translationMap);
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
      // Collect unique texts for translation
      const textsToTranslate = collectTextsForTranslation(checklist).filter(Boolean);
      const uniqueTexts = [...new Set(textsToTranslate)];

      // Translate all texts in parallel
      const translatedTexts = await Promise.all(
        uniqueTexts.map(async (text) => {
          const { data } = await axios.post('/api/translate', {
            text,
            targetLang: langCode,
          });
          return data.translatedText;
        })
      );

      // Build map original -> translated
      const translationMap = new Map();
      uniqueTexts.forEach((orig, idx) => {
        translationMap.set(orig, translatedTexts[idx]);
      });

      // Replace checklist texts with translated texts
      const newTranslatedChecklist = replaceTextsWithTranslations(checklist, translationMap);

      setTranslatedChecklist(newTranslatedChecklist);

      // Pass the entire translated checklist object back to parent
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
      // Flatten all translated texts to speak
      const texts = collectTextsForTranslation(translatedChecklist).filter(Boolean);
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
