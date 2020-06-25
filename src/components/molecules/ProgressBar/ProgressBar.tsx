import React from 'react';
import ProgressStep from './ProgressStep';
import ProgressBarWrapper from './ProgressBarWrapper';

export interface StepData {
    text?: string | object;
    status?: string;
    id: number;
    progress?: number;
    color?: string;
    icon?: string | object;
}
interface Props {
    steps: StepData[];
    activeStep: number;
    orientation?: string;
    color?: string;
    icon?: any;
    squared?: boolean;
}

const NewProgressBar: React.FC<Props> = ({
    steps = [],
    activeStep = 1,
    orientation = "horizontal",
    color,
    icon = <i className="fa fa-check"></i>,
    squared = false
}) => {
    return (
        <div>
            <ProgressBarWrapper activeStep={activeStep} orientation={orientation}>
                {steps.map((step: StepData, index: number) => {
                    let stepClass = '';
                    const completed = activeStep > index + 1;
                    if (completed) {
                        stepClass = 'is-completed';
                    }
                    if (activeStep === index + 1) {
                        stepClass = 'is-active';
                    }

                    return (
                        <ProgressStep
                            key={step.id || index}
                            {...step}
                            className={stepClass}
                            activeStep={activeStep}
                            completed={completed}
                            active={activeStep === index + 1}
                            color={step.color || color}
                            icon={step.icon || icon}
                            orientation={orientation}
                            squared={squared}
                        />
                    );
                })}
            </ProgressBarWrapper>
        </div>
    );
};

export default NewProgressBar;
