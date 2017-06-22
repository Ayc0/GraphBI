import React, { Component } from 'react';
import Select from 'react-select';

import { Block, BlockTitle } from '../styles/block';

const funcOptions = [
  { label: 'Number of projects', value: 'number' },
  { label: 'Somme', value: 'sum' },
  { label: 'Moyenne', value: 'avg' },
];

class YAxisPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: (this.props.options[1] || {}).value,
      selectedFunction: funcOptions[0].value,
    };
  }

  componentDidMount() {
    this.props.onYAxisChange(this.state.selectedValue);
    this.props.onFunctionChange(this.state.selectedFunction);
  }

  onValueChange = (e) => {
    this.setState({ selectedValue: e });
    this.props.onYAxisChange(e);
  };

  onFunctionChange = (e) => {
    this.setState({ selectedFunction: e.value });
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
        <BlockTitle>{this.props.title} :</BlockTitle>
        <Select
          clearable={false}
          name="Y-axis-function"
          value={this.state.selectedFunction}
          options={funcOptions}
          onChange={e => this.onFunctionChange(e)}
        />
        {this.valueSelect(this.state.selectedFunction)}
      </Block>
    );
  }
}

export default YAxisPicker;
