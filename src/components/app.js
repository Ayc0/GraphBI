import React, { Component } from 'react';

import 'react-select/dist/react-select.css';

import { Container, LeftColumn, RightColumn } from '../styles/layout';
import GraphPicker from './graphPicker';
import YAxisPicker from './yAxisPicker';
import XAxisPicker from './xAxisPicker';

import json from '../data/projects.json';

// Charts
import Chart from './charts/chart';
import SimplePieChart from './charts/piechart';

import filterXAxis from '../functions/filterXAxis';
import countYAxis from '../functions/countYAxis';
// import sumYAxis from '../functions/sumYAxis';
// import meanYAxis from '../functions/meanYAxis';

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
      graph_type: 'Linear',
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

  renderGraph(selection) {
    if (selection === 'PieChart') {
      return <SimplePieChart />;
    }
    return (
      <Chart
        data={countYAxis(
          filterXAxis(values, this.state.X_selected_value),
          this.state.Y_selected_value.map(option => option.label),
        )}
      />
    );
  }

  render() {
    return (
      <Container>
        <LeftColumn>
          <GraphPicker onGraphTypeChange={e => this.onGraphTypeChange(e)} />
          <XAxisPicker
            options={options}
            onSecondAxisChange={e => this.onSecondAxisChange(e)}
          />
          <YAxisPicker
            options={options}
            onFirstAxisChange={e => this.onFirstAxisChange(e)}
          />
        </LeftColumn>
        <RightColumn>
          {this.renderGraph(this.state.graph_type)}
        </RightColumn>
      </Container>
    );
  }
}
