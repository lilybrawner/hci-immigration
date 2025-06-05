import * as React from 'react';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { FAQ } from './FAQSteps.jsx/FAQ';

// Utility: extract plain text from React elements recursively
function extractTextNodes(element, acc = []) {
  if (typeof element === 'string') {
    acc.push(element);
  } else if (React.isValidElement(element)) {
    React.Children.forEach(element.props.children, child => {
      extractTextNodes(child, acc);
    });
  }
  return acc;
}

// Utility: rebuild React elements by replacing text nodes with translations
function rebuildWithTranslatedText(element, translations, index = { i: 0 }) {
  if (typeof element === 'string') {
    const translated = translations[index.i] || element;
    index.i++;
    return translated;
  } else if (React.isValidElement(element)) {
    const children = React.Children.map(element.props.children, child =>
      rebuildWithTranslatedText(child, translations, index)
    );
    return React.cloneElement(element, { ...element.props }, children);
  }
  return null;
}

export default function FAQAccordion({
  step,
  page,
  translatedQuestions,
  translatedAnswers,
}) {
  const FAQList = FAQ?.[page]?.[step] ?? [];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {FAQList.length === 0 && (
        <Typography variant="body2" sx={{ mt: 2 }}>
          No FAQs for this step.
        </Typography>
      )}

      {FAQList.map((item, index) => {
        // Prepare question content
        let questionContent;
        if (translatedQuestions && translatedQuestions[index]) {
          // If translation exists and original is JSX, rebuild JSX, else use string
          if (React.isValidElement(item.question)) {
            questionContent = rebuildWithTranslatedText(
              item.question,
              [translatedQuestions[index]]
            );
          } else {
            questionContent = translatedQuestions[index];
          }
        } else {
          questionContent = item.question;
        }

        // Prepare answer content similarly
        let answerContent;
        if (translatedAnswers && translatedAnswers[index]) {
          if (React.isValidElement(item.answer)) {
            answerContent = rebuildWithTranslatedText(
              item.answer,
              [translatedAnswers[index]]
            );
          } else {
            answerContent = translatedAnswers[index];
          }
        } else {
          answerContent = item.answer;
        }

        return (
          <Box key={index} sx={{ padding: 2, borderColor: 'black' }}>
            <Accordion sx={{ borderStyle: 'solid', borderColor: '#425E8E' }}>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls={`faq-${step}-${index}-content`}
                id={`faq-${step}-${index}-header`}
              >
                <Typography component="span">{questionContent}</Typography>
              </AccordionSummary>
              <AccordionDetails>{answerContent}</AccordionDetails>
            </Accordion>
          </Box>
        );
      })}
    </Box>
  );
}
