import React from 'react';
import '../App.css';
import FAQAccordion from './Accordion';
import AccessibilityBar from './AccessibilityBar';
import { Box, Tabs, Tab, Typography, Checkbox, FormControlLabel, Stack, IconButton } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { pdf } from '@react-pdf/renderer';
import ChecklistPDF from './ChecklistPDF'; 

export default function Panel({ step, checklist, onChecklistChange, onSetTranslation, page }) {
  const [tab, setTab] = React.useState(0);

  const stepText = checklist.map(item => item.label).join('\n');

  const handleCheck = (index) => {
    const updated = checklist.map((item, i) =>
      i === index ? { ...item, checked: !item.checked } : item
    );
    onChecklistChange(step.id, updated);
  };

  const handleDownloadPDF = async () => {
    const doc = <ChecklistPDF step={step} checklist={checklist} />;
    const asPdf = pdf([]);
    asPdf.updateContainer(doc);
    const blob = await asPdf.toBlob();

    // Create a link and trigger download
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Step-${step.id}-Checklist.pdf`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 2,
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 1, sm: 0 },
          backgroundColor: '#E9EFFB', 
          borderRadius: 3
        }}
      >
        <Box sx={{ flexShrink: 0 }}>
          <Tabs value={tab} onChange={(e, v) => setTab(v)}>
            <Tab label="Step-by-Step" />
            <Tab label="FAQ" />
          </Tabs>
        </Box>
  
        <Box sx={{ ml: { xs: 0, sm: 2 }, flexShrink: 0, width: { xs: '100%', sm: 'auto' } }}>
        <AccessibilityBar
  stepText={stepText}
  checklist={checklist}
  onSetTranslation={onSetTranslation}
/>
        </Box>
      </Box>
  
      {tab === 0 && (
        <Box p={2}>
          <Stack spacing={1}>
            {checklist.map((item, index) => {
              const labelText = item.translation || item.label;
  
              return item.textOnly ? (
                <Typography
                  key={index}
                  variant="body2"
                  sx={{ pl: item.nested ? 2 : 0, mt: 1 }}
                >
                  {labelText}
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
                  label={labelText}
                />
              );
            })}
          </Stack>
        </Box>
      )}
  
      {tab === 1 && (
        <Box p={2}>
          <FAQAccordion step={step.id} page={page}/>
        </Box>
      )
      }
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <IconButton type="button" onClick={handleDownloadPDF}>
          <DownloadIcon />
        </IconButton>
      </Box>
    </>
  );
}