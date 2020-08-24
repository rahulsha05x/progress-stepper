import React, { FC, useEffect, useRef, useState, ReactNode } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Label } from 'recharts';

const data = [
  { name: 'Group A', value: 115, completed: true },
  { name: 'Group B', value: 345, completed: false },
];
const data1 = [{ name: 'Group A', value: 460, completed: true }];
const COLORS = ['red', 'green', '#FFBB28', '#FF8042'];
type Props = {
  score: number;
  children?: ReactNode;
};
export const PaddingAngle: FC<Props> = ({ score, children }) => {
  const [value, setValue] = useState(score);
  const innerTextRef: any = useRef(0);
  let speed = 450;
  const updateCount = () => {
    const target = score;
    const count = innerTextRef.current.innerText;
    let myscore = +count.split('/')[0];
    const inc = target / speed;
    if (myscore < target) {
      const total = myscore + inc;
      innerTextRef.current.innerText = `${Math.ceil(total)}/460`;
      setTimeout(updateCount, 1);
    } else {
      innerTextRef.current.innerText = `${target}/460`;
    }
  };
  useEffect(() => {
    // updateCount();
  }, []);
  const getChildren = () => <text>{children}</text>;
  return (
    <div className="outer">
      <ResponsiveContainer width={600} height={400}>
        <PieChart>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82C0F2" />
              <stop offset="100%" stopColor="#3A9CEB" />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C7E6FF" />
              <stop offset="100%" stopColor="#A7D6FF" />
            </linearGradient>
            <linearGradient id="growing" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5099D9" />
              <stop offset="100%" stopColor="#0556A0" />
            </linearGradient>
            <linearGradient id="progressing" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#295C9D" />
              <stop offset="100%" stopColor="#052E70" />
            </linearGradient>
          </defs>

          <Pie
            isAnimationActive={false}
            data={data1}
            innerRadius={'70%'}
            startAngle={450}
            minAngle={1}
            endAngle={90}
            outerRadius={'100%'}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill="#ece6f3" />
            ))}
          </Pie>
          <Pie
            data={data}
            innerRadius={'70%'}
            startAngle={450}
            minAngle={1}
            endAngle={90}
            outerRadius={'100%'}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
          >
            {data.map((entry, index) => {
              if (!entry.completed) {
                return <Cell key={`cell-${index}`} fill="none" stroke="none" />;
              } else {
                return (
                  <Cell
                    key={`cell-${index}`}
                    fill="url(#colorPv)"
                    stroke="none"
                  />
                );
              }
            })}
            <Label offset={0} position="center" content={getChildren()} />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      {children}
    </div>
  );
};
