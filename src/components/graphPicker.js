import React, { Component } from 'react';

import { Line } from '../styles/layout';
import { Block, BlockTitle } from '../styles/block';
import Img from '../styles/img';

// Graph icons
import pieChart from '../images/pie-chart.svg';
import lineChart from '../images/line-chart.svg';
import barsChart from '../images/bars-chart.svg';
import areaChart from '../images/area-chart.svg';
import stackBarsChart from '../images/stack-bars-chart.svg';
import multiBarsChart from '../images/multi-bars-chart.svg';
import stackAreaChart from '../images/stack-area-chart.svg';

// const options = [
//   { value: 'Linear', label: 'Linear' },
//   { value: 'PieChart', label: 'PieChart' },
// ];

const Graph = ({ src, onClick, active, alt }) =>
  <Img src={src} alt={alt} onClick={onClick} active={active === alt} />;

class GraphPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: 'pie chart',
    };

    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(event) {
    const alt = event.target.alt;
    this.setState({ selectedValue: alt });
    // this.props.onGraphTypeChange(alt);
  }

  render() {
    return (
      <Block>
        <BlockTitle>Graph type :</BlockTitle>
        <Line>
          <Graph
            src={pieChart}
            alt="pie chart"
            onClick={this.onSelect}
            active={this.state.selectedValue}
          />
        </Line>
        <Line>
          <Graph
            src={lineChart}
            alt="line chart"
            onClick={this.onSelect}
            active={this.state.selectedValue}
          />
          <Graph
            src={barsChart}
            alt="bars chart"
            onClick={this.onSelect}
            active={this.state.selectedValue}
          />
          <Graph
            src={areaChart}
            alt="area chart"
            onClick={this.onSelect}
            active={this.state.selectedValue}
          />
        </Line>
        <Line>
          <Graph
            src={stackBarsChart}
            alt="stack bars chart"
            onClick={this.onSelect}
            active={this.state.selectedValue}
          />
          <Graph
            src={multiBarsChart}
            alt="multi bars chart"
            onClick={this.onSelect}
            active={this.state.selectedValue}
          />
          <Graph
            src={stackAreaChart}
            alt="stack area chart"
            onClick={this.onSelect}
            active={this.state.selectedValue}
          />
        </Line>
      </Block>
    );
  }
}

export default GraphPicker;
