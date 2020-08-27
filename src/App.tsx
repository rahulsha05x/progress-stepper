import React from 'react';
import './App.scss';
import { DonutWithChild } from './components/organisms/Donutchart/DonutWithChild';
import DonutText from './components/molecules/DonutText';

function App() {
  return (
    <div className="container">
      <div className="container__row">
        <div className="container__col-sm-12 container__col-md-12">
          <DonutWithChild
            score={100}
            totalScore={100}
            height={250}
            width={250}
            gradientColor={{
              '25%': { '0%': '#C7E6FF', '100%': '#A7D6FF' },
              '50%': { '0%': '#82C0F2', '100%': '#3A9CEB' },
              '75%': { '0%': '#5099D9', '100%': '#0556A0' },
              '100%': { '0%': '#295C9D', '100%': '#052E70' },
            }}
          >
            <DonutText score={100}>0</DonutText>
          </DonutWithChild>
        </div>
      </div>
    </div>
  );
}

export default App;
