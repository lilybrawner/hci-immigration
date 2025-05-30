import React from 'react';
import Results from './Results';
import { F1steps, F1checklists } from './steps/F1Steps';

export default function F1Res() {
  return <Results steps={F1steps} initialChecklists={F1checklists} page="F1FAQ" />;
}