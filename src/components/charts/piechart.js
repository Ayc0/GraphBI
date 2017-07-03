import React, { Component } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

import legend from './legend';
import color from './colors';
import aspect from '../../functions/aspect';

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
    } : {(payload[0] || {}).value}
  </ToolTip>);

export default class extends Component {
  renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const xPercent = cx + 1.3 * radius * Math.cos(-midAngle * RADIAN);
    const yPercent = cy + 1.3 * radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={xPercent}
        y={yPercent}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {(percent || null) && `${parseInt(percent * 100, 10)}%`}
      </text>
    );
  };

  render() {
    const label = Object.keys(this.props.data[0]).filter(
      element => element !== 'name',
    )[0];
    return (
      <ResponsiveContainer aspect={aspect()}>
        <PieChart>
          <Pie
            dataKey={label}
            data={this.props.data}
            labelLine={false}
            label={this.renderCustomizedLabel}
          >
            {this.props.data.map((entry, index) =>
              (<Cell
                key={entry}
                fill={
                  this.props.disabled.includes(entry.name)
                    ? 'rgba(170,170,170,0.3)'
                    : color[index % color.length]
                }
              />),
            )}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          {legend}
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
