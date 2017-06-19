import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const color = ['#01b8aa', '#374649', '#f2c80f', '#fd625e', '#5f6b6d'];

const SimpleBarChart = ({ data }) =>
  (<ResponsiveContainer>
    <BarChart
      style={{ height: 'auto', width: '100%' }}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <XAxis dataKey="name" domain={['dataMin', 'dataMax']} />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      {Object.keys(data[0] || {})
        .filter(element => element !== 'name')
        .map((element, id) =>
          (<Bar
            key={element}
            dataKey={element}
            fill={color[id]}
            fillOpacity={0.3}
            stroke={color[id]}
          />),
        )}
    </BarChart>
  </ResponsiveContainer>);

export default SimpleBarChart;
