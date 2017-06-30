import React, { Component } from 'react';
import Select from 'react-select';

import { Block, BlockTitle } from '../styles/block';
import { isValidColumn } from '../data/';

const funcOptions = [
  { label: 'Number of projects', value: 'number' },
  { label: 'Sum of', value: 'sum' },
  { label: 'Average of', value: 'avg' },
];

class YAxisPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: (this.props.options[1] || {}).value || '',
      selectedFunction: funcOptions[0].value,
    };
  }

  componentDidMount() {
    this.props.onYAxisChange(this.state.selectedValue);
    this.props.onFunctionChange(this.state.selectedFunction);
    window.addEventListener('onDataLoad', this.onDataLoad);
  }

  componentWillUnmount() {
    window.removeEventListener('onDataLoad', this.onDataLoad);
  }

  onDataLoad = (event) => {
    const {
      functionSelected,
      YSelected,
      functionSelected2,
      YSelected2,
    } = event.detail;
    this.onFunctionChange(
      this.props.second ? functionSelected2 : functionSelected,
    );
    if (this.props.second && isValidColumn(YSelected2)) {
      this.onValueChange(YSelected2);
    }
    if (!this.props.second && isValidColumn(YSelected)) {
      this.onValueChange(YSelected);
    }
  };

  onValueChange = (term) => {
    this.setState({ selectedValue: term });
    this.props.onYAxisChange(term);
  };

  onFunctionChange = (term) => {
    this.setState({ selectedFunction: term });
    this.props.onFunctionChange(term);
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
    if (this.props.hide === true) {
      return null;
    }
    return (
      <Block>
        <BlockTitle>{this.props.title}:</BlockTitle>
        <Select
          clearable={false}
          name="Y-axis-function"
          value={this.state.selectedFunction}
          options={funcOptions}
          onChange={event => this.onFunctionChange(event.value)}
        />
        {this.valueSelect(this.state.selectedFunction)}
      </Block>
    );
  }
}

export default YAxisPicker;
