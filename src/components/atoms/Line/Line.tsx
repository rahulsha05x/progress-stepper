import React from 'react';

export const Line = ({
  color,
  className = '',
}: {
  color: string;
  className?: string;
}) => {
  return (
    <div
      className={`line ${className}`}
      style={{
        backgroundColor: color,
      }}
    ></div>
  );
};
Line.displayName = 'Line';
export default Line;
