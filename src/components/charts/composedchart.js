import React from 'react';
import {
  ComposedChart,
  Line,
  // Area,
  Bar,
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

const SimpleComposedChart = ({ data, XSelected }) => (
  <ResponsiveContainer>
    <ComposedChart
      width={600}
      height={400}
      data={data}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
    >
      <XAxis
        dataKey="name"
        type={checkType(XSelected)}
        domain={checkDomain(XSelected)}
        tickFormatter={checkTickFormater(XSelected)}
      />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#f5f5f5" />
      {Object.keys(data[0] || {})
          .filter(element => element !== 'name')
          .map((element, id) =>
            (<Bar
              key={`bar${element}`}
              dataKey={element}
              fill={color[id]}
              fillOpacity={0.3}
              stroke={color[id]}
            />),
          )}
      {Object.keys(data[0] || {})
          .filter(element => element !== 'name')
          .map((element, id) =>
            (<Line
              type="monotone"
              key={`line${element}`}
              dataKey={element}
              fillOpacity={0.3}
              stroke={color[id + 2]}
            />),
          )}
    </ComposedChart>
  </ResponsiveContainer>
  );

export default SimpleComposedChart;
