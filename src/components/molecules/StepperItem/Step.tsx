import React from 'react';
interface StepProps {
  className?: string;
  color?: string;
  completed?: boolean;
  content?: any;
  text?: string;
  children?: any;
}
export const Step = ({ className = '', children }: StepProps) => {
  const getChildren = () => {
    return React.Children.map(children, (child, index) => {
      if (child) {
        return React.cloneElement(child, {
          itemindex: index,
        });
      }
    });
  };
  const child = getChildren();
  return (
    <li data-testid="step" className={`progress-step ${className}`}>
      {child}
    </li>
  );
};
export default Step;
