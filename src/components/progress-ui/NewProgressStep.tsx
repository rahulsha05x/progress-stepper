import React from 'react';

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
        return <div>
            {text}
        </div>
    }

    if (React.isValidElement(text)) {
        return text;
    }
}

const NewProgressStep: React.FC<Props> = ({
    text,
    activeStep,
    color,
    icon,
    completed = false,
    className = '',
    progress = 0,
    orientation = "horizontal",
    squared = false
}) => {

    let circleStyles: any = {
        backgroundColor: color
    }

    let lineStyles: any = {
        backgroundColor: color
    }
    if (progress) {
        lineStyles["backgroundImage"] = `linear-gradient(to ${orientation === 'vertical' ? 'bottom' : 'right'}, ${color} ${progress}%, #b6b6b6 ${progress}%)`;
    }

    if (squared) {
        circleStyles["borderRadius"] = 0;
    }

    return (
        <li className={`progress-step ${className}`}>
            <div className="progress-marker">
                <div className="circle" style={circleStyles}>
                    {completed && icon}
                </div>
                <div className="line" style={lineStyles}></div>
            </div>
            <div className="progress-text">
                {renderProgressText(text)}
            </div>
        </li>
    );
};

export default NewProgressStep;
