import React, { useState } from 'react';
import BasicTimeline from '../components/Timeline';
import Panel from '../components/Panel';
import Progress from '../components/Progress';
import { Box } from '@mui/material';

export default function Results({ steps, initialChecklists }) {
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
      items.filter(i => !i.textOnly).every(item => item.checked)
    )
    .map(([stepId]) => Number(stepId));

  const completedCount = completedSteps.length;
  const changeWidth = selectedStep ? '50%' : '100%';

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Box sx={{ width: changeWidth, overflowY: 'auto', ml: -20 }}>
        <Progress totalSteps={steps.length} completedSteps={completedCount} />
        <BasicTimeline
          steps={steps}
          onStepClick={setSelectedStep}
          completedSteps={completedSteps}
        />
      </Box>

      {selectedStep && (
        <Box sx={{ width: '50%', overflowY: 'auto' }}>
          <Panel
            step={selectedStep}
            checklist={checklists[selectedStep.id] || []}
            onChecklistChange={handleChecklistChange}
            onSetTranslation={handleSetTranslation}
          />
        </Box>
      )}
    </Box>
  );
}
