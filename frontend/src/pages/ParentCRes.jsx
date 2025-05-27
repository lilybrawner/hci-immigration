import React from 'react';
import Results from './Results';
import { pcSteps, pcChecklist } from './steps/ParentCSteps';

export default function ParentCRes() {
  return <Results steps={pcSteps} initialChecklists={pcChecklist} page="PCFAQ" />;
}