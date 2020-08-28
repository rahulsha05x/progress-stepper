import React, { FC } from 'react';
import { Cell, Pie, PieChart, Sector, Label } from 'recharts';

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
  id: string;
  score: number;
  totalScore: number;
  height: number;
  width: number;
  children?: any;
  baseColor?: string;
  trailColor?: string;
  gradientColor?: Gradient[];
  useGradient?: boolean;
};
export const DonutWithChild: FC<Props> = ({
  id,
  score,
  children,
  totalScore,
  width,
  height,
  baseColor = '#ece6f3',
  trailColor = 'blue',
  gradientColor = [],
  useGradient = false,
}) => {
  const data: Array<{ name: string; value: number; completed: boolean }> = [
    { name: 'Completed', value: score, completed: true },
    { name: 'Pending', value: totalScore - score, completed: false },
  ];
  const numberOfGradient = gradientColor ? gradientColor.length : 0;
  const ratio = 100 / numberOfGradient;
  const getMinMaxForColor = (i: Gradient, index: number) => {
    const colorNum = ratio * (index + 1);
    let prevObject = gradientColor[index - 1] || undefined;
    const prevVal = prevObject ? ratio * index : 0;
    const nextObject = gradientColor[index + 1];
    const nextValue = nextObject ? ratio * index + 2 : 0;
    let minVal = ((100 - colorNum) / 100) * 450;
    const maxVal = ((100 - prevVal) / 100) * 450;
    if (nextValue === 0) {
      minVal = 0;
    }
    return {
      minVal,
      maxVal,
      colorNum,
    };
  };
  const getValueForColor = (endAngle: number) => {
    if (useGradient && gradientColor && gradientColor.length) {
      let endAngleValue = '';
      gradientColor.map((item, index) => {
        if (item) {
          const { minVal, maxVal, colorNum } = getMinMaxForColor(item, index);

          if (endAngle < maxVal && endAngle >= minVal) {
            endAngleValue = `url(#color${colorNum}${id})`;
          }
          console.log(
            'endAngle <',
            maxVal,
            ' && endAngle >= ',
            minVal,
            ' colornum ',
            colorNum
          );
        }
        return null;
      });
      return endAngleValue;
    }
    return trailColor;
  };
  const renderActiveShape = (props: any) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle } = props;

    return (
      <g>
        {/* <text x={cx} y={cy} dy={8} textAnchor="middle" fill={'red'}>
          {payload.name}
        </text> */}

        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={getValueForColor(endAngle)}
        />
      </g>
    );
  };
  const renderLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx; // + radius * Math.cos(-midAngle * RADIAN);
    const y = cy; // + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={x + 5}
        y={y}
        fill="green"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(score * 100).toFixed(0)}%`}
      </text>
    );
  };
  const createGradients = () => {
    if (gradientColor && gradientColor.length) {
      return gradientColor.map((item: any, index: number) => {
        const colors = item;
        const number = ratio * (index + 1);
        return (
          <linearGradient
            key={number}
            id={`color${number}${id}`}
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="0%" stopColor={colors && colors['0%']} />
            <stop offset="100%" stopColor={colors && colors['100%']} />
          </linearGradient>
        );
      });
    }
  };
  return (
    <div className="outer">
      {children && (
        <div
          className="inner"
          style={{ width: `${width}px`, height: `${height}px` }}
        >
          {children}
        </div>
      )}

      <PieChart width={width} height={height}>
        <defs>{createGradients()}</defs>

        <Pie
          isAnimationActive={false}
          data={data1}
          innerRadius={'80%'}
          startAngle={450}
          minAngle={90}
          endAngle={90}
          outerRadius={'100%'}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={baseColor} stroke="none" />
          ))}
        </Pie>
        <Pie
          data={data}
          innerRadius={'80%'}
          startAngle={360}
          minAngle={1}
          endAngle={0}
          outerRadius={'100%'}
          paddingAngle={0}
          activeIndex={0}
          dataKey="value"
          nameKey="name"
          activeShape={renderActiveShape}
          animationDuration={5000}
        >
          {/* <Label position="center">{score}</Label> */}
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
