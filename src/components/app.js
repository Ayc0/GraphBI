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

import '../styles/app.css';

import { findMaxDim } from './charts/index';
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

  onGraphTypeChange = (term) => {
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

  renderYPickers = () => {
    if (this.state.graphType === 'composed-chart') {
      return (
        <div>
          <YAxisPicker
            title="First set of data"
            options={optionsNumber}
            onYAxisChange={e => this.onYAxisChange(e)}
            onFunctionChange={e => this.onFunctionChange(e)}
          />
          <YAxisPicker
            title="Second set of data"
            options={optionsNumber}
            onYAxisChange={e => this.onYAxisChange2(e)}
            onFunctionChange={e => this.onFunctionChange2(e)}
            second
          />
        </div>
      );
    }
    return (
      <YAxisPicker
        title="Y Axis"
        options={optionsNumber}
        onYAxisChange={e => this.onYAxisChange(e)}
        onFunctionChange={e => this.onFunctionChange(e)}
      />
    );
  };

  renderComparePicker = () => {
    if (findMaxDim(this.state.graphType) !== 3) {
      return null;
    }
    return <ComparePicker onCompareChange={this.onCompareChange} options={optionsCategory} />;
  };

  render() {
    return (
      <Container>
        <LeftColumn>
          <GraphPicker onGraphTypeChange={this.onGraphTypeChange} nbOfDim={this.state.nbOfDim} />
          <XAxisPicker
            options={options}
            onXAxisChange={this.onXAxisChange}
            onTimelapseChange={e => this.onTimelapseChange(e)}
          />
          {this.renderComparePicker()}
          {this.renderYPickers()}
          <a
            onClick={() => {
              this.setState({ brush: !this.state.brush });
            }}
          >
            Brush {this.state.brush}
          </a>
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
        </RightColumn>
      </Container>
    );
  }
}
