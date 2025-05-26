import * as React from 'react';
import '../App.css';

export default function Progress({ totalSteps, completedSteps }) {
  const percentage = totalSteps > 0 ? Math.round((completedSteps / totalSteps) * 100) : 0;

  return (
    <div className="progress-parent">
      <div className="progress-div">
        <progress
          className="my-progress"
          value={completedSteps}
          max={totalSteps}
        />
      </div>
      <div className="label-div">
        <p className="progress-label">{`${percentage}%`}</p>
      </div>
    </div>
  );
}
