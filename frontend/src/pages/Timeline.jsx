import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Typography } from '@mui/material';

function BasicTimeline({ steps, onStepClick, completedSteps }) {
  return (
    <Timeline>
      {steps.map((step, index) => {
        const isComplete = completedSteps.includes(step.id);
        return (
          <TimelineItem key={step.id} onClick={() => onStepClick(step)}>
            <TimelineSeparator>
              <TimelineDot color={isComplete ? 'success' : 'grey'}>
                {isComplete ? <CheckCircleOutlineIcon /> : <RadioButtonUncheckedIcon/> }
              </TimelineDot>
              {index < steps.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6">{step.label}</Typography>
              <Typography variant="body2" color="text.secondary">{step.time}</Typography>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
   
  );
}

export default BasicTimeline;