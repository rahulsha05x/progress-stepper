import React, { ReactNode } from 'react';
//import './_Button.scss';

interface Props {
  className?: string;
  children: ReactNode;
  disabled?: boolean;
}
const Button: React.FC<Props> = ({
  className,
  children,
  disabled,
  ...others
}) => {
  const buttonClass = ['btn', className?.split(' ')];
  return (
    <button className={buttonClass.join(' ')} disabled={disabled} {...others}>
      {children}
    </button>
  );
};

export default Button;
