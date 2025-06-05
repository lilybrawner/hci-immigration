import React, { useRef } from 'react';
import '../App.css';
import FAQAccordion from './Accordion';
import AccessibilityBar from './AccessibilityBar';
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Checkbox,
  FormControlLabel,
  Stack,
  IconButton,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { pdf } from '@react-pdf/renderer';
import ChecklistPDF from './ChecklistPDF'; 
import { FAQ } from './FAQSteps.jsx/FAQ';

export default function Panel({ step, checklist, onChecklistChange, onSetTranslation, page, renderLabel, onNextStep , isLast}) {
  const [tab, setTab] = React.useState(0);
  const [showCompletionPopup, setShowCompletionPopup] = React.useState(false);
  const panelRef = useRef(null);
  const faqForStep = FAQ[page]?.[step.id] || [];

  const stepText = checklist.map(item => typeof item.label === 'string' ? item.label : '').join('\n');

  const allChecked = checklist
    .filter(item => !item.section && !item.textOnly)
    .every(item => item.checked);

  const handleCheck = (id) => {
    const clickedItem = checklist.find(item => item.id === id);
    const isChecking = !clickedItem?.checked;

    const updated = checklist.map(item =>
      item.id === id ? { ...item, checked: isChecking } : item
    );

    onChecklistChange(step.id, updated);
  };

  const handleDropdownChange = (item, selectedIndex) => {
    const updatedChecklist = checklist.map(ci => {
      if (ci.id === item.id) {
        const updated = { ...ci, selected: selectedIndex, checked: true };

        if (Array.isArray(ci.options[selectedIndex]?.children)) {
          // If there are nested children, auto-check them all false initially
          updated.options = ci.options.map((option, idx) => {
            if (idx === selectedIndex && option.children) {
              return {
                ...option,
                children: option.children.map(child => ({ ...child, checked: child.checked ?? false })),
              };
            }
            return option;
          });
        }
        return updated;
      }
      return ci;
    });

    onChecklistChange(step.id, updatedChecklist);
  };

  const handleCheckChild = (parentId, childId) => {
    const updatedChecklist = checklist.map(item => {
      if (item.id === parentId) {
        const updatedOptions = item.options.map(option => {
          if (option.children) {
            const updatedChildren = option.children.map(child =>
              child.id === childId ? { ...child, checked: !child.checked } : child
            );
            return { ...option, children: updatedChildren };
          }
          return option;
        });
        return { ...item, options: updatedOptions };
      }
      return item;
    });

    onChecklistChange(step.id, updatedChecklist);
  };

  const handleDownloadPDF = async () => {
    const doc = <ChecklistPDF step={step} checklist={checklist} faq={faqForStep} />;
    const asPdf = pdf(doc);
    const blob = await asPdf.toBlob();
  
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Step-${step.id}-Checklist-and-FAQ.pdf`;
    a.style.display = 'none';
  
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  
    URL.revokeObjectURL(url);
  };

  return (
    <>
    <div ref={panelRef}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 2,
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 1, sm: 0 },
          backgroundColor: '#E9EFFB',
          borderRadius: 3,
        }}
      >
        <Box sx={{ flexShrink: 0 }}>
          <Tabs value={tab} onChange={(e, v) => setTab(v)}>
            <Tab label="Step-by-Step" />
            <Tab label="Frequently Asked Questions" />
          </Tabs>
        </Box>

        <Box sx={{ ml: { xs: 0, sm: 2 }, flexShrink: 0, width: { xs: '100%', sm: 'auto' } }}>
          <AccessibilityBar
            onSetTranslation={onSetTranslation}
            panelContainerRef={panelRef}
          />
        </Box>
      </Box>

      {tab === 0 && (
        <Box p={0}>
          <Stack spacing={1}>
            {checklist.map((item, index) => {
              const labelText = item.translation || item.label || item.section;

              if (item.section) {
                return (
                  <Box key={`section-${index}`} sx={{ pt: index === 0 ? 0 : 4, pb: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {renderLabel ? renderLabel(item.section) : item.section}
                    </Typography>
                  </Box>
                );
              }

              if (item.textOnly) {
                return (
                  <Typography
                    key={`textOnly-${index}`}
                    variant="body1"
                    sx={{ pt: 1, pl: item.nested ? 5 : 0 }}
                  >
                    {renderLabel ? renderLabel(labelText) : labelText}
                  </Typography>
                );
              }

              if (item.type === 'dropdown') {
                // Handle dropdown with or without nested children
                const selectedIndex = item.selected ?? '';

                // If there are nested children for the selected option
                const selectedOption = typeof selectedIndex === 'number' ? item.options[selectedIndex] : null;
                const hasNestedChildren = selectedOption?.children && selectedOption.children.length > 0;

                return (
                  <Box key={`dropdown-${index}`} sx={{ pt: 1, pl: item.nested ? 5 : 0 }}>
                    <FormControl fullWidth size="small">
                      <Typography variant="body1" sx={{ mb: 1 }}>
                        {renderLabel ? renderLabel(item.label) : item.label}
                      </Typography>
                      <Select
                        value={selectedIndex}
                        onChange={(e) => handleDropdownChange(item, e.target.value)}
                        displayEmpty
                      >
                        <MenuItem disabled value="">
                          <em>Select an option</em>
                        </MenuItem>
                        {item.options.map((option, idx) => {
                          const label = typeof option === 'string' ? option : option.label;
                          return (
                            <MenuItem key={idx} value={idx}>
                              {label}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>

                    {hasNestedChildren && (
                      <Box sx={{ mt: 1 }}>
                        {selectedOption.children.map((child, cIndex) => {
                          if (child.textOnly) {
                            return (
                              <Typography
                                key={`child-textOnly-${cIndex}`}
                                variant="body1"
                                sx={{ pl: 5 }}
                              >
                                {renderLabel ? renderLabel(child.label) : child.label}
                              </Typography>
                            );
                          }

                          return (
                            <Box key={`child-checkbox-${cIndex}`} sx={{ pl: 5 }}>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={child.checked}
                                    onChange={() => handleCheckChild(item.id, child.id)}
                                    sx={{ mt: -1, color: '#425E8E' }}
                                  />
                                }
                                label={renderLabel ? renderLabel(child.label) : child.label}
                                sx={{ alignItems: 'flex-start' }}
                              />
                            </Box>
                          );
                        })}
                      </Box>
                    )}
                  </Box>
                );
              }

              // Normal checkbox items
              const isCustom = typeof item.label === 'function';

              return (
                <Box key={`checkbox-${index}`} sx={{ pt: 1, pl: item.nested ? 5 : 0 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={item.checked}
                        onChange={() => handleCheck(item.id)}
                        sx={{ mt: -1, color: '#425E8E' }}
                      />
                    }
                    label={isCustom
                      ? item.label({
                          updateChecklist: (id, update) => {
                            const updatedChecklist = checklist.map(ci =>
                              ci.id === id ? { ...ci, ...update } : ci
                            );
                            onChecklistChange(step.id, updatedChecklist);
                          },
                        })
                      : renderLabel
                      ? renderLabel(labelText)
                      : labelText}
                    sx={{ alignItems: 'flex-start' }}
                  />
                </Box>
              );
            })}
          </Stack>
        </Box>
      )}

      {tab === 1 && (
        <Box p={2}>
          <FAQAccordion step={step.id} page={page} />
        </Box>
      )}

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <IconButton type="button" onClick={handleDownloadPDF}>
          <DownloadIcon />
        </IconButton>
        <IconButton
          sx={{
            backgroundColor: allChecked ? '#425E8E' : '#C4C4C4',
            color: 'white',
            width: '150px',
            height: '50px',
            borderRadius: 7,
            ml: 2,
            "&:hover": {
              backgroundColor: allChecked ? '#425E8E' : '#C4C4C4'
            }
          }}
          onClick={() => {
            if (allChecked) {
              if (isLast) {
                setShowCompletionPopup(true);
              } else {
                onNextStep();
              }
            }
          }}
          aria-label="Continue"
        >
          <ArrowForwardIcon />
        </IconButton>
      </Box>
      <Dialog open={showCompletionPopup} onClose={() => setShowCompletionPopup(false)}>
  <DialogTitle>🎉 Congratulations!</DialogTitle>
  <DialogContent>
    <Typography>You have completed this process.</Typography>
  </DialogContent>
  <DialogActions>
    <Button onClick={() => setShowCompletionPopup(false)} autoFocus>
      Close
    </Button>
  </DialogActions>
</Dialog>
      </div>
    </>
  );
}


