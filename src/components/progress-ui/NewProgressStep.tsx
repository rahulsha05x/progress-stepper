import React from 'react';
import Line from '../atoms/Line/Line';
import Circle from '../atoms/Circle/CircleIcon';
import TextWrapper from '../molecules/TextWrapper/TextWrapper';
import Step from '../molecules/StepperItem/Step';
import IconWrapper from '../molecules/IconContainer/IconWrapper';
interface Props {
  activeStep: number;
  className?: string;
  color?: string;
  icon?: any;
  completed?: boolean;
  text?: any;
  key?: string | number;
  progress?: number;
  orientation?: string;
  squared?: boolean;
}

function renderProgressText(text: any) {
  if (typeof text === 'string') {
    return <div>{text}</div>;
  }

  if (React.isValidElement(text)) {
    return text;
  }
}

const NewProgressStep: React.FC<Props> = ({
  text,
  activeStep,
  color = 'blue',
  icon,
  completed = false,
  className = '',
  progress = 0,
  orientation = 'horizontal',
  squared = false,
}) => {
  let circleStyles: any = {
    backgroundColor: color,
  };

  let lineStyles: any = {
    backgroundColor: color,
  };
  if (progress) {
    lineStyles['backgroundImage'] = `linear-gradient(to ${
      orientation === 'vertical' ? 'bottom' : 'right'
    }, ${color} ${progress}%, #b6b6b6 ${progress}%)`;
  }

  if (squared) {
    circleStyles['borderRadius'] = 0;
  }

  return (
    <Step
      color={color}
      completed={completed}
      content={icon}
      className={`progress-step ${className}`}
    >
      <IconWrapper>
        <Circle completed={completed} icon={icon} color={color} />
        <Line color={color} />
      </IconWrapper>
      <TextWrapper>{renderProgressText(text)}</TextWrapper>
    </Step>
  );
};

export default NewProgressStep;
