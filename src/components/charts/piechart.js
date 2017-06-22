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

class SimplePieChart extends Component {
  constructor(props) {
    super(props);
    this.renderCustomizedLabel = this.renderCustomizedLabel.bind(this);
  }

  renderCustomizedLabel({ cx, cy, midAngle, innerRadius, outerRadius, index }) {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + 2.3 * radius * Math.cos(-midAngle * RADIAN);
    const y = cy + 2.3 * radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        fill="grey"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {this.props.data[index].name}
      </text>
    );
  }

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

export default SimplePieChart;
