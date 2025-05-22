import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Typography, Box } from '@mui/material';

function BasicTimeline({ steps, onStepClick, completedSteps = [], onToggleComplete, selectedStep }) {
  return (
    <Timeline position='right'>
      {steps.map((step, index) => {
        const isComplete = completedSteps.includes(step.id);
        return (
          <TimelineItem key={step.id} sx={{ cursor: 'pointer'}}>
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
              padding: 4
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