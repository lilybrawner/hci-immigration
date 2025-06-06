import React, { useState, useRef, useEffect } from 'react';
import BasicTimeline from '../components/Timeline';
import Panel from '../components/Panel';
import Progress from '../components/Progress';
import { Box, Typography, IconButton } from '@mui/material';
import { FAQ } from '../components/FAQSteps.jsx/FAQ';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

export default function Results({ steps, initialChecklists, page, renderLabel }) {
  const [selectedStep, setSelectedStep] = useState(steps?.[0] || null);
  const [checklists, setChecklists] = useState(initialChecklists || {});
  const [leftWidth, setLeftWidth] = useState(35); // in percentage
  const isDragging = useRef(false);
  const navigate = useNavigate();

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const newLeftWidth = (e.clientX / window.innerWidth) * 100;
    if (newLeftWidth >= 20 && newLeftWidth <= 70) {
      setLeftWidth(newLeftWidth);
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

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
    const lines = translatedText.split(/\r?\n/).map(line => line.trim());
    console.log('Split lines:', lines);
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

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', height: '100vh' }}>
      {/* Left Panel */}
      <Box sx={{ width: `${leftWidth}%`, minWidth: '20%', maxWidth: '70%', overflowY: 'auto', overflowX: 'hidden',
    maxHeight: '100vh', }}>
        {/* Home + Progress */}
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
        <Box sx={{ paddingRight: 2}}>
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

      {/* Resizer */}
<Box
  onMouseDown={handleMouseDown}
  sx={{
    width: '4px',
    cursor: 'col-resize',
    backgroundColor: '#ccc',
    '&:hover': { backgroundColor: '#999' },
    mr: 3, // adds horizontal margin
    ml: 0,
  }}
/>

{/* Right Panel */}
{selectedStep && (
  <Box sx={{ width: `calc(${100 - leftWidth}% - 16px)`, overflowY: 'auto' , pr: 3, pt: 2}}>

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
