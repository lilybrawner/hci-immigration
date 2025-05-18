import * as React from 'react';
import MobileStepper from '@mui/material/MobileStepper';

export default function Progress (steps, completedSteps) {
    return(
        <MobileStepper
            variant="progress"
            steps={steps.length}
            position="static"
            activeStep={completedSteps}
            sx={{ maxWidth: 400, flexGrow: 1 }}
        />
    )
}