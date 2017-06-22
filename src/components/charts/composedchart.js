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
} from 'recharts';

import xAxis, { checkTickFormater } from './xAxis';
import color from './colors';

export default ({
  data,
  XSelected,
  YSelected,
  functionSelected,
  YSelected2,
  functionSelected2,
}) => {
  const label1 = functionSelected === 'number'
    ? 'number'
    : `${functionSelected}_${YSelected}`;
  const label2 = functionSelected2 === 'number'
    ? 'number'
    : `${functionSelected2}_${YSelected2}`;
  return (
    <ResponsiveContainer>
      <ComposedChart
        width={600}
        height={400}
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        {xAxis(XSelected)}
        <YAxis />
        <Tooltip labelFormatter={checkTickFormater(XSelected)} />
        <CartesianGrid stroke="#f5f5f5" />
        {Object.keys(data[0] || {})
          .filter(element => element === label1)
          .map((element, id) =>
            (<Bar
              key={`bar${element}`}
              dataKey={label1}
              fill={color[id]}
              stroke={color[id]}
            />),
          )}
        {Object.keys(data[0] || {})
          .filter(element => element === label2)
          .map((element, id) =>
            (<Line
              type="monotone"
              key={`line${element}`}
              dataKey={label2}
              stroke={color[id + 2]}
            />),
          )}
      </ComposedChart>
    </ResponsiveContainer>
  );
};
