import React, { Component } from 'react';

import { Container, LeftColumn, RightColumn } from '../styles/layout';

import GraphPicker from './graphPicker';
import YAxisPicker from './yAxisPicker';
import XAxisPicker from './xAxisPicker';
import ComparePicker from './comparePicker';
import Chart from './chart';

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
      compareBy: '',
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

  onCompareChange = (term) => {
    this.setState({ compareBy: term, nbOfDim: term === '' ? 2 : 3 });
  };

  renderBlocks = () =>
    (<YAxisPicker
      options={optionsNumber}
      onYAxisChange={e => this.onYAxisChange(e)}
      onFunctionChange={e => this.onFunctionChange(e)}
    />);

  render() {
    console.log(this.state.compareBy);
    return (
      <Container>
        <LeftColumn>
          <GraphPicker
            onGraphTypeChange={this.onGraphTypeChange}
            nbOfDim={this.state.nbOfDim}
          />
          <XAxisPicker options={options} onXAxisChange={this.onXAxisChange} />
          <ComparePicker
            onCompareChange={this.onCompareChange}
            options={optionsCategory}
          />
          {this.renderBlocks(this.state.graphType)}
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
