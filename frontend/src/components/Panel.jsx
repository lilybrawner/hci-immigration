import React from 'react';
import { Box, Tabs, Tab, Typography, Checkbox, FormControlLabel, Stack  } from '@mui/material';
import '../App.css'
import FAQAccordion from './Accordion';

export default function Panel({ step, checklist, onChecklistChange }) {
  const [tab, setTab] = React.useState(0);

  const handleCheck = (index) => {
    const updated = checklist.map((item, i) =>
      i === index ? { ...item, checked: !item.checked } : item
    );
    onChecklistChange(step.id, updated);
  };
  console.log(step.id);

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={tab} onChange={(e, v) => setTab(v)}>
        <Tab label="Checklist" />
        <Tab label="FAQ" />
      </Tabs>

      {tab === 0 && (

        <Box p={2}>
          <Stack spacing={1}> 
          
          {checklist.map((item, index) =>
            item.textOnly ? (
              <Typography key={index} variant="body2" sx={{ pl: item.nested ? 2 : 0, mt: 1 }}>
                {item.label}
              </Typography>
            ) : (
              <FormControlLabel
                key={index}
                sx={{ alignItems: 'flex-start', pl: item.nested ? 2 : 0 }}
                control={
                  <Checkbox
                    checked={item.checked}
                    onChange={() => handleCheck(index)}
                    sx={{ mt: -1, color: '#425E8E' }}
                  />
                }
                label={item.label}
          />
        )
      )}
      </Stack>

        </Box>
      )}
      {tab === 1 && (
        <Box p={2}>
          <FAQAccordion step={step.id}/>
        </Box>
      )}
    </Box>
  );
}
