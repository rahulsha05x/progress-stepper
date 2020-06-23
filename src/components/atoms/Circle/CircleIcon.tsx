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
    backgroundColor: color,
    borderRadius: squared ? '0px' : '50%',
  };
  return (
    <div className={`circle ${className}`} style={styles}>
      {completed && icon}
    </div>
  );
};
Circle.displayName = 'CircleIcon';
export default Circle;
