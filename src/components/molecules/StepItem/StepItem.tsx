import React from 'react';

interface Props {
  text?: string;
  status?: string;
  id: number;
  taskClicked: (e: any) => void;
}

const StepItem: React.FC<Props> = ({
  text,
  status,
  children,
  taskClicked,
  id,
}) => {
  text = text ? text : 'not described';
  status = status ? status : 'Not started';
  const stepItemClasses = [
    'StepItem',
    'StepItem--vertical',
    `StepItem--vertical--${status}`,
    `StepItem--${status}`,
  ];
  let circleClasses = ['circle', `circle--${status}`];
  const buttonText = id === 1 ? 'Begin Task' : 'Continue';

  const showButton = () => {
    if (id === 1 && (status === 'Pending' || status === 'Current')) {
      return true;
    }
    if (id !== 1 && status === 'Current') {
      return true;
    }
    return false;
  };
  return (
    <li className={stepItemClasses.join(' ')}>
      <i className="StepItem__Marker StepItem__Marker--vertical">
        <span className={circleClasses.join(' ')}>
          {status === 'Complete' && (
            <i className="fa fa-check" aria-hidden="true"></i>
          )}
        </span>
        <span className="label label--vertical">{text}</span>
      </i>
      {showButton() && (
        <button className="StepItem__Button" onClick={() => taskClicked(text)}>
          {buttonText}
        </button>
      )}
    </li>
  );
};

export default StepItem;
