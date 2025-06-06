import React from 'react';
import { Tooltip, Link } from '@mui/material';
import Results from './Results';
import { gcsteps, gcchecklists } from './steps/GreencardSteps';
import GreencardGlossary from './steps/GreencardGlossary';

function wrapGlossaryTerms(node, glossary) {
  if (typeof node === 'string') {
    const terms = Object.keys(glossary).sort((a, b) => b.length - a.length);
    const escapedTerms = terms.map(term => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const regex = new RegExp(`(${escapedTerms.join('|')})`, 'gi');

    const parts = node.split(regex);
    return parts.map((part, index) => {
      const matchedTerm = terms.find(t => t.toLowerCase() === part.toLowerCase());
      if (matchedTerm) {
        return (
          <Tooltip key={index} title={glossary[matchedTerm]} arrow>
            <span style={{ textDecoration: 'underline dotted', cursor: 'help' }}>
              {part}
            </span>
          </Tooltip>
        );
      }
      return part;
    });
  }

  if (React.isValidElement(node) && node.props.children) {
    return React.cloneElement(
      node,
      { ...node.props },
      React.Children.map(node.props.children, child => wrapGlossaryTerms(child, glossary))
    );
  }

  return node;
}

function wrapLabelsInData(data, glossary) {
  if (Array.isArray(data)) {
    return data.map((item) => wrapLabelsInData(item, glossary));
  }

  if (typeof data === 'object' && data !== null) {
    const newItem = { ...data };

    if (typeof newItem.label === 'string' || React.isValidElement(newItem.label)) {
      newItem.label = wrapGlossaryTerms(newItem.label, glossary);
    }

    if (newItem.options) {
      newItem.options = wrapLabelsInData(newItem.options, glossary);
    }

    if (newItem.children) {
      newItem.children = wrapLabelsInData(newItem.children, glossary);
    }

    return newItem;
  }

  return data;
}

export default function GreencardRes() {
  const glossary = GreencardGlossary;

  // Apply glossary to all checklist arrays within the object
  const checklistsWithGlossary = Object.fromEntries(
    Object.entries(gcchecklists).map(([key, list]) => [
      key,
      wrapLabelsInData(list, glossary)
    ])
  );

  return (
    <Results
      steps={wrapLabelsInData(gcsteps, glossary)}
      initialChecklists={checklistsWithGlossary}
      page="GCFAQ"
      renderLabel={(label) => wrapGlossaryTerms(label, glossary)}
    />
  );
}