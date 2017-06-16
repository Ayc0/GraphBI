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
      graph_type: 'pie-chart',
      Y_selected_value: '',
      X_selected_value: '',
      selected_function: '',
      nbOfDim: 1,
    };
  }

  onGraphTypeChange = (term) => {
    this.setState({ graph_type: term });
  };

  onFirstAxisChange = (term) => {
    this.setState({ Y_selected_value: term });
  };

  onSecondAxisChange = (term) => {
    this.setState({ X_selected_value: term });
  };

  onFunctionChange = (term) => {
    this.setState({ selected_function: term });
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
          {this.renderBlocks(this.state.graph_type)}
          <Plus
            onClick={() =>
              this.setState(prevState => ({ nbOfDim: prevState.nbOfDim + 1 }))}
          >
            +
          </Plus>
        </LeftColumn>
        <RightColumn>
          <Chart
            graphType={this.state.graph_type}
            data={values}
            Y_selected={this.state.Y_selected_value}
            X_selected={this.state.X_selected_value}
            function_selected={this.state.selected_function}
          />
        </RightColumn>
      </Container>
    );
  }
}
