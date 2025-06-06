import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, Paper } from '@mui/material';

// Helper: get all visible non-empty text nodes under root
function getTextNodes(root) {
  const walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: (node) => {
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        if (node.parentElement && window.getComputedStyle(node.parentElement).display === 'none') return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    },
    false
  );

  const nodes = [];
  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }
  return nodes;
}

export default function AccessibilityBar({ onSetTranslation, panelContainerRef }) {
  const [langCode, setLangCode] = useState('en');
  const [loading, setLoading] = useState(false);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTranslate = async () => {
    setLoading(true);
    try {
      // Translate all visible text on the entire page (including sidebar)
      const textNodes = getTextNodes(document.body);
      const uniqueTexts = [...new Set(textNodes.map(node => node.nodeValue.trim()))];

      const translatedTexts = await Promise.all(
        uniqueTexts.map(async (text) => {
          if (!text) return '';
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

      // Replace text on entire page
      textNodes.forEach(node => {
        const trimmedText = node.nodeValue.trim();
        if (translationMap.has(trimmedText)) {
          const leading = node.nodeValue.match(/^\s*/)[0];
          const trailing = node.nodeValue.match(/\s*$/)[0];
          node.nodeValue = leading + translationMap.get(trimmedText) + trailing;
        }
      });

      onSetTranslation && onSetTranslation(`Translated to ${langCode}`);
    } catch (error) {
      console.error('Translation error:', error);
      onSetTranslation && onSetTranslation('Translation failed. Please try again.');
    }
    setLoading(false);
  };

  const handleSpeak = async () => {
    if (!panelContainerRef?.current) {
      console.warn('Panel container ref not set for speech.');
      return;
    }

    // Get text nodes ONLY inside Panel container (exclude sidebar)
    const textNodes = getTextNodes(panelContainerRef.current);
    const textToSpeak = textNodes.map(node => node.nodeValue.trim()).join('\n');

    if (!textToSpeak.trim()) {
      console.warn('No valid text to speak inside Panel.');
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
            <MenuItem value="my">Burmese</MenuItem>
            <MenuItem value="ja">Japanese</MenuItem>
            <MenuItem value="ko">Korean</MenuItem>
            <MenuItem value="de">German</MenuItem>
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
