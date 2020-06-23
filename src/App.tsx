import React, { useState } from 'react';
import './App.scss';

import ProgressBar, {
  StepData,
} from './components/molecules/ProgressBar/ProgressBar';

import NewProgressBar from './components/progress-ui/NewProgressBar';
import NewProgressBar1 from './components/progress-ui/ProgressBar1';
import Circle from './components/atoms/Circle/CircleIcon';
import Line from './components/atoms/Line/Line';
import IconWrapper from './components/molecules/IconContainer/IconWrapper';
import TextWrapper from './components/molecules/TextWrapper/TextWrapper';
import Step from './components/molecules/StepperItem/Step';

function App() {
  const [progressBarData, setProgressData] = useState({
    headerText:
      'Create a plan to meet your short and long term investment goals.',
    status: 'Pending',
    steps: [
      {
        id: 1,
        text: <div className="test">Register your account</div>,
        status: 'Pending',
      },
      { id: 2, text: 'Complete your wellness assessment', status: 'Pending' },
      { id: 3, text: 'Link your account', status: 'Pending' },
      { id: 4, text: 'Schedule your first call', status: 'Pending' },
    ],
  });
  let { headerText, steps } = progressBarData;
  const taskHandler = (e: any) => {
    const currentIndex = steps.findIndex((item) => {
      return item.text === e;
    });

    let tempStep = [...steps];
    if (currentIndex === 0 && tempStep[currentIndex] ?.status === 'Pending') {
      tempStep[currentIndex].status = 'Current';
    } else {
      tempStep[currentIndex].status = 'Complete';
      if (currentIndex + 1 < steps.length) {
        tempStep[currentIndex + 1].status = 'Current';
      }
    }

    setProgressData({
      ...progressBarData,
      steps: tempStep,
    });
  };
  const checkStatus = ({ steps }: { steps: StepData[] }) => {
    const taskStatus = {
      total: steps.length,
      pending: 0,
      completed: 0,
    };
    steps.forEach((item) => {
      if (item.status === 'Pending') {
        taskStatus.pending += 1;
      }
      if (item.status === 'Complete') {
        taskStatus.completed += 1;
      }
    });
    if (taskStatus.total === taskStatus.pending) {
      return 'Not Started';
    }
    if (taskStatus.completed > 0 && taskStatus.completed < taskStatus.total) {
      return 'In Progress';
    }
    if (taskStatus.completed === taskStatus.total && taskStatus.pending === 0) {
      return 'Finished';
    }
  };
  return (
    <div className="container">
      <div className="container__row">
        <div className="container__col-sm-12 container__col-md-12">
          {/* <ProgressBar
            headerText={headerText}
            status={checkStatus(progressBarData)}
            steps={steps}
            taskClickHandler={taskHandler}
          /> */}
          <NewProgressBar
            steps={steps}
            activeStep={3}
            color="#4B0082"
            orientation="horizontal"
            icon={<i className="fa fa-check"></i>}
            squared={true}
          />
          <NewProgressBar1 activeStep={2}>
            <Step className="red">
              <IconWrapper className="IconClass">
                <Circle
                  completed
                  icon={<i className="fa fa-check"></i>}
                  color="green"
                  squared
                />
                <Line color="yellow" progress={'50'} />
              </IconWrapper>
              <TextWrapper>all right11</TextWrapper>
            </Step>
            <Step className="green">
              <IconWrapper className="IconClass">
                <Circle
                  completed
                  icon={<i className="fa fa-check"></i>}
                  color="yellow"
                  squared
                />
                <Line color="yellow" />
              </IconWrapper>
              <TextWrapper>all right1</TextWrapper>
            </Step>
          </NewProgressBar1>
        </div>
      </div>
    </div>
  );
}

export default App;
