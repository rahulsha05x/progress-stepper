import React, { useState } from 'react';
import NewProgressStep from './NewProgressStep';

export interface StepData {
  text?: string | object;
  status?: string;
  id: number;
  progress?: number;
}
interface Props {
  steps: StepData[];
  activeStep: number;
  orientation?: string;
  color?: string;
  content?: any;
}

export const getStatus = (activeStep: number, index: number) => {
  let stepClass = 'inactive';
  const completed = activeStep > index + 1;
  if (completed) {
    stepClass = 'is-completed';
  }
  if (activeStep === index + 1) {
    stepClass = 'is-active';
  }
  return stepClass;
};
const NewProgressBar1: React.FC<any> = ({
  steps,
  activeStep,
  orientation = 'horizontal',
  color,
  content,
  children,
}) => {
  let currentItemStatus: string;
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      currentItemStatus = getStatus(activeStep, index);
      return React.cloneElement(child, {
        currentItemStatus,
        itemIndex: index,
      });
    });
  };
  const renderChild = renderChildren();
  return (
    <div>
      <ul className={`progress-tracker --${orientation}`}>{renderChild}</ul>
    </div>
  );
};

export default NewProgressBar1;
