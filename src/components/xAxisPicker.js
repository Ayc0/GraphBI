import React, { Component } from 'react';
import Select from 'react-select';

import { Block, BlockTitle } from '../styles/block';

import { dateLabels, isValidColumn } from '../data';

const dateOptions = [
  { label: 'group by year', value: 'year' },
  { label: 'group by semester', value: 'semester' },
  { label: 'group by trimester', value: 'trimester' },
  { label: 'group by month', value: 'month' },
  { label: 'group by week', value: 'week' },
  { label: 'group by day', value: 'day' },
];

class XAxisPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: this.props.options[4].value,
      selectedDateOption: 'month',
      dateSelected: false,
    };
  }

  componentWillMount() {
    this.props.onXAxisChange(this.state.selectedValue);
  }

  componentDidMount() {
    window.addEventListener('onDataLoad', this.onDataLoad);
  }

  componentWillUnmount() {
    window.removeEventListener('onDataLoad', this.onDataLoad);
  }

  onDataLoad = (event) => {
    const { XSelected, timelapse } = event.detail;
    if (isValidColumn(XSelected)) {
      this.onSelectChange(XSelected);
    }
    this.onDateChange(timelapse);
  };

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
