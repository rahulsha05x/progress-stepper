import React, { useState } from 'react';

export interface StepData {
    text?: string | object;
    status?: string;
    id: number;
}
interface Props {
    steps: StepData[];
    activeStep: number;
    orientation?: string;
    color?: string;
}
const NewProgressBar: React.FC<Props> = ({
    steps,
    activeStep,
    orientation = "horizontal",
    color
}) => {

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

    return (
        <div>
            <ul className={`progress-tracker --${orientation}`}>
                {
                    steps.map((step: StepData, index: number) => {
                        let stepClass = '';
                        if (activeStep > index + 1) {
                            stepClass = "is-completed";
                        }
                        if (activeStep === index + 1) {
                            stepClass = "is-active";
                        }

                        return (
                            <li key={step.id || index} className={`progress-step ${stepClass}`}>
                                <div className="progress-marker">
                                    <div className="circle" style={{ backgroundColor: color }}></div>
                                    <div className="line" style={{ backgroundColor: color }}></div>
                                </div>
                                <div className="progress-text">
                                    {renderProgressText(step)}
                                </div>
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    );
};

export default NewProgressBar;
