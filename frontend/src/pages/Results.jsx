import React, { useState } from 'react';
import BasicTimeline from '../components/Timeline';
import Panel from '../components/Panel';
import Progress from '../components/Progress';
import { Box, Typography } from '@mui/material';
import { FAQ } from '../components/FAQSteps.jsx/FAQ';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';


export default function Results({ steps, initialChecklists, page , renderLabel}) {
  const [selectedStep, setSelectedStep] = useState(steps?.[0] || null);
  const [checklists, setChecklists] = useState(initialChecklists || {});
  const navigate = useNavigate();

  const handleChecklistChange = (stepId, updatedChecklist) => {
    setChecklists(prev => ({ ...prev, [stepId]: updatedChecklist }));
  };

  const goToNextStep = () => {
    const currentIndex = steps.findIndex(s => s.id === selectedStep.id);
    if (currentIndex < steps.length - 1) {
      setSelectedStep(steps[currentIndex + 1]);
    }
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
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      {/* Left Column: Home + Progress + Timeline */}
      <Box sx={selectedStep ? { width: '40%' } : {}}>
        {/* Home and Progress inline */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, ml: 2 }}>
          <IconButton
            onClick={() => navigate('/')}
            sx={{
              backgroundColor: 'white',
              boxShadow: 2,
              mr: '-8px',
              '&:hover': { backgroundColor: '#f0f0f0' },
            }}
          >
            <HomeIcon />
          </IconButton>
  
          <Progress totalSteps={steps.length} completedSteps={completedCount} />
        </Box>
  
        {/* Timeline */}
        <Box sx={{ paddingRight: 6 }}>
          <BasicTimeline
            steps={steps}
            onStepClick={setSelectedStep}
            completedSteps={completedSteps}
            selectedStep={selectedStep}
            checklists={checklists}
            onChecklistChange={handleChecklistChange}
          />
        </Box>
      </Box>
  
      {/* Right Column: Panel */}
      {selectedStep && (
        <Box sx={{ width: '60%', overflowY: 'auto' }}>
          <Panel
            step={selectedStep}
            checklist={checklists[selectedStep.id] || []}
            onChecklistChange={handleChecklistChange}
            onSetTranslation={handleSetTranslation}
            page={page}
            renderLabel={renderLabel}
            onNextStep={goToNextStep}
            isLast={steps.indexOf(selectedStep) === steps.length - 1}
          />
        </Box>
      )}
    </Box>
  );
}  