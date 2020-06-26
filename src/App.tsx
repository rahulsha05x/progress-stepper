import React, { useState } from 'react';
import './App.scss';

import ProgressBar from './components/molecules/ProgressBar/ProgressBar';
import ProgressBarWrapper, {
  getStatus,
} from './components/molecules/ProgressBar/ProgressBarWrapper';
import Circle from './components/atoms/Circle/CircleIcon';
import Line from './components/atoms/Line/Line';
import IconWrapper from './components/molecules/IconContainer/IconWrapper';
import TextWrapper from './components/molecules/TextWrapper/TextWrapper';
import Step from './components/molecules/StepperItem/Step';
import {
  stepsWithoutText,
  stepsWithText,
  stepsWithProgress,
  stepsWithColors,
  stepsWithCustomIcons,
} from './constants';
import Button from './components/atoms/Button/Button';

function App() {
  const [progressBarData] = useState({
    headerText:
      'Create a plan to meet your short and long term investment goals.',
    status: 'Pending',
    steps: [
      {
        id: 1,
        text: <div className="test">Step 1</div>,
        status: 'Pending',
      },
      {
        id: 2,
        text: 'Step 2',
        status: 'Pending',
      },
      {
        id: 3,
        text: 'Step 3',
        status: 'Pending',
      },
      {
        id: 4,
        text: 'Step 4',
        status: 'Pending',
      },
    ],
  });
  let { steps } = progressBarData;

  let [activeStep, setActiveStep] = useState(1);
  let orientation = 'vertical';
  const handleButtonClick = (text: string | any) => {
    console.log('clicked', text);
    setActiveStep((prev) => prev + 1);
  };
  return (
    <div className="container">
      <div className="container__row">
        <div className="container__col-sm-12 container__col-md-12">
          <h2 className="text-center">React Progress Tracker</h2>
          <div>
            <h4>Basic implementation</h4>
            <ProgressBar
              steps={stepsWithoutText}
              activeStep={4}
              color="#4B0082"
              orientation="horizontal"
              icon={<i className="fa fa-check"></i>}
              squared={false}
            />
          </div>
          <div>
            <h4>Steps with Text Horizontal Alignment</h4>
            <ProgressBar
              steps={stepsWithText}
              activeStep={4}
              color="#4B0082"
              orientation="horizontal"
              icon={<i className="fa fa-check"></i>}
              squared={false}
            />
          </div>
          <div>
            <h4>Vertical implementation</h4>
            <ProgressBar
              steps={stepsWithoutText}
              activeStep={4}
              color="#4B0082"
              orientation="vertical"
              icon={<i className="fa fa-check"></i>}
              squared={false}
            />
          </div>
          <div>
            <h4>Vertical implementation With Text</h4>
            <ProgressBar
              steps={stepsWithText}
              activeStep={4}
              color="#4B0082"
              orientation="vertical"
              icon={<i className="fa fa-check"></i>}
              squared={false}
            />
          </div>
          <div>
            <h4>Squared Markers</h4>
            <ProgressBar
              steps={stepsWithoutText}
              activeStep={4}
              color="#4B0082"
              orientation="horizontal"
              icon={<i className="fa fa-check"></i>}
              squared={true}
            />
          </div>
          <div>
            <h4>Default Colored Markers</h4>
            <ProgressBar
              steps={stepsWithoutText}
              activeStep={2}
              orientation="horizontal"
              icon={<i className="fa fa-check"></i>}
              squared={false}
            />
          </div>
          <div>
            <h4>Custom Icon Markers</h4>
            <ProgressBar
              steps={stepsWithoutText}
              activeStep={2}
              orientation="horizontal"
              color="#4B0082"
              icon={<i className="fa fa-times"></i>}
              squared={false}
            />
          </div>
          <div>
            <h4>Custom Step Progress</h4>
            <ProgressBar
              steps={stepsWithProgress}
              activeStep={3}
              orientation="horizontal"
              color="#4B0082"
              icon={<i className="fa fa-check"></i>}
              squared={false}
            />
          </div>
          <div>
            <h4>Steps with different colors</h4>
            <ProgressBar
              steps={stepsWithColors}
              activeStep={5}
              orientation="horizontal"
              color="#4B0082"
              icon={<i className="fa fa-check"></i>}
              squared={false}
            />
          </div>
          <div>
            <h4>Steps with different icons</h4>
            <ProgressBar
              steps={stepsWithCustomIcons}
              activeStep={5}
              orientation="horizontal"
              color="#4B0082"
              icon={<i className="fa fa-check"></i>}
              squared={false}
            />
          </div>
          <div>
            <h4>Implementation with Custom Color</h4>
            <ProgressBarWrapper activeStep={2}>
              {steps.map((item, index) => {
                return (
                  <Step className="red" key={item.id}>
                    <IconWrapper className="IconClass">
                      <Circle
                        completed={
                          getStatus(3, index) === 'is-completed' ? true : false
                        }
                        icon={<i className="fa fa-check"></i>}
                        color="green"
                      />
                      <Line
                        completed={
                          getStatus(3, index) === 'is-completed' ? true : false
                        }
                        color="yellow"
                      />
                    </IconWrapper>
                    <TextWrapper>{item.text}</TextWrapper>
                  </Step>
                );
              })}
            </ProgressBarWrapper>
          </div>
          <div>
            <h4>Stepper with buttons.</h4>
            <ProgressBarWrapper
              className="stepper-container"
              activeStep={activeStep}
              orientation={orientation}
            >
              {steps.map((item, index) => {
                return (
                  <Step
                    className={`${getStatus(activeStep, index)} liholder`}
                    key={item.id}
                  >
                    <IconWrapper className="IconClass">
                      <Circle
                        completed={
                          getStatus(activeStep, index) === 'is-completed'
                            ? true
                            : false
                        }
                        active={activeStep === index + 1}
                        icon={<i className="fa fa-check"></i>}
                        color="green"
                      />
                      <Line
                        color="red"
                        completed={
                          getStatus(activeStep, index) === 'is-completed'
                            ? true
                            : false
                        }
                        active={activeStep === index + 1}
                      />
                    </IconWrapper>
                    <TextWrapper>{item.text}</TextWrapper>
                    {activeStep === index + 1 && (
                      <Button
                        type="button"
                        className={`btn stepper--btn --${orientation}`}
                        onClick={() => handleButtonClick(item.text)}
                      >
                        Next
                      </Button>
                    )}
                  </Step>
                );
              })}
            </ProgressBarWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
