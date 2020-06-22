import React from 'react';

interface Props {
    activeStep: number;
    className?: string;
    color?: string;
    content?: any;
    completed?: boolean;
    text?: any;
    key?: string | number;
    progress?: number;
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
    content,
    completed = false,
    className = '',
    progress = 0
}) => {
    console.log(progress, "prog")
    return (
        <li className={`progress-step ${className}`}>
            <div className="progress-marker">
                <div className="circle" style={{ backgroundColor: color }}>
                    {completed && content}
                </div>
                <div className="line" style={{ backgroundColor: color, backgroundImage: `linear-gradient(to right, ${color} ${progress}%, #b6b6b6 ${progress}%)` }}></div>
            </div>
            <div className="progress-text">
                {renderProgressText(text)}
            </div>
        </li>
    );
};

export default NewProgressStep;
