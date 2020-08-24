import React from 'react';
import './App.scss';
import RechartDonut from './components/organisms/Donutchart';
import { PaddingAngle } from './components/organisms/Donutchart/PaddingAngle';
import Donutsvg from './components/organisms/Donutchart/Donutsvg';
import CircularProgressBarWrapper from './components/organisms/CircularProgressBar';

function App() {
  return (
    <div className="container">
      <div className="container__row">
        <div className="container__col-sm-12 container__col-md-12">
          {/* <ProgressBarPage /> */}
          {/* <PaddingAngle />
          <RechartDonut />

        <Donutsvg /> */}
          <PaddingAngle score={260}>
            <div className="super">Developing</div>
            <div className="sub">0/460</div>
          </PaddingAngle>

          {/* <CircularProgressBarWrapper /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
