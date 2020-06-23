import React from 'react';
export const Circle = ({
  completed,
  icon,
  color,
  className = '',
  squared,
  children,
}: {
    completed: boolean;
    icon: any;
    color: string;
    className?: string;
    squared?: boolean;
    children?: any;
  }) => {
  const styles = {
    background: completed ? color : 'none',
    borderRadius: squared ? '0px' : '50%',
    borderColor: color
  };
  return (
    <div className={`circle ${className}`} style={styles}>
      {completed && icon}
    </div>
  );
};
Circle.displayName = 'CircleIcon';
export default Circle;
