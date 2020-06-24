import React, { useState } from 'react';
import NewProgressStep from './NewProgressStep';
import NewProgressBar1 from './ProgressBar1';

export interface StepData {
    text?: string | object;
    status?: string;
    id: number;
    progress?: number;
}
interface Props {
    steps: StepData[];
    activeStep: number;
    orientation?: string;
    color?: string;
    icon?: any;
    squared?: boolean;
}

function renderProgressText(step: StepData) {
    if (typeof step.text === 'string') {
        return <div>{step.text}</div>;
    }

    if (React.isValidElement(step.text)) {
        return step.text;
    }
}

const NewProgressBar: React.FC<Props> = ({
    steps,
    activeStep = 1,
    orientation = "horizontal",
    color,
    icon = <i className="fa fa-check"></i>,
    squared = false
}) => {
    return (
        <div>
            <NewProgressBar1 activeStep={activeStep} orientation={orientation}>
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
                        <NewProgressStep
                            key={step.id || index}
                            {...step}
                            className={stepClass}
                            activeStep={activeStep}
                            completed={completed}
                            active={activeStep === index + 1}
                            color={color}
                            icon={icon}
                            orientation={orientation}
                            squared={squared}
                        />
                    );
                })}
            </NewProgressBar1>
        </div>
    );
};

export default NewProgressBar;
