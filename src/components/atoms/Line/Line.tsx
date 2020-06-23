import React from 'react';

export const Line = ({
  color,
  className = '',
  orientation = 'horizontal',
  progress,
}: {
    color: string;
    orientation?: string;
    progress?: string | number;
    className?: string;
  }) => {
  console.log('orientation', orientation);
  const progressDirection =
    orientation === 'vertical' ? 'to bottom' : 'to right';
  const inactive = '#b6b6b6';
  const exp = `${progressDirection}, ${color} ${progress}%, ${inactive} ${progress}%`;
  console.log('Expression', exp);
  let styles: any = {
    backgroundColor: color,
  };
  if (progress) {
    styles['backgroundImage'] = `linear-gradient(${exp})`;
  }
  return <div className={`line ${className}`} style={styles}></div>;
};
Line.displayName = 'Line';
export default Line;
