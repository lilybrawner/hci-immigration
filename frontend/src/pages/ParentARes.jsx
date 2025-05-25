import React from 'react';
import Results from './Results';
import { paSteps, paChecklist } from './steps/ParentASteps';

export default function ParentARes() {
  return <Results steps={paSteps} initialChecklists={paChecklist} page="PAFAQ" />;
}