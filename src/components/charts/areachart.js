import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { checkType, checkDomain, checkTickFormater } from './xAxis';
import legend from './legend';
import color from './colors';

export default ({ data, XSelected }) =>
  (<ResponsiveContainer>
    <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
      <XAxis
        dataKey="name"
        type={checkType(XSelected)}
        domain={checkDomain(XSelected)}
        tickFormatter={checkTickFormater(XSelected)}
      />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip labelFormatter={checkTickFormater(XSelected)} />
      {legend}
      {Object.keys(data[0] || {})
        .filter(element => element !== 'name')
        .map((element, id) =>
          (<Area
            connectNulls
            key={element}
            type="monotone"
            dataKey={element}
            stroke={color[id]}
            fill={color[id]}
          />),
        )}

    </AreaChart>
  </ResponsiveContainer>);
