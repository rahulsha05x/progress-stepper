import React from 'react';
interface StepProps {
  className?: string;
  color?: string;
  completed?: boolean;
  content?: any;
  text?: string;
  children?: any;
}
export const Step = ({
  className,
  color,
  completed = false,
  content,
  text,
  children,
}: StepProps) => {
  const getChildren = () => {
    return React.Children.map(children, (child, index) => {
      return React.cloneElement(child, {
        itemIndex: index,
      });
    });
  };
  const child = getChildren();
  return <li className={`progress-step ${className}`}>{child}</li>;
};
export default Step;
