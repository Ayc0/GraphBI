import React, { Component } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
  {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

class SimplePieChart extends Component {
  render () {
    console.log(this.props.data)
    return (
      <div>
        <h1>Hello</h1>
        <PieChart width={800} height={400}>
          <Pie
            dataKey="count"
            data={this.props.data}
            cx={200}
            cy={200}
            fill="#8884d8"
          >
          </Pie>
        </PieChart>
      </div>
    );
  }
}

export default SimplePieChart;