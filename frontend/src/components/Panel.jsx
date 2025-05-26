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

  const handleCheck = (id) => {
    const clickedItem = checklist.find(item => item.id === id);
    const isController = typeof id === 'string';
    const isChecking = !clickedItem?.checked;
  
    const updated = checklist.map(item => {
      // Toggle the clicked item itself
      if (item.id === id) {
        return { ...item, checked: isChecking };
      }
  
      // If clicked item is a controller, update its nested items
      if (isController && item.hideIfChecked === id) {
        return { ...item, checked: isChecking };
      }
  
      // Otherwise, leave the item unchanged
      return item;
    });
  
    onChecklistChange(step.id, updated);
  };
  

  const handleDownloadPDF = async () => {
    const doc = <ChecklistPDF step={step} checklist={checklist} />;
    const asPdf = pdf(doc);
    const blob = await asPdf.toBlob();

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
        <Box p={0}>
          <Stack spacing={1}>
            {checklist.map((item, index) => {
              if (item.hideIfChecked) {
                const controllingItem = checklist.find(i => i.id === item.hideIfChecked);
                if (controllingItem?.checked) return null;
              }

              // Translation fallback
              const labelText = item.translation || item.label || item.section;

              if (item.section) {
                return (
                  <Box key={`section-${index}`} sx={{ pt: index === 0 ? 0 : 4, pb: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {item.section}
                    </Typography>
                  </Box>
                );
              }

              if (item.textOnly) {
                return (
                  <Typography
                    key={`textOnly-${index}`}
                    variant="body1"
                    sx={{pt: 1, pl: item.nested ? 5 : 0 }}
                  >
                    {labelText}
                  </Typography>
                );
              }

              const hasDropdown =
                item.children && item.children.length > 0 && item.children[0].type === 'dropdown';

              return (
                <Box key={`checkbox-${index}`} sx={{pt: 1, pl: item.nested ? 5 : 0 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={item.checked}
                        onChange={() => handleCheck(item.id)}
                        sx={{ mt: -1, color: '#425E8E' }}
                      />
                    }
                    label={labelText}
                    sx={{ alignIte: 'flex-start' }}
                  />
                  {hasDropdown && item.checked && (
                    <Box sx={{ mt: 0, ml: 4 }}>
                      <select
                        value={item.children[0].selected || ''}
                        onChange={(e) => {
                          const updatedChecklist = checklist.map((el, i) => {
                            if (i === index) {
                              return {
                                ...el,
                                children: el.children.map(child =>
                                  child.type === 'dropdown'
                                    ? { ...child, selected: e.target.value }
                                    : child
                                )
                              };
                            }
                            return el;
                          });
                          onChecklistChange(step.id, updatedChecklist);
                        }}
                      >
                        <option value="" disabled>
                          Select one
                        </option>
                        {item.children[0].options.map((option, optIndex) => (
                          <option key={optIndex} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </Box>
                  )}
                </Box>
              );
            })}
          </Stack>
        </Box>
      )}

      {tab === 1 && (
        <Box p={2}>
          <FAQAccordion step={step.id} page={page}/>
        </Box>
      )}

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <IconButton type="button" onClick={handleDownloadPDF}>
          <DownloadIcon />
        </IconButton>
      </Box>
    </>
  );
}
