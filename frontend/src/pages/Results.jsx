import React, { useState, useEffect } from 'react';
import BasicTimeline from '../components/Timeline';
import Panel from '../components/Panel';
import Progress from '../components/Progress';
import { Box } from '@mui/material';

// Util functions to extract and rebuild JSX text
function extractTextNodes(element, acc = []) {
  if (typeof element === 'string') {
    acc.push(element);
  } else if (React.isValidElement(element)) {
    React.Children.forEach(element.props.children, child => {
      extractTextNodes(child, acc);
    });
  }
  return acc;
}

function rebuildWithTranslatedText(element, translations, index = { i: 0 }) {
  if (typeof element === 'string') {
    const translated = translations[index.i] || element;
    index.i++;
    return translated;
  } else if (React.isValidElement(element)) {
    const children = React.Children.map(element.props.children, child =>
      rebuildWithTranslatedText(child, translations, index)
    );
    return React.cloneElement(element, { ...element.props }, children);
  }
  return null;
}

export default function Results({ steps, initialChecklists, page, renderLabel }) {
  const [selectedStep, setSelectedStep] = useState(steps?.[0] || null);
  const [checklists, setChecklists] = useState(initialChecklists || {});

  const handleChecklistChange = (stepId, updatedChecklist) => {
    setChecklists(prev => ({ ...prev, [stepId]: updatedChecklist }));
  };

  // Store translated checklist text per step id (already in your code via setChecklists)
  // We'll add new state for translated timeline step titles:
  const [translatedStepTitles, setTranslatedStepTitles] = useState([]);

  // Extract checklist texts for translation
  const extractChecklistTexts = () => {
    if (!selectedStep || !checklists[selectedStep.id]) return [];
    return checklists[selectedStep.id]
      .filter(item => !item.textOnly && !item.section)
      .map(item => {
        if (typeof item.label === 'string') return item.label;
        if (React.isValidElement(item.label)) return extractTextNodes(item.label).join('');
        return '';
      })
      .filter(Boolean);
  };

  // Extract step titles/texts for timeline translation
  const extractStepTitles = () => {
    if (!steps) return [];
    return steps.map(step => {
      if (typeof step.title === 'string') return step.title;
      if (React.isValidElement(step.title)) return extractTextNodes(step.title).join('');
      // fallback - if no title prop, or other structure
      return String(step.id || '');
    });
  };

  const handleChecklistTranslation = (translatedTexts) => {
    if (!selectedStep) return;

    const currentChecklist = checklists[selectedStep.id];
    if (!currentChecklist) return;

    const updatedChecklist = currentChecklist.map((item, idx) => {
      if (item.textOnly || item.section) return item;

      let originalText = '';
      if (typeof item.label === 'string') originalText = item.label;
      else if (React.isValidElement(item.label)) originalText = extractTextNodes(item.label).join('');

      const translated = translatedTexts[idx] || originalText;

      if (typeof item.label === 'string') {
        return { ...item, translation: translated };
      } else if (React.isValidElement(item.label)) {
        const rebuilt = rebuildWithTranslatedText(item.label, [translated]);
        return { ...item, translation: rebuilt };
      }

      return item;
    });

    setChecklists(prev => ({ ...prev, [selectedStep.id]: updatedChecklist }));
  };

  // New function to set translated timeline step titles
  const handleSetStepTitlesTranslation = (translatedTexts) => {
    setTranslatedStepTitles(translatedTexts);
  };

  const handleSetTranslation = (translatedTexts) => {
    // Use this function for checklist translation only (called from Panel)
    handleChecklistTranslation(translatedTexts);
  };

  const completedSteps = Object.entries(checklists)
    .filter(([_, items]) =>
      items.filter(i => !i.textOnly && !i.section).every(item => item.checked)
    )
    .map(([stepId]) => Number(stepId));

  const completedCount = completedSteps.length;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={selectedStep ? { width: '40%' } : {}}>
        <Progress totalSteps={steps.length} completedSteps={completedCount} />
        <Box sx={{ paddingRight: 5 }}>
          <BasicTimeline
            steps={steps}
            onStepClick={setSelectedStep}
            completedSteps={completedSteps}
            selectedStep={selectedStep}
            checklists={checklists}
            onChecklistChange={handleChecklistChange}
            translatedStepTitles={translatedStepTitles} // new prop for translated titles
          />
        </Box>
      </Box>

      {selectedStep && (
        <Box sx={{ width: '60%', overflowY: 'auto' }}>
          <Panel
            step={selectedStep}
            checklist={checklists[selectedStep.id] || []}
            onChecklistChange={handleChecklistChange}
            onSetTranslation={handleSetTranslation}
            page={page}
            renderLabel={renderLabel}
            onNextStep={() => {
              goToNextStep();
              // Optional: reset translations on step change
              // setTranslatedStepTitles([]);
            }}
            onSetStepTitlesTranslation={handleSetStepTitlesTranslation} // pass translation setter for timeline titles
            extractStepTitles={extractStepTitles} // pass function if Panel handles timeline translation requests
          />
        </Box>
      )}
    </Box>
  );
}
