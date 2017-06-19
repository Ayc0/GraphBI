import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const color = ['#01b8aa', '#374649', '#f2c80f', '#fd625e', '#5f6b6d'];

const dateFormatter = (tick) => {
  const date = new Date(tick);
  return date.toLocaleDateString();
};

const SimpleBarChart = ({ data }) =>
  (<ResponsiveContainer>
    <BarChart style={{ height: 'auto', width: '100%' }}
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
      <XAxis dataKey="name"
             type="number"
             domain={['dataMin', 'dataMax']}
             tickFormatter={dateFormatter}/>
      <YAxis/>
      <CartesianGrid strokeDasharray="3 3"/>
      <Tooltip labelFormatter={dateFormatter} />
      <Legend />
      {Object.keys(data[0] || {})
        .filter(element => element !== 'name')
        .map((element, id) =>
          (<Bar
            key={element}
            dataKey={element}
            fill={color[id]}
            fillOpacity={0.3}
          />),
        )}
    </BarChart>
  </ResponsiveContainer>);

export default SimpleBarChart;
