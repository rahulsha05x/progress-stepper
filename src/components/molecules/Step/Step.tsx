import React from 'react';
import Button from '../../atoms/Button/Button';

interface Props {
  text?: string;
  status?: string;
}

const Step: React.FC<Props> = ({ text, status, children }) => {
  text = text ? text : 'not described';
  status = status ? status : 'Not started';
  let stepClass = ['Step'];
  let stepIconClass = ['Step__Status'];
  stepIconClass = [`Step__Status--${status}`, ...stepIconClass];
  stepClass = [`Step--${status}`, ...stepClass];
  return (
    <div className={stepClass.join(' ')}>
      <i className={stepIconClass.join(' ')} />
      <p className="Step__Description">{text}</p>
      {status === 'Current' && (
        <Button className="Step__Button">Begin Task</Button>
      )}
    </div>
  );
};

export default Step;
