import React from 'react';
import {
  ComposedChart,
  Line,
  // Area,
  Bar,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Brush,
} from 'recharts';

import xAxis, { checkTickFormater } from './xAxis';
import legend from './legend';
import color from './colors';

export default ({
  data,
  XSelected,
  YSelected,
  functionSelected,
  YSelected2,
  functionSelected2,
  timelapse,
  disabled,
  graphType,
  brush,
}) => {
  const label1 = functionSelected === 'number'
    ? 'number'
    : `${functionSelected}_${YSelected}`;
  const label2 = functionSelected2 === 'number'
    ? 'number'
    : `${functionSelected2}_${YSelected2}`;
  return (
    <ResponsiveContainer aspect={16 / 9}>
      <ComposedChart
        width={600}
        height={400}
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        {xAxis(XSelected, timelapse, graphType)}
        <YAxis yAxisId="left" dataKey={label1} />
        <YAxis yAxisId="right" dataKey={label2} orientation="right" />
        <Tooltip labelFormatter={checkTickFormater(XSelected, timelapse)} />
        {legend}
        <CartesianGrid strokeDasharray="3 3" />
        {Object.keys(data[0] || {})
          .filter(element => element === label1)
          .map((element, id) =>
            (<Bar
              key={`bar${element}`}
              dataKey={label1}
              fill={
                disabled.includes(element)
                  ? 'rgba(170,170,170,0.3)'
                  : color[id % color.length]
              }
              yAxisId="left"
            />),
          )}
        {Object.keys(data[0] || {})
          .filter(element => element === label2)
          .map((element, id) =>
            (<Line
              type="monotone"
              key={`line${element}`}
              dataKey={label2}
              stroke={color[(id + 2) / color.length]}
              yAxisId="right"
            />),
          )}
        {(brush) ? <Brush stroke={color[3]} height={20} /> : null}
      </ComposedChart>
    </ResponsiveContainer>
  );
};
