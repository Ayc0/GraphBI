import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import { Block, BlockTitle } from '../styles/block';

const funcOptions = [
  { label: 'Number of projects', value: 'number' },
  { label: 'Somme', value: 'sum' },
];

class YAxisPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_value: this.props.options[1],
      selected_function: funcOptions[0],
    };
  }

  onValueChange(e) {
    this.setState({ selected_value: e });
    this.props.onFirstAxisChange(e);
  }

  onFunctionChange(e) {
    this.setState({ selected_function: e });
  }

  render() {
    return (
      <Block>
        <BlockTitle>Y Axis :</BlockTitle>
        <Select
          name="Y-axis-value"
          value={this.state.selected_value}
          options={this.props.options}
          onChange={e => this.onValueChange(e)}
        />
        <Select
          name="Y-axis-function"
          value={this.state.selected_function}
          options={funcOptions}
          onChange={e => this.onFunctionChange(e)}
        />
      </Block>
    );
  }
}

export default YAxisPicker;
