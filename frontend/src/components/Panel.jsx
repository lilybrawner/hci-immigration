import React, { useState, useEffect, useMemo, useCallback } from 'react';
import '../App.css';
import FAQAccordion from './Accordion';
import AccessibilityBar from './AccessibilityBar';
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Checkbox,
  FormControlLabel,
  Stack,
  IconButton,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { pdf } from '@react-pdf/renderer';
import ChecklistPDF from './ChecklistPDF';

// Dummy auto-translate function (replace with actual translation API)
async function autoTranslateFAQ(faqTexts, targetLang) {
  return faqTexts; // No actual translation done here
}

export default function Panel({
  step,
  checklist,
  onChecklistChange,
  onSetTranslation,
  page,
  renderLabel,
  onNextStep,
}) {
  // === State ===
  const [tab, setTab] = useState(0); // 0: Checklist, 1: FAQ
  const [currentLang, setCurrentLang] = useState('en');
  const [hasManualTranslation, setHasManualTranslation] = useState(false);
  const [translatedChecklist, setTranslatedChecklist] = useState(null);
  const [translatedFAQ, setTranslatedFAQ] = useState(null);

  // === Compose text for AccessibilityBar ===
  const stepText = useMemo(() => 
    checklist
      .map(item => (typeof item.label === 'string' ? item.label : ''))
      .join('\n'), 
    [checklist]
  );

  // Example FAQ texts (replace with real source if available)
  const faqTexts = useMemo(() => `
    What is the application deadline?
    The application deadline is June 1st.

    How do I submit my documents?
    You can submit them via our online portal.
  `, [step.id, page]);

  // === AccessibilityBar translation callback ===
  const handleSetTranslation = useCallback(
    (translatedTexts, lang) => {
      setCurrentLang(lang);
      setHasManualTranslation(true);

      if (tab === 0) {
        setTranslatedChecklist(translatedTexts);
      } else {
        setTranslatedFAQ(translatedTexts);
      }

      if (onSetTranslation) {
        onSetTranslation(translatedTexts, lang);
      }
    },
    [tab, onSetTranslation]
  );

  // === Auto-translate FAQ when switching to FAQ tab if needed ===
  useEffect(() => {
    if (tab === 1 && hasManualTranslation && currentLang !== 'en') {
      autoTranslateFAQ(faqTexts, currentLang).then(setTranslatedFAQ);
    }
  }, [tab, hasManualTranslation, currentLang, faqTexts]);

  // Determine content to pass to AccessibilityBar for translation
  const contentToTranslate = tab === 0 ? (translatedChecklist || stepText) : (translatedFAQ || faqTexts);

  // Check if all checklist items that require checking are checked
  const allChecked = checklist
    .filter(item => !item.section && !item.textOnly)
    .every(item => item.checked);

  // === Handlers for checklist interaction ===
  const handleCheck = (id) => {
    const updated = checklist.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    onChecklistChange(step.id, updated);
  };

  const handleDropdownChange = (item, selectedIndex) => {
    const updatedChecklist = checklist.map(ci => {
      if (ci.id === item.id) {
        const updated = { ...ci, selected: selectedIndex, checked: true };
        if (Array.isArray(ci.options[selectedIndex]?.children)) {
          updated.options = ci.options.map((option, idx) => {
            if (idx === selectedIndex && option.children) {
              return {
                ...option,
                children: option.children.map(child => ({ ...child, checked: child.checked ?? false })),
              };
            }
            return option;
          });
        }
        return updated;
      }
      return ci;
    });
    onChecklistChange(step.id, updatedChecklist);
  };

  const handleCheckChild = (parentId, childId) => {
    const updatedChecklist = checklist.map(item => {
      if (item.id === parentId) {
        const updatedOptions = item.options.map(option => {
          if (option.children) {
            const updatedChildren = option.children.map(child =>
              child.id === childId ? { ...child, checked: !child.checked } : child
            );
            return { ...option, children: updatedChildren };
          }
          return option;
        });
        return { ...item, options: updatedOptions };
      }
      return item;
    });
    onChecklistChange(step.id, updatedChecklist);
  };

  // === PDF Download ===
  const handleDownloadPDF = async () => {
    const doc = <ChecklistPDF step={step} checklist={checklist} />;
    const asPdf = pdf(doc);
    const blob = await asPdf.toBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Step-${step.id}-Checklist.pdf`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      {/* Tabs + AccessibilityBar */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 2,
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 1, sm: 0 },
          backgroundColor: '#E9EFFB',
          borderRadius: 3,
          px: 2,
          py: 1,
        }}
      >
        <Tabs value={tab} onChange={(e, v) => setTab(v)}>
          <Tab label="Step-by-Step" />
          <Tab label="Frequently Asked Questions" />
        </Tabs>

        <Box sx={{ width: { xs: '100%', sm: 'auto' }, mt: { xs: 1, sm: 0 } }}>
          <AccessibilityBar
            stepText={contentToTranslate}
            langCode={currentLang}
            setLangCode={setCurrentLang}
            onSetTranslation={handleSetTranslation}
          />
        </Box>
      </Box>

      {/* Tab Content */}
      {tab === 0 && (
        <Box p={1}>
          <Stack spacing={1}>
            {checklist.map((item, index) => {
              // Label text prefers translation if available
              const labelText = item.translation || item.label || item.section;

              // Section header
              if (item.section) {
                return (
                  <Box key={`section-${index}`} sx={{ pt: index === 0 ? 0 : 4, pb: 1 }}>
                    <Typography variant="h6" fontWeight="bold">
                      {renderLabel ? renderLabel(item.section) : item.section}
                    </Typography>
                  </Box>
                );
              }

              // Text-only items (no checkbox)
              if (item.textOnly) {
                return (
                  <Typography
                    key={`textOnly-${index}`}
                    variant="body1"
                    sx={{ pt: 1, pl: item.nested ? 5 : 0 }}
                  >
                    {renderLabel ? renderLabel(labelText) : labelText}
                  </Typography>
                );
              }

              // Dropdown with possible nested checkboxes
              if (item.type === 'dropdown') {
                const selectedIndex = item.selected ?? '';
                const selectedOption = typeof selectedIndex === 'number' ? item.options[selectedIndex] : null;
                const hasNestedChildren = selectedOption?.children && selectedOption.children.length > 0;

                return (
                  <Box key={`dropdown-${index}`} sx={{ pt: 1, pl: item.nested ? 5 : 0 }}>
                    <FormControl fullWidth size="small">
                      <Typography variant="body1" sx={{ mb: 1 }}>
                        {renderLabel ? renderLabel(item.label) : item.label}
                      </Typography>
                      <Select
                        value={selectedIndex}
                        onChange={(e) => handleDropdownChange(item, e.target.value)}
                        displayEmpty
                      >
                        <MenuItem disabled value="">
                          <em>Select an option</em>
                        </MenuItem>
                        {item.options.map((option, idx) => {
                          const label = typeof option === 'string' ? option : option.label;
                          return (
                            <MenuItem key={idx} value={idx}>
                              {label}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>

                    {/* Nested checkbox children */}
                    {hasNestedChildren && (
                      <Box sx={{ mt: 1 }}>
                        {selectedOption.children.map((child, cIndex) => {
                          if (child.textOnly) {
                            return (
                              <Typography
                                key={`child-textOnly-${cIndex}`}
                                variant="body1"
                                sx={{ pl: 5 }}
                              >
                                {renderLabel ? renderLabel(child.label) : child.label}
                              </Typography>
                            );
                          }

                          return (
                            <Box key={`child-checkbox-${cIndex}`} sx={{ pl: 5 }}>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={child.checked}
                                    onChange={() => handleCheckChild(item.id, child.id)}
                                    sx={{ mt: -1, color: '#425E8E' }}
                                  />
                                }
                                label={renderLabel ? renderLabel(child.label) : child.label}
                                sx={{ alignItems: 'flex-start' }}
                              />
                            </Box>
                          );
                        })}
                      </Box>
                    )}
                  </Box>
                );
              }

              // Default: regular checklist item with checkbox
              const isCustomLabel = typeof item.label === 'function';

              return (
                <Box key={`checkbox-${index}`} sx={{ pt: 1, pl: item.nested ? 5 : 0 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={item.checked}
                        onChange={() => handleCheck(item.id)}
                        sx={{ mt: -1, color: '#425E8E' }}
                      />
                    }
                    label={
                      isCustomLabel
                        ? item.label({
                            updateChecklist: (id, update) => {
                              const updatedChecklist = checklist.map(ci =>
                                ci.id === id ? { ...ci, ...update } : ci
                              );
                              onChecklistChange(step.id, updatedChecklist);
                            },
                          })
                        : renderLabel
                        ? renderLabel(labelText)
                        : labelText
                    }
                    sx={{ alignItems: 'flex-start' }}
                  />
                </Box>
              );
            })}
          </Stack>
        </Box>
      )}

      {tab === 1 && (
        <Box p={2}>
          <FAQAccordion step={step.id} page={page} translatedFAQ={translatedFAQ} />
        </Box>
      )}

      {/* Bottom action buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <IconButton onClick={handleDownloadPDF} aria-label="Download PDF">
          <DownloadIcon />
        </IconButton>

        <IconButton
          aria-label="Continue"
          onClick={() => allChecked && onNextStep()}
          disabled={!allChecked}
          sx={{
            backgroundColor: allChecked ? '#425E8E' : '#C4C4C4',
            color: 'white',
            width: '150px',
            height: '50px',
            borderRadius: 7,
            ml: 2,
            '&:hover': {
              backgroundColor: allChecked ? '#425E8E' : '#C4C4C4',
            },
          }}
        >
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </>
  );
}


