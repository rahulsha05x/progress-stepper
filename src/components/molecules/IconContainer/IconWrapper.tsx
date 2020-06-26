import React from 'react';

const IconWrapper = ({
  children,
  className = '',
}: {
  children: any;
  className?: string;
}) => {
  return (
    <div data-testid="icon-wrapper" className={`progress-marker ${className}`}>
      {children}
    </div>
  );
};
IconWrapper.displayName = IconWrapper;
export default IconWrapper;
