import React, { Component } from 'react';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

import { Container, LeftColumn, RightColumn } from '../styles/layout';
import { Block, BlockTitle } from '../styles/block';

import json from '../data/projects.json';

import Chart from './chart';

import filterXAxis from '../functions/filterXAxis';
import sumYAxis from '../functions/sumYAxis';
import meanYAxis from '../functions/meanYAxis';

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
      Y_selected_value: [],
      X_selected_value: options[1],
    };
  }

  render() {
    return (
      <Container>
        <LeftColumn>
          <Block>
            <BlockTitle>Y Axis :</BlockTitle>
            <p>Sum of</p>
            <Select
              name="Y-axis"
              multi
              value={this.state.Y_selected_value}
              options={options}
              onChange={(e) => {
                this.setState({ Y_selected_value: e });
                console.log(this.state.Y_selected_value);
              }}
            />
          </Block>
          <Block>
            <BlockTitle>X Axis :</BlockTitle>
            <p>by</p>
            <Select
              name="X-axis"
              value={this.state.X_selected_value}
              options={options}
              onChange={(e) => {
                this.setState({ X_selected_value: e.label });
              }}
            />
          </Block>
          <Block>
            <BlockTitle>Type of graph :</BlockTitle>
            <p>Linear</p>
          </Block>
        </LeftColumn>
        <RightColumn>
          <Chart
            data={meanYAxis(
              filterXAxis(values, this.state.X_selected_value),
              this.state.Y_selected_value.map(option => option.label),
            )}
          />
        </RightColumn>
      </Container>
    );
  }
}
