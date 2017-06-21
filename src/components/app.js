import React, { Component } from 'react';

import 'react-select/dist/react-select.css';

import { Container, LeftColumn, RightColumn } from '../styles/layout';

import GraphPicker from './graphPicker';
import YAxisPicker from './yAxisPicker';
import XAxisPicker from './xAxisPicker';
import Chart from './chart';

import json from '../data/projects.json';

const values = json[1];

const options = json[0].map(column => ({
  label: column.title,
  value: column.title,
}));

const optionsNumber = json[0].filter(column => column.type === 'number').map(column => ({
  label: column.title,
  value: column.title,
}));

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      graphType: 'composed-chart',
      YSelectedValue: '',
      YSelectedValueList: [],
      XSelectedValue: '',
      selectedFunction: '',
      nbOfDim: 2,
    };
  }

  onGraphTypeChange = (term) => {
    this.setState({ graphType: term });
  };

  onYAxisChange = (term) => {
    this.setState({ YSelectedValue: term });
  };

  onXAxisChange = (term) => {
    this.setState({ XSelectedValue: term });
  };

  onFunctionChange = (term) => {
    this.setState({ selectedFunction: term });
  };

  renderBlocks = () =>
    (<YAxisPicker
      options={optionsNumber}
      onYAxisChange={e => this.onYAxisChange(e)}
      onFunctionChange={e => this.onFunctionChange(e)}
    />);

  render() {
    return (
      <Container>
        <LeftColumn>
          <GraphPicker onGraphTypeChange={this.onGraphTypeChange} nbOfDim={this.state.nbOfDim} />
          <XAxisPicker options={options} onXAxisChange={this.onXAxisChange} />
          {this.renderBlocks(this.state.graphType)}
          <img
            src={require('../images/composed-chart.png')}
            alt="composed-chart"
            width="75"
            height="75"
            onClick={() => this.onGraphTypeChange('composed-chart')}
          />
        </LeftColumn>
        <RightColumn>
          <Chart
            graphType={this.state.graphType}
            data={values}
            YSelected={this.state.YSelectedValue}
            XSelected={this.state.XSelectedValue}
            functionSelected={this.state.selectedFunction}
          />
        </RightColumn>
      </Container>
    );
  }
}
