import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Typography, Box } from '@mui/material';

function BasicTimeline({ steps, onStepClick, completedSteps = [], onToggleComplete, selectedStep, checklists, onChecklistChange }) {

  const handleMasterCheck = (stepId, isChecking) => {
    const checklist = checklists[stepId] || [];
    const updated = checklist.map(item => ({ ...item, checked: isChecking }));
    onChecklistChange(stepId, updated);
  };

  return (
    <Timeline
    sx={{
      [`& .${timelineOppositeContentClasses.root}`]: {
        flex: 0.2,
      },
    }}
    >
      {steps.map((step, index) => {
        const isComplete = completedSteps.includes(step.id);
        const stepChecklist = checklists[step.id] || [];
        const allChecked = stepChecklist.length > 0 && stepChecklist.every(item => item.checked);
        return (
          <TimelineItem key={step.id} sx={{ cursor: 'pointer'}}>
          <TimelineOppositeContent color="textSecondary">
              <Checkbox
                checked={allChecked}
                onChange={(e) => handleMasterCheck(step.id, e.target.checked)}
              sx={{ mt: -1, color: '#425E8E' }}
            />
        </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                color={isComplete ? 'success' : 'grey'}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering onStepClick
                  if (onToggleComplete) {
                    onToggleComplete(step);
                  }
                }}
                sx={{ cursor: 'pointer' }}
                aria-label={isComplete ? "Mark step as incomplete" : "Mark step as complete"}
              >
                {isComplete ? <CheckCircleOutlineIcon /> : <RadioButtonUncheckedIcon />}
              </TimelineDot>
              {index < steps.length - 1 && <TimelineConnector />}
            </TimelineSeparator>

            <TimelineContent onClick={() => onStepClick(step)} 
            sx={{
              backgroundColor: selectedStep?.id === step.id ? '#E9EFFB' : 'transparent',
              borderRadius: 5,
              paddingLeft: 4,
              paddingTop: 1,
              paddingBottom: 1
            }}>
              
              <Typography variant="h6">{step.label}</Typography>
              <Typography variant="body2" color="text.secondary">{step.time}</Typography>
            </TimelineContent>
          </TimelineItem>
        );
        
      }
      
      )}
    </Timeline>
    
  );
}

export default BasicTimeline;