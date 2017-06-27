import React, { Component } from 'react';
import Select from 'react-select';

import { Block, BlockTitle } from '../styles/block';

import { dateLabels } from '../data';

const dateOptions = [
  { label: 'group by month', value: 'month' },
  { label: 'group by year', value: 'year' },
];

class XAxisPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: this.props.options[4].value,
      selectedDateOption: dateOptions[0].value,
      dateSelected: false,
    };
  }

  componentWillMount() {
    this.props.onXAxisChange(this.state.selectedValue);
  }

  onSelectChange = (term) => {
    this.setState({ selectedValue: term });
    this.props.onXAxisChange(term);
    this.setState({ dateSelected: dateLabels.includes(term) });
  };

  onDateChange = (term) => {
    this.setState({ selectedDateOption: term });
    this.props.onTimelapseChange(term);
  };

  renderDateSelector() {
    if (this.state.dateSelected) {
      return (
        <Select
          clearable={false}
          name="date"
          value={this.state.selectedDateOption}
          options={dateOptions}
          onChange={event => this.onDateChange(event.value)}
        />
      );
    }
    return null;
  }

  render() {
    return (
      <Block>
        <BlockTitle>X Axis:</BlockTitle>
        <Select
          clearable={false}
          name="X-axis"
          value={this.state.selectedValue}
          options={this.props.options}
          onChange={event => this.onSelectChange(event.label)}
        />
        {this.renderDateSelector()}
      </Block>
    );
  }
}

export default XAxisPicker;
