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

  componentWillMount() {
    this.props.onFirstAxisChange(this.props.options[1].label);
    this.props.onFunctionChange(funcOptions[0].value);
  }

  onValueChange(e) {
    this.setState({ selected_value: e });
    this.props.onFirstAxisChange(e);
  }

  onFunctionChange(e) {
    this.setState({ selected_function: e });
    this.props.onFunctionChange(e.value);
  }

  render() {
    return (
      <Block>
        <BlockTitle>Y Axis :</BlockTitle>
        <Select
          clearable={false}
          name="Y-axis-value"
          value={this.state.selected_value}
          options={this.props.options}
          onChange={e => this.onValueChange(e.label)}
        />
        <Select
          clearable={false}
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
