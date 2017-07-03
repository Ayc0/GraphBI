import React from 'react';
import {
  BarChart,
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
import aspect from '../../functions/aspect';

export default ({ data, XSelected, timelapse, disabled, graphType, brush }) =>
  (<ResponsiveContainer aspect={aspect()}>
    <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
      {xAxis(XSelected, timelapse, graphType)}
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
            fill={
              disabled.includes(element)
                ? 'rgba(170,170,170,0.3)'
                : color[id % color.length]
            }
          />),
        )}
      {brush && <Brush stroke={color[3]} height={20} />}
    </BarChart>
  </ResponsiveContainer>);
