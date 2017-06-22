import React, { Component } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const color = ['#01b8aa', '#374649', '#f2c80f', '#fd625e', '#5f6b6d'];
const RADIAN = Math.PI / 180;

const ToolTip = styled.div`
  color: #2f4f4f;
  background-color: white;
  border: 1px solid #cccccc;
  padding: 10px;
`;

const CustomTooltip = ({ payload }) =>
  (<ToolTip>
    {
      (payload[0] || { payload: { payload: { name: '' } } }).payload.payload
        .name
    } :
    {' '}{(payload[0] || {}).value}
  </ToolTip>);

export default class extends Component {
  renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const xName = cx + 1.4 * radius * Math.cos(-midAngle * RADIAN);
    const yName = cy + 1.4 * radius * Math.sin(-midAngle * RADIAN);
    const xPercent = cx + radius * Math.cos(-midAngle * RADIAN);
    const yPercent = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <g>
        <text
          x={xName}
          y={yName}
          fill="white"
          textAnchor="middle"
          dominantBaseline="central"
        >
          {this.props.data[index].name}
        </text>
        <text
          x={xPercent}
          y={yPercent}
          fill="white"
          textAnchor="middle"
          dominantBaseline="central"
        >
          {parseInt(percent * 100, 10)}%
        </text>
      </g>
    );
  };

  render() {
    return (
      <ResponsiveContainer width="70%">
        <PieChart>
          <Pie
            dataKey="values"
            data={this.props.data}
            labelLine={false}
            label={this.renderCustomizedLabel}
          >
            {this.props.data.map((entry, index) =>
              <Cell key={entry} fill={color[index % color.length]} />,
            )}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
