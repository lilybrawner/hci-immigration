import * as React from 'react';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { FAQ } from './FAQSteps.jsx/FAQ';

export default function FAQAccordion({ step, page }) {
const FAQList = FAQ?.[page]?.[step] ?? [];
  return (
    <Box sx={{
      display: 'flex', flexDirection: 'column'
    }}>
      {FAQList.map((item, index) => (
        <Box sx={{ padding: 2, borderColor: 'black' }}>
        <Accordion key={index} sx={{borderStyle: 'solid', borderColor: '#425E8E' }} >
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls={`faq-${step}-${index}-content`}
              id={`faq-${step}-${index}-header`}
          >
            <Typography component="span">{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>{item.answer}</AccordionDetails>
        </Accordion>
        </Box>
        ))}
        {FAQList.length === 0 && (
          <Typography variant="body2" sx={{ mt: 2 }}>
            No FAQs for this step.
          </Typography>

        )}
    </Box>
  );
}