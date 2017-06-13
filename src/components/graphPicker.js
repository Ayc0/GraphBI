import React, { Component } from 'react';

import { Row } from '../styles/layout';
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

class GraphPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // selected_value: options[0],
    };
  }

  onSelectChange(e) {
    this.setState({ selected_value: e });
    this.props.onGraphTypeChange(e);
  }

  render() {
    return (
      <Block>
        <BlockTitle>Type of graph :</BlockTitle>
        <Row>
          <Img src={pieChart} alt="pie chart" />
        </Row>
        <Row>
          <Img src={lineChart} alt="line chart" />
          <Img src={barsChart} alt="bars chart" />
          <Img src={areaChart} alt="area chart" />
        </Row>
        <Row>
          <Img src={stackBarsChart} alt="bars chart" />
          <Img src={multiBarsChart} alt="multi bars chart" />
          <Img src={stackAreaChart} alt="stack area chart" />
        </Row>
      </Block>
    );
  }
}

export default GraphPicker;
