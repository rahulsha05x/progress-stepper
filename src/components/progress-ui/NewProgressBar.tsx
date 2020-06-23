import React, { useState } from 'react';
import NewProgressStep from './NewProgressStep';

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
        return <div>
            {step.text}
        </div>
    }

    if (React.isValidElement(step.text)) {
        return step.text;
    }
}

const NewProgressBar: React.FC<Props> = ({
    steps,
    activeStep,
    orientation = "horizontal",
    color,
    icon,
    squared = false
}) => {

    return (
        <div>
            <ul className={`progress-tracker --${orientation}`}>
                {
                    steps.map((step: StepData, index: number) => {
                        let stepClass = '';
                        const completed = activeStep > index + 1;
                        if (completed) {
                            stepClass = "is-completed";
                        }
                        if (activeStep === index + 1) {
                            stepClass = "is-active";
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
                        )
                    })
                }

            </ul>
        </div>
    );
};

export default NewProgressBar;
