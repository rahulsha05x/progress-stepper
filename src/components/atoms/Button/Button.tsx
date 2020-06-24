import React, { ReactNode } from 'react';
//import './_Button.scss';

interface Props {
  className?: string;
  children: ReactNode;
  disabled?: boolean;
  type?: string;
  onClick?: any;
}
const Button = ({
  className,
  children,
  disabled,
  type,
  onClick,
  ...others
}: Props) => {
  const buttonClass = `btn ${className}`;
  return (
    <button
      className={buttonClass}
      disabled={disabled}
      onClick={onClick}
      {...others}
    >
      {children}
    </button>
  );
};

export default Button;
