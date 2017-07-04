import React, { Component } from 'react';

import 'react-select/dist/react-select.css';
import 'font-awesome/css/font-awesome.min.css';

import { Container, LeftColumn, RightColumn } from '../styles/layout';

import GraphPicker from './graphPicker';
import YAxisPicker from './yAxisPicker';
import XAxisPicker from './xAxisPicker';
import ComparePicker from './comparePicker';
import Chart from './chart';
import Favorites from './favorites';
import Brush from './brush';

import '../styles/app.css';

import { findMaxDim } from './charts/';
import { values, options, optionsNumber, optionsCategory } from '../data/';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      graphType: '',
      YSelectedValue: '',
      YSelectedValue2: '',
      XSelectedValue: '',
      selectedFunction: '',
      selectedFunction2: '',
      nbOfDim: 2,
      compareBy: '',
      timelapse: 'month',
      brush: false,
    };
  }

  componentWillMount() {
    window.addEventListener('onDataLoad', this.onDataLoad);
  }

  componentWillUnmount() {
    window.removeEventListener('onDataLoad', this.onDataLoad);
  }

  onDataLoad = (event) => {
    const { compareBy } = event.detail;
    this.onCompareChange(compareBy);
  };

  onGraphTypeChange = (term) => {
    if (findMaxDim(term) === 2 && this.state.nbOfDim === 3) {
      this.onCompareChange('');
    }
    this.setState({ graphType: term || '' });
  };

  onYAxisChange = (term) => {
    this.setState({ YSelectedValue: term || '' });
  };

  onYAxisChange2 = (term) => {
    this.setState({ YSelectedValue2: term || '' });
  };

  onXAxisChange = (term) => {
    this.setState({ XSelectedValue: term || '' });
  };

  onFunctionChange = (term) => {
    this.setState({ selectedFunction: term || '' });
  };

  onFunctionChange2 = (term) => {
    this.setState({ selectedFunction2: term || '' });
  };

  onCompareChange = (term) => {
    this.setState({ compareBy: term || '', nbOfDim: term === '' ? 2 : 3 });
  };

  onTimelapseChange = (term) => {
    this.setState({ timelapse: term || '' });
  };

  render() {
    return (
      <Container>
        <LeftColumn>
          <GraphPicker
            onGraphTypeChange={this.onGraphTypeChange}
            nbOfDim={this.state.nbOfDim}
          />
          <XAxisPicker
            options={options}
            onXAxisChange={this.onXAxisChange}
            onTimelapseChange={e => this.onTimelapseChange(e)}
          />
          <ComparePicker
            onCompareChange={this.onCompareChange}
            options={optionsCategory}
            value={this.state.compareBy}
            hide={findMaxDim(this.state.graphType) === 2}
          />
          <YAxisPicker
            title={
              this.state.graphType === 'composed-chart'
                ? 'First set of data'
                : 'Y Axis'
            }
            options={optionsNumber}
            onYAxisChange={this.onYAxisChange}
            onFunctionChange={this.onFunctionChange}
          />
          <YAxisPicker
            title="Second set of data"
            options={optionsNumber}
            onYAxisChange={this.onYAxisChange2}
            onFunctionChange={this.onFunctionChange2}
            second
            hide={this.state.graphType !== 'composed-chart'}
          />
        </LeftColumn>
        <RightColumn>
          <Favorites />
          <Chart
            graphType={this.state.graphType}
            data={values}
            YSelected={this.state.YSelectedValue}
            XSelected={this.state.XSelectedValue}
            functionSelected={this.state.selectedFunction}
            YSelected2={this.state.YSelectedValue2}
            functionSelected2={this.state.selectedFunction2}
            compareBy={this.state.compareBy}
            timelapse={this.state.timelapse}
            brush={this.state.brush}
          />
          <Brush
            onChangeBrush={() => {
              this.setState({ brush: !this.state.brush });
            }}
            active={this.state.brush}
          />
        </RightColumn>
      </Container>
    );
  }
}
