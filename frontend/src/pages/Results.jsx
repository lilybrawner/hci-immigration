import React, { useState } from 'react';
import BasicTimeline from '../components/Timeline';
import Panel from '../components/Panel';
import Progress from '../components/Progress';
import { Box, Typography } from '@mui/material';

export default function Results({ steps, initialChecklists, page , renderLabel}) {
  const [selectedStep, setSelectedStep] = useState(steps?.[0] || null);
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
  const splitStyle = {
    width: '40%'
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center'}}>
      
      <Box sx={ selectedStep ? splitStyle : {} }>

          <Progress totalSteps={steps.length} completedSteps={completedCount} />
          <Box sx={{paddingRight: 5}}>
          <BasicTimeline
            steps={steps}
            onStepClick={setSelectedStep}
            completedSteps={completedSteps}
            selectedStep={selectedStep}  
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
          />
        </Box>
      )}
    </Box>
  );
}
