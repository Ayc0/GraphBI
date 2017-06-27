import React from 'react';
import {
  BarChart,
  Bar,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import xAxis, { checkTickFormater } from './xAxis';
import legend from './legend';
import color from './colors';

export default ({ data, XSelected, timelapse }) =>
  (<ResponsiveContainer>
    <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
      {xAxis(XSelected)}
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip labelFormatter={checkTickFormater(XSelected, timelapse)} />
      {legend}
      {Object.keys(data[0] || {})
        .filter(element => element !== 'name')
        .map((element, id) =>
          (<Bar
            stackId="1"
            key={element}
            dataKey={element}
            fill={color[id]}
            stroke={color[id]}
          />),
        )}
    </BarChart>
  </ResponsiveContainer>);
