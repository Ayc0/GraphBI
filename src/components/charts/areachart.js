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

// import dateFormatter from '../../functions/dateFormatter';
// labelFormatter={dateFormatter}
const color = ['#01b8aa', '#374649', '#f2c80f', '#fd625e', '#5f6b6d'];

const StackedAreaChart = ({ data, XSelected }) =>
  (<ResponsiveContainer>
    <AreaChart
      style={{ height: 'auto', width: '100%' }}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <XAxis
        dataKey="name"
        type={checkType(XSelected)}
        domain={checkDomain(XSelected)}
        tickFormatter={checkTickFormater(XSelected)}
      />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
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
            fillOpacity={0.3}
          />),
        )}

    </AreaChart>
  </ResponsiveContainer>);

export default StackedAreaChart;
