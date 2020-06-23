import React from 'react';
export const Circle = ({
  completed,
  content,
  color,
  className = '',
  children,
}: {
    completed: boolean;
    content: any;
    color?: string;
    className?: string;
    children?: any;
  }) => {
  return (
    <div className={`circle ${className}`} style={{ backgroundColor: color }}>
      {completed && content}
    </div>
  );
};
Circle.displayName = 'CircleIcon';
export default Circle;
