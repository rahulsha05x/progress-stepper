import React from 'react';

export interface StepData {
  text?: string | object;
  status?: string;
  id: number;
  className: string;
  progress?: number;
}
interface Props {
  steps: StepData[];
  activeStep: number;
  className: string;
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
const ProgressBarWrapper: React.FC<any> = ({
  steps,
  activeStep,
  align = 'center',
  orientation = 'horizontal',
  color,
  content,
  className = '',
  children,
}) => {
  let currentItemStatus: string;
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      currentItemStatus = getStatus(activeStep, index);
      return React.cloneElement(child, {
        currentitemstatus: currentItemStatus,
        itemindex: index,
      });
    });
  };
  const renderChild = renderChildren();
  return (
    <ul
      data-testid="progressBar-wrapper"
      className={`progress-tracker --${orientation} ${className}`}
    >
      {renderChild}
    </ul>
  );
};

export default ProgressBarWrapper;
