import React, { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { Cell, Pie, PieChart, Sector } from 'recharts';

const data1 = [{ name: 'Group A', value: 1, completed: true }];

type Gradient = {
  '0%': string;
  '100%': string;
  [state: string]: string;
};
interface GradientColor {
  '25%'?: Gradient;
  '50%'?: Gradient;
  '75%'?: Gradient;
  '100%'?: Gradient;
  [state: string]: Gradient | undefined;
}
type Props = {
  score: number;
  totalScore: number;
  height: number;
  width: number;
  children?: ReactNode;
  baseColor?: string;
  trailColor?: string;
  gradientColor?: GradientColor;
};
export const PaddingAngle: FC<Props> = ({
  score,
  children,
  totalScore,
  width,
  height,
  baseColor = '#ece6f3',
  trailColor = 'blue',
  gradientColor,
}) => {
  const [value] = useState(0);
  const innerTextRef: any = useRef(0);

  const data: Array<{ name: string; value: number; completed: boolean }> = [
    { name: 'Completed', value: score, completed: true },
    { name: 'Pending', value: totalScore - score, completed: false },
  ];
  let speed = 450;
  const updateCount = () => {
    const target = score;
    const count = innerTextRef.current.innerText;
    let myscore = +count.split('/')[0];
    const inc = target / speed;
    if (myscore < target) {
      const total = myscore + inc;
      innerTextRef.current.innerText = `${Math.ceil(total)}`;
      setTimeout(updateCount, 1);
    } else {
      innerTextRef.current.innerText = `${target}`;
    }
  };
  useEffect(() => {
    updateCount();
  });
  const getValueForGradients = (endAngle: number) => {
    if (gradientColor) {
      const gradientKeys = Object.keys(gradientColor);
      let endAngleValue = '';
      gradientKeys.map((i, index) => {
        const ele = gradientColor[i];
        if (ele) {
          const colorNum = +i.slice(0, i.lastIndexOf('%'));
          let prevObject = Object.keys(gradientColor)[index - 1];
          const prevVal = prevObject
            ? +prevObject.slice(0, prevObject.lastIndexOf('%'))
            : 0;
          const nextObject = Object.keys(gradientColor)[index + 1];
          const nextValue = nextObject
            ? +nextObject.slice(0, nextObject.lastIndexOf('%'))
            : 0;
          let minVal = ((100 - (colorNum - 5)) / 100) * 450;
          const maxVal = ((100 - (prevVal - 5)) / 100) * 450;
          if (nextValue === 0) {
            minVal = 0;
          }
          if (endAngle < maxVal && endAngle >= minVal) {
            endAngleValue = `url(#color${colorNum})`;
          }

          return { colorNum, maxVal, minVal, endAngle, endAngleValue };
        }
        return null;
      });
      return endAngleValue;
    }
  };

  const renderActiveShape = (props: any) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle } = props;

    const color = (endAngle: number) => {
      const values = getValueForGradients(endAngle);
      //console.log(values);
      return values;
    };
    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={color(endAngle)}
        />
      </g>
    );
  };
  const createGradients = () => {
    if (gradientColor) {
      return Object.keys(gradientColor).map((item: any) => {
        console.log(item);
        if (
          gradientColor['25%'] ||
          gradientColor['50%'] ||
          gradientColor['75%'] ||
          gradientColor['100%']
        ) {
          const colors = gradientColor[item];
          const number = item.slice(0, item.lastIndexOf('%'));
          return (
            <linearGradient
              key="number"
              id={`color${number}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor={colors && colors['0%']} />
              <stop offset="100%" stopColor={colors && colors['100%']} />
            </linearGradient>
          );
        }
        return null;
      });
    }
  };
  return (
    <div className="outer">
      <div
        className="inner"
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <div className="super">Developing</div>
        <div ref={innerTextRef} className="sub">
          {children}
        </div>
      </div>

      <PieChart width={width} height={height}>
        <defs>{createGradients()}</defs>

        <Pie
          isAnimationActive={false}
          data={data1}
          innerRadius={'80%'}
          startAngle={450}
          minAngle={1}
          endAngle={90}
          outerRadius={'100%'}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={baseColor} />
          ))}
        </Pie>
        <Pie
          data={data}
          innerRadius={'80%'}
          startAngle={450}
          minAngle={1}
          endAngle={90}
          outerRadius={'100%'}
          paddingAngle={0}
          activeIndex={0}
          dataKey="value"
          nameKey="name"
          activeShape={renderActiveShape}
          animationDuration={5000}
        >
          {data.map((entry, index) => {
            if (!entry.completed) {
              return <Cell key={`cell-${index}`} fill="none" stroke="none" />;
            } else if (entry.value !== 0) {
              return <Cell key={`cell-${index}`} fill="none" stroke="none" />;
            }
            return null;
          })}
        </Pie>
      </PieChart>
    </div>
  );
};
