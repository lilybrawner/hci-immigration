import React from 'react';
import Results from './Results';
import { sSteps, sChecklist } from './steps/SpouseSteps';

export default function SpouseRes() {
  return <Results steps={sSteps} initialChecklists={sChecklist} page="SFAQ" />;
}