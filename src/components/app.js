import React, { Component } from 'react';

import 'react-select/dist/react-select.css';

import { Container, LeftColumn, RightColumn } from '../styles/layout';

import GraphPicker from './graphPicker';
import YAxisPicker from './yAxisPicker';
import YAxisPickerMulti from './yAxisPickerMulti';
import XAxisPicker from './xAxisPicker';
import Chart from './chart';

import json from '../data/projects.json';

// import multiIcon from '../images/composed-chart.png';

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
      XSelectedValue: '',
      YSelectedValue: '',
      selectedFunction: '',
      YSelectedValueList: [],
      nbOfDim: 2,
      nbOfYAxis: 1,
    };
  }

  onGraphTypeChange = (term) => {
    this.setState({ graphType: term });
  };

  onXAxisChange = (term) => {
    this.setState({ XSelectedValue: term });
  };

  onYAxisChange = (term) => {
    this.setState({ YSelectedValue: term });
  };

  onFunctionChange = (term) => {
    this.setState({ selectedFunction: term });
  };

  onAddYSelector = (i) => {
    this.setState({ nbOfYAxis: i + 1 });
  };

  onResetYSelector = () => {
    this.setState({ nbOfYAxis: 1 });
  };

  onYAxisMultiChange = (e) => {
    console.log(e);
  };

  renderBlocks = () => {
    if (this.state.graphType !== 'composed-chart') {
      return (
        <YAxisPicker
          options={optionsNumber}
          onYAxisChange={e => this.onYAxisChange(e)}
          onFunctionChange={e => this.onFunctionChange(e)}
        />
      );
    }
    const out = [];
    for (let i = 0; i < this.state.nbOfYAxis; i += 1) {
      out.push(
        <YAxisPickerMulti
          key={i}
          key_number={i}
          options={optionsNumber}
          onYAxisMultiChange={e => this.onYAxisMultiChange(e)}
        />,
      );
    }
    return out;
  };

  renderGraphPicker = () => {
    console.log('rendering graph picker');
    if (this.state.graphType !== 'composed-chart') {
      return (
        <GraphPicker onGraphTypeChange={this.onGraphTypeChange} nbOfDim={this.state.nbOfDim} />
      );
    }
    return null;
  };

  render() {
    return (
      <Container>
        <LeftColumn>
          {this.renderGraphPicker()}
          <XAxisPicker options={options} onXAxisChange={this.onXAxisChange} />
          {this.renderBlocks()}
          <button
            onClick={() => {
              this.onGraphTypeChange('composed-chart');
              this.onAddYSelector(this.state.nbOfYAxis);
            }}
          >
            Click here to add a YAxis selector
          </button>
          <button
            onClick={() => {
              this.onGraphTypeChange('pie-chart');
              this.onResetYSelector();
            }}
          >
            Click here to return to unique graph
          </button>
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
