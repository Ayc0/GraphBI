import React, { Component } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const color = ['#01b8aa', '#374649', '#f2c80f', '#fd625e', '#5f6b6d'];
const RADIAN = Math.PI / 180;

class CustomTooltip extends Component {
  render() {
    if (this.props && this.props.payload.length > 0) {
      const item = this.props.payload[0].payload;
      return (
        <div style={{color: '#2f4f4f', backgroundColor:'white', borderColor:'grey', border:'0.5px solid #d3d3d3', padding: 5}}>
          {item.name} : {item.count}
        </div>
      );
    }
    return null
  }
};

class SimplePieChart extends Component {
  constructor(props) {
    super(props);
    this.renderCustomizedLabel = this.renderCustomizedLabel.bind(this);
  }

  renderCustomizedLabel({ cx, cy, midAngle, innerRadius, outerRadius, index }) {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + 2.5 * radius * Math.cos(-midAngle * RADIAN);
    const y = cy + 2.5 * radius * Math.sin(-midAngle * RADIAN);
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
      <div style={{ height: 'auto', width: '100%' }}>
        <h1>PieChart</h1>
        <PieChart width={800} height={400}>
          <Pie
            dataKey="count"
            data={this.props.data}
            cx={200}
            cy={200}
            labelLine={false}
            label={this.renderCustomizedLabel}
          >
            {this.props.data.map((entry, index) =>
              <Cell key={entry} fill={color[index % color.length]} />,
            )}
          </Pie>
          <Tooltip content={<CustomTooltip/>} />
        </PieChart>
      </div>
    );
  }
}

export default SimplePieChart;
