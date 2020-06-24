import React from 'react';

const TextWrapper = ({
  children,
  className = '',
  isVisible = true,
}: {
  children: any;
  isVisible?: boolean;
  className?: string;
}) => {
  if (!isVisible) {
    return <div className={`progress-text ${className}`}> </div>;
  }
  return <div className={`progress-text ${className}`}>{children}</div>;
};

export default TextWrapper;
