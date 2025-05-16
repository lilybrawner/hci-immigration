import React from 'react';
import { Box, Tabs, Tab, Typography, Checkbox, FormControlLabel } from '@mui/material';

export default function Panel({ step, checklist, onChecklistChange }) {
  const [tab, setTab] = React.useState(0);

  const handleCheck = (index) => {
    const updated = checklist.map((item, i) =>
      i === index ? { ...item, checked: !item.checked } : item
    );
    onChecklistChange(step.id, updated);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={tab} onChange={(e, v) => setTab(v)}>
        <Tab label="Checklist" />
        <Tab label="FAQ" />
      </Tabs>

      {tab === 0 && (

        <Box p={2}>
            <Box>
            <Typography variant="h5">
                Lorem ipsum dolor sit amet
            </Typography>
            <Typography variant="body1">
            onsectetur adipiscing elit. Suspendisse eget tellus ut sapien vehicula hendrerit. 
            Integer tempus neque metus, ac ullamcorper tortor scelerisque non. Donec vulputate 
            massa dolor, convallis aliquet dui ultrices vel. Curabitur ullamcorper dignissim 
            lacus, in rhoncus lorem semper eget. Curabitur vel tincidunt dui. Mauris maximus 
            augue sit amet interdum luctus. Sed bibendum quam eget enim consectetur sollicitudin.
            </Typography>
            <Typography variant="h5">
                Lorem ipsum dolor sit amet
            </Typography>
            <Typography variant="body1">
            onsectetur adipiscing elit. Suspendisse eget tellus ut sapien vehicula hendrerit. 
            Integer tempus neque metus, ac ullamcorper tortor scelerisque non. Donec vulputate 
            massa dolor, convallis aliquet dui ultrices vel. Curabitur ullamcorper dignissim 
            lacus, in rhoncus lorem semper eget. Curabitur vel tincidunt dui. Mauris maximus 
            augue sit amet interdum luctus. Sed bibendum quam eget enim consectetur sollicitudin.
            </Typography>
            </Box>
          <Typography variant="h6">Checklist</Typography>
          {checklist.map((item, index) => (
            <FormControlLabel
            sx={{ alignItems: 'flex-start' }}
              key={index}
              control={
                <Checkbox sx={{
                    marginTop: -1,
                }} checked={item.checked} onChange={() => handleCheck(index)} />
              }
              label={item.label}
            />
          ))}
        </Box>
      )}
      {tab === 1 && (
        <Box p={2}>
          <Typography variant="h6">Vivamus non risus lacusdolor sit amet?</Typography>
        </Box>
      )}
    </Box>
  );
}
