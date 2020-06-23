import React from 'react';

const TextWrapper = ({
  children,
  className = '',
}: {
  children: any;
  className?: string;
}) => {
  return <div className={`progress-text ${className}`}>{children}</div>;
};

export default TextWrapper;
