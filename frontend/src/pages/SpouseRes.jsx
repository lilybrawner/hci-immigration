import React from 'react';
import { Tooltip } from '@mui/material';
import Results from './Results';
import { sSteps, sChecklist } from './steps/SpouseSteps';
import SpouseGlossary from './steps/SpouseGlossary'; // import Spouse Glossary

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

export default function SpouseRes() {
  const glossary = SpouseGlossary;

  const renderLabelWithGlossary = (content) => wrapGlossaryTerms(content, glossary);
      return <Results steps={sSteps} initialChecklists={sChecklist} page="SFAQ"  renderLabel={renderLabelWithGlossary}/>;
}
