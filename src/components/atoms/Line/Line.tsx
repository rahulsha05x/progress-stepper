import React from 'react';

export const Line = ({
  color,
  className = '',
  orientation = 'horizontal',
  progress,
  active,
  completed,
}: {
  color: string;
  orientation?: string;
  progress?: string | number;
  className?: string;
  active?: boolean;
  completed?: boolean;
}) => {
  const progressDirection =
    orientation === 'vertical' ? 'to bottom' : 'to right';
  const inactive = '#b6b6b6';
  const exp = `${progressDirection}, ${color} ${progress}%, ${inactive} ${progress}%`;

  let styles: any = {
    backgroundColor: active || !completed ? '#ccc' : color,
  };
  if (progress) {
    styles['backgroundImage'] = `linear-gradient(${exp})`;
  }
  return (
    <div
      data-testid="line"
      className={`line ${className}`}
      style={styles}
    ></div>
  );
};
Line.displayName = 'Line';
export default Line;
