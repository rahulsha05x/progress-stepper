import React from 'react';
import './App.scss';

import DonutText from './components/molecules/DonutText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { DonutWithChild } from './components/organisms/Donutchart/DonutWithChild';

function App() {
  return (
    <div className="container">
      <div className="container__row">
        <div className="container__col-sm-12 container__col-md-12">
          <div className="chart-container">
            <div className="small">
              <DonutWithChild
                id="small"
                score={100}
                totalScore={100}
                height={48}
                width={48}
                gradientColor={[
                  { '0%': '#C7E6FF', '100%': '#A7D6FF' },
                  { '0%': '#82C0F2', '100%': '#3A9CEB' },
                  { '0%': '#5099D9', '100%': '#0556A0' },
                  { '0%': '#295C9D', '100%': '#052E70' },
                ]}
              >
                <div className="badge">D</div>
              </DonutWithChild>
            </div>
            <div className="medium">
              <DonutWithChild
                id="medium"
                score={100}
                totalScore={100}
                height={150}
                width={150}
                baseColor="rgba(34, 38, 63, 0.1)"
                useGradient
                gradientColor={[
                  { '0%': '#C7E6FF', '100%': '#A7D6FF' },
                  { '0%': '#82C0F2', '100%': '#3A9CEB' },
                  { '0%': '#5099D9', '100%': '#0556A0' },
                  { '0%': '#295C9D', '100%': '#052E70' },
                  { '0%': 'red', '100%': 'green' },
                ]}
              >
                <FontAwesomeIcon icon={faLock} />
                <div className="bottom">Unlock your score</div>
              </DonutWithChild>
            </div>
            <div className="large">
              <DonutWithChild
                id="large"
                score={75}
                baseColor="rgba(255,255,255,0.1)"
                totalScore={100}
                height={360}
                width={360}
                gradientColor={[
                  // '25%': { '0%': '#C7E6FF', '100%': '#A7D6FF' },
                  // '50%': { '0%': '#82C0F2', '100%': '#3A9CEB' },
                  // '75%': { '0%': '#5099D9', '100%': '#0556A0' },
                  { '0%': '#FFF', '100%': 'rgba(255, 255, 255, 0.5)' },
                ]}
              >
                <DonutText score={100} subText={'0'} />
              </DonutWithChild>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
