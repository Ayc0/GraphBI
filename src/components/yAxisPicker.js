import React, { Component } from 'react';
import Select from 'react-select';

import { Block, BlockTitle } from '../styles/block';

const funcOptions = [
  { label: 'Number of projects', value: 'number' },
  { label: 'Somme', value: 'sum' },
];

class YAxisPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: this.props.options[1],
      selectedFunction: funcOptions[0],
    };
  }

  componentWillMount() {
    this.props.onYAxisChange(this.props.options[1].label);
    this.props.onFunctionChange(funcOptions[0].value);
  }

  onValueChange = (e) => {
    this.setState({ selectedValue: e });
    this.props.onYAxisChange(e);
  };

  onFunctionChange = (e) => {
    this.setState({ selectedFunction: e });
    this.props.onFunctionChange(e.value);
  };

  valueSelect = (selectedFunction) => {
    if (selectedFunction !== 'number') {
      return (
        <Select
          clearable={false}
          name="Y-axis-value"
          value={this.state.selectedValue}
          options={this.props.options}
          onChange={e => this.onValueChange(e.label)}
        />
      );
    }
    return null;
  };

  render() {
    return (
      <Block>
        <BlockTitle>Y Axis :</BlockTitle>
        <Select
          clearable={false}
          name="Y-axis-function"
          value={this.state.selectedFunction}
          options={funcOptions}
          onChange={e => this.onFunctionChange(e)}
        />
        {this.valueSelect(this.state.selectedFunction.value)}
      </Block>
    );
  }
}

export default YAxisPicker;
