import React from 'react';
import Results from './Results';
import { gcsteps, gcchecklists  } from './steps/GreencardSteps';

export default function GreencardRes() {
  return <Results steps={gcsteps} initialChecklists={gcchecklists} />;
}