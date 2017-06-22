import React, { Component } from 'react';

import { Container, LeftColumn, RightColumn } from '../styles/layout';

import GraphPicker from './graphPicker';
import YAxisPicker from './yAxisPicker';
import YAxisPickerMulti from './yAxisPickerMulti';
import XAxisPicker from './xAxisPicker';
import ComparePicker from './comparePicker';
import Chart from './chart';

import multiIcon from '../images/composed-chart.png';

import { values, options, optionsNumber, optionsCategory } from '../data/';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      graphType: '',
      YSelectedValue: '',
      YSelectedValueList: [],
      XSelectedValue: '',
      selectedFunction: '',
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
    if (this.state.graphType !== 'composed-chart') {
      return (
        <GraphPicker
          onGraphTypeChange={this.onGraphTypeChange}
          nbOfDim={this.state.nbOfDim}
        />
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
          <ComparePicker onCompareChange={() => {}} options={optionsCategory} />
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
          {this.renderBlocks(this.state.graphType)}
          <div onClick={() => this.onGraphTypeChange('composed-chart')}>
            <img src={multiIcon} alt="composed-chart" width="75" height="75" />
          </div>
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
