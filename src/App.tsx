import React, { useState } from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { DonutWithChild } from './components/organisms/Donutchart/DonutWithChild';
import Ticker from './components/organisms/Ticker';
import TickerTransition from './components/organisms/TickerTransition';

const tasks = [
  { id: 1, task: 'task1' },
  { id: 2, task: 'task2' },
  { id: 3, task: 'task3' },
  { id: 4, task: 'task4' },
  { id: 5, task: 'task5' },
];
function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const enteredHandler = () => {
    console.log('entered');
    setTimeout(() => {
      if (activeIndex < tasks.length - 1) {
        setActiveIndex((prevState) => prevState + 1);
      }
    }, 2000);
  };
  return (
    <div className="container">
      <div className="container__row">
        <div className="container__col-sm-12 container__col-md-12">
          <div className="chart-container">
            <div className="medium">
              <Ticker
                items={tasks}
                activeIndex={activeIndex}
                entered={enteredHandler}
              />
              {/* <TickerTransition items={tasks} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
