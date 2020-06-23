import React from 'react';
export const Circle = ({
  completed,
  icon,
  color,
  className = '',
  squared,
  children,
  active,
}: {
  completed: boolean;
  icon: any;
  color: string;
  className?: string;
  squared?: boolean;
  children?: any;
  active?: boolean;
}) => {
  const styles = {
    background: completed ? color : 'none',
    borderRadius: squared ? '0px' : '50%',
    borderColor: active || completed ? color : '#ccc',
  };
  return (
    <div className={`circle ${className}`} style={styles}>
      {completed && icon}
    </div>
  );
};
Circle.displayName = 'CircleIcon';
export default Circle;
