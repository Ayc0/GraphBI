import React, { Component } from 'react';

import 'react-select/dist/react-select.css';

import { Container, LeftColumn, RightColumn } from '../styles/layout';
import Plus from '../styles/plus';

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

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      graphType: 'pie-chart',
      YSelectedValue: '',
      XSelectedValue: '',
      selectedFunction: '',
      nbOfDim: 2,
    };
  }

  onGraphTypeChange = (term) => {
    this.setState({ graphType: term });
  };

  onFirstAxisChange = (term) => {
    this.setState({ YSelectedValue: term });
  };

  onSecondAxisChange = (term) => {
    this.setState({ XSelectedValue: term });
  };

  onFunctionChange = (term) => {
    this.setState({ selectedFunction: term });
  };

  renderBlocks = () =>
    (<YAxisPicker
      options={options}
      onFirstAxisChange={e => this.onFirstAxisChange(e)}
      onFunctionChange={e => this.onFunctionChange(e)}
    />);

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
            onSecondAxisChange={this.onSecondAxisChange}
          />
          {this.renderBlocks(this.state.graphType)}
          <Plus
            onClick={() =>
              this.setState(prevState => ({ nbOfDim: prevState.nbOfDim + 1 }))}
          >
            +
          </Plus>
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
