import React, { useState } from 'react';
import BasicTimeline from './Timeline';
import Panel from './Panel';
import { Box } from '@mui/material';


const steps = [
    { id: 1, label: "Step 1: Lorem ipsum dolor sit amet", time: "Estimated time: suspendisse eget "}, 
    { id: 2, label: "Step 2: Lorem ipsum dolor sit amet", time: "Estimated time: suspendisse eget "}, 
    { id: 3, label: "Step 3: Lorem ipsum dolor sit amet", time: "Estimated time: suspendisse eget "}, 
    { id: 4, label: "Step 4: Lorem ipsum dolor sit amet", time: "Estimated time: suspendisse eget "}, 
]

  export default function Results() {
    const [selectedStep, setSelectedStep] = useState(null);
    const [checklists, setChecklists] = useState({
      1: [{ label: 'Suspendisse eget tellus ut sapien vehicula hendrerit', checked: false }, 
        { label: 'Suspendisse eget tellus ut sapien vehicula hendrerit', checked: false }],
      2: [{ label: 'Suspendisse eget tellus ut sapien vehicula hendrerit', checked: false }],
      3: [{ label: 'Suspendisse eget tellus ut sapien vehicula hendrerit', checked: false }, 
        { label: 'Suspendisse eget tellus ut sapien vehicula hendrerit', checked: false }],
    });
  
    const handleChecklistChange = (stepId, updatedChecklist) => {
      setChecklists(prev => ({ ...prev, [stepId]: updatedChecklist }));
    };
  
    const completedSteps = Object.entries(checklists)
      .filter(([_, items]) => items.every(item => item.checked))
      .map(([stepId]) => Number(stepId));
  
    return (
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <Box sx={{ width: '50%', borderRight: '1px solid #ccc', overflowY: 'auto' }}>
          <BasicTimeline
            steps={steps}
            onStepClick={setSelectedStep}
            completedSteps={completedSteps}
          />
        </Box>
        <Box sx={{ width: '50%', overflowY: 'auto' }}>
          {selectedStep && (
            <Panel
              step={selectedStep}
              checklist={checklists[selectedStep.id] || []}
              onChecklistChange={handleChecklistChange}
            />
          )}
        </Box>
      </Box>
    );
  }
