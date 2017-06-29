import React from 'react';
import { AreaChart, Area, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import xAxis, { checkTickFormater } from './xAxis';
import legend from './legend';
import color from './colors';

export default ({ data, XSelected, timelapse, disabled, graphType }) =>
  (<ResponsiveContainer aspect={16 / 9}>
    <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
      {xAxis(XSelected, timelapse, graphType)}
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip labelFormatter={checkTickFormater(XSelected, timelapse)} />
      {legend}
      {Object.keys(data[0] || {})
        .filter(element => element !== 'name')
        .map((element, id) =>
          (<Area
            stackId="1"
            key={element}
            type="monotone"
            dataKey={element}
            fill={disabled.includes(element) ? 'rgba(170,170,170,0.3)' : color[id % color.length]}
            stroke={disabled.includes(element) ? 'rgba(170,170,170,0.3)' : color[id % color.length]}
          />),
        )}

    </AreaChart>
  </ResponsiveContainer>);
