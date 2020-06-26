import React from 'react';
import Line from '../../atoms/Line/Line';
import Circle from '../../atoms/Circle/CircleIcon';
import TextWrapper from '../TextWrapper/TextWrapper';
import Step from '../StepperItem/Step';
import IconWrapper from '../IconContainer/IconWrapper';
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
  active?: boolean;
}

function renderProgressText(text: any) {
  if (typeof text === 'string') {
    return <div>{text}</div>;
  }

  if (React.isValidElement(text)) {
    return text;
  }
}

const ProgressStep: React.FC<Props> = ({
  text,
  activeStep,
  color = '#ccc',
  icon,
  completed = false,
  className = '',
  progress = 0,
  orientation = 'horizontal',
  squared = false,
  active = false,
}) => {
  console.log('Completed', completed);
  return (
    <Step
      color={color}
      completed={completed}
      content={icon}
      className={className}
    >
      <IconWrapper>
        <Circle
          active={active}
          completed={completed}
          icon={icon}
          color={color}
          squared={squared}
        />
        <Line
          active={active}
          completed={completed}
          progress={progress}
          color={color}
        />
      </IconWrapper>
      <TextWrapper>{renderProgressText(text)}</TextWrapper>
    </Step>
  );
};
ProgressStep.defaultProps = {
  completed: false,
};
export default ProgressStep;
