import React, { useState } from 'react';

import StepItem from '../StepItem/StepItem';
import useGetCompleted from './useGetCompleted';
import { useButtonText } from '../../../hooks/useButtonText';
export interface StepData {
  text?: string;
  status?: string;
  id: number;
}
interface Props {
  headerText: string;
  status?: string;
  steps: StepData[];
  taskClickHandler: (e: any) => void;
}
const ProgressBar: React.FC<Props> = ({
  headerText,
  status,
  steps,
  taskClickHandler,
}) => {
  const [isCollapseOpen, setIsCollapseOpen] = useState<boolean>(false);

  const collapsePanel = () => {
    var content: HTMLElement | null = document.querySelector(
      '.ProgressBar__Steps'
    );
    content?.classList.toggle('hide');
    setIsCollapseOpen(!isCollapseOpen);
  };
  const { numberOfSteps, completedLen } = useGetCompleted(steps, 'Complete');
  const getCurrentTask = () => {
    if (completedLen < numberOfSteps && steps[completedLen]) {
      return steps[completedLen];
    }
  };
  const buttonText = useButtonText(getCurrentTask(), steps.length);

  return (
    <div className="ProgressBar">
      <section className="ProgressBar__Main">
        <i className="ProgressBar__Main__StatusIndicator" />
        <p className="ProgressBar__Main__Description">{headerText}</p>
      </section>
      <article className="ProgressBar__Sub">
        <i>
          {completedLen}/{numberOfSteps} tasks completed
        </i>
        <i
          className={`fa fa-sort-${isCollapseOpen ? 'asc' : 'desc'}`}
          onClick={collapsePanel}
        />
      </article>
      <ul className="ProgressBar__Steps">
        {steps.map((step) => {
          return (
            <StepItem
              key={step.text}
              id={step.id}
              text={step.text}
              status={step.status}
              taskClicked={taskClickHandler}
            />
          );
        })}
      </ul>
      <div className="ProgressBar__Mobile">
        <i className="ProgressBar__Mobile__Text">{getCurrentTask()?.text}</i>
        <i className="ProgressBar__Mobile__Status">{status}</i>
        <button
          type="button"
          className="ProgressBar__Mobile__Button"
          onClick={() => taskClickHandler(getCurrentTask()?.text)}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};
