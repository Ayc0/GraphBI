import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { checkType, checkDomain, checkTickFormater } from './xAxis';

const color = ['#01b8aa', '#374649', '#f2c80f', '#fd625e', '#5f6b6d'];

export default ({ data, XSelected }) =>
  (<ResponsiveContainer>
    <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
      <XAxis
        dataKey="name"
        type={checkType(XSelected)}
        domain={checkDomain(XSelected)}
        tickFormatter={checkTickFormater(XSelected)}
      />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip labelFormatter={checkTickFormater(XSelected)} />
      {Object.keys(data[0] || {})
        .filter(element => element !== 'name')
        .map((element, id) =>
          (<Line
            type="monotone"
            key={element}
            dataKey={element}
            fillOpacity={0.3}
            stroke={color[id]}
            activeDot={{ r: 8 }}
          />),
        )}
    </LineChart>
  </ResponsiveContainer>);
