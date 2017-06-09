import React, { Component } from 'react';

import { Container, LeftColumn, RightColumn } from '../styles/layout';
import { Block, BlockTitle } from '../styles/block';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import json from '../data/projects.json';

import Chart from './chart';

import filterXAxis from '../functions/filterXAxis';
import sumYAxis from '../functions/sumYAxis';

const values = json[1];

const options = json[0].map((column) => {return {"label": column.title, "value": column.title}});

const first = filterXAxis(values, 'Brand');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'options': options,
      'selected_value': options[0],
    }
  }

  render() {
    return (<Container>
      <LeftColumn>
        <Block>
          <BlockTitle>Y Axis :</BlockTitle>
          <p>Sum of Revenue</p>
          <Select
            name="form-field-name"
            value={this.state.selected_value}
            options={options}
            onChange={(e) => {this.setState({'selected_value': e.label})}}
          />
        </Block>
        <Block>
          <BlockTitle>X Axis :</BlockTitle>
          <p>by Brand</p>
        </Block>
        <Block>
          <BlockTitle>Type of graph :</BlockTitle>
          <p>Linear</p>
        </Block>
      </LeftColumn>
      <RightColumn>
        <Chart data={sumYAxis(first, [this.state.selected_value])} />
      </RightColumn>
    </Container>)
  }
}
