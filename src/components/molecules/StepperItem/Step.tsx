import React from 'react';
interface StepProps {
  className: string;
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
    React.Children.forEach(children, (child, index) => {
      console.log(child, ': of LI');
    });
  };
  getChildren();
  return <li className={`progress-step ${className}`}>{children}</li>;
};
export default Step;
