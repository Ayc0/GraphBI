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

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options,
      graph_type: 'area-chart',
      Y_selected_value: [],
      X_selected_value: options[1],
    };
  }

  onGraphTypeChange(e) {
    this.setState({ graph_type: e });
  }

  onFirstAxisChange(e) {
    this.setState({ Y_selected_value: e });
  }

  onSecondAxisChange(e) {
    this.setState({ X_selected_value: e });
  }

  renderBlocks(selection) {
    if (selection !== 'pie-chart') {
      return <YAxisPicker options={options} onFirstAxisChange={e => this.onFirstAxisChange(e)} />;
    }
  }

  render() {
    return (
      <Container>
        <LeftColumn>
          <GraphPicker onGraphTypeChange={e => this.onGraphTypeChange(e)} />
          <XAxisPicker options={options} onSecondAxisChange={e => this.onSecondAxisChange(e)} />
          {this.renderBlocks(this.state.graph_type)}
        </LeftColumn>
        <RightColumn>
          <Chart
            graph_type={this.state.graph_type}
            data={values}
            Y_selected={this.state.Y_selected_value}
            X_selected={this.state.X_selected_value}
          />
        </RightColumn>
      </Container>
    );
  }
}
