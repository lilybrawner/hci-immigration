import * as React from 'react';
import MobileStepper from '@mui/material/MobileStepper';

export default function Progress({ totalSteps, completedSteps }) {
    return (
      <MobileStepper
        variant="progress"
        steps={totalSteps}
        activeStep={completedSteps}
        position="static"
        sx={{
            maxWidth: 700, 
            flexGrow: 1,
            marginLeft: '60%',
        }}
      />
    );
  }