import React, { useState } from 'react';
import BasicTimeline from '../components/Timeline';
import Panel from '../components/Panel';
import Progress from '../components/Progress';
import { Box, Typography } from '@mui/material';

export default function Results({ steps, initialChecklists, page }) {
  const [selectedStep, setSelectedStep] = useState(null);
  const [checklists, setChecklists] = useState(initialChecklists || {});

  const handleChecklistChange = (stepId, updatedChecklist) => {
    setChecklists(prev => ({ ...prev, [stepId]: updatedChecklist }));
  };

  const handleSetTranslation = (translatedText) => {
    if (!selectedStep) return;
    console.log('Raw translatedText:', JSON.stringify(translatedText));
    // Split by both \n and \r\n, just in case
    const lines = translatedText.split(/\r?\n/).map(line => line.trim());
  
    console.log('Split lines:', lines);  // Debugging output
  
    const updated = checklists[selectedStep.id].map((item, idx) => ({
      ...item,
      translation: lines[idx] || item.label,
    }));
  
    setChecklists(prev => ({ ...prev, [selectedStep.id]: updated }));
  };

  const completedSteps = Object.entries(checklists)
    .filter(([_, items]) =>
    items.filter(i => !i.textOnly && !i.section).every(item => item.checked)
    )
    .map(([stepId]) => Number(stepId));

  const completedCount = completedSteps.length;
  const changeWidth = selectedStep ? '50%' : '100%';
  const percentage = steps.length > 0 ? Math.round((completedCount / steps.length) * 100) : 0;

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Box sx={{ width: changeWidth, ml: -10}}>
        <Box sx={{maxWidth: 600, mx: 'auto', mt: 2}}>
          <Progress totalSteps={steps.length} completedSteps={completedCount} />
          <Typography align="center" sx={{ mt: 1  }}>
          {`${percentage}%`}
          </Typography>
        </Box>
        <Box sx={{ml:-20}}>
          <BasicTimeline
            steps={steps}
            onStepClick={setSelectedStep}
            completedSteps={completedSteps}
            selectedStep={selectedStep}  
          />
        </Box>
      </Box>

      {selectedStep && (
        <Box sx={{ width: '50%', overflowY: 'auto' }}>
          <Panel
            step={selectedStep}
            checklist={checklists[selectedStep.id] || []}
            onChecklistChange={handleChecklistChange}
            onSetTranslation={handleSetTranslation}
            page={page}
          />
        </Box>
      )}
    </Box>
  );
}
