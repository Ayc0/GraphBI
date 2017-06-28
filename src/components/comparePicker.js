import React, { Component } from 'react';
import Select from 'react-select';

import { Block, BlockTitle } from '../styles/block';

class ComparePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: '',
    };
  }

  componentWillMount() {
    this.props.onCompareChange(this.state.selectedValue);
  }

  componentDidMount() {
    window.addEventListener('onDataLoad', this.onDataLoad);
  }

  componentWillUnmount() {
    window.removeEventListener('onDataLoad', this.onDataLoad);
  }

  onDataLoad = (event) => {
    const { compareBy } = event.detail;
    this.onSelectChange(compareBy);
  };

  onSelectChange = (term) => {
    this.setState({ selectedValue: term });
    this.props.onCompareChange(term);
  };

  render() {
    return (
      <Block>
        <BlockTitle>Compare which data?</BlockTitle>
        <Select
          clearable={false}
          name="Compare which data?"
          value={this.state.selectedValue}
          options={[
            {
              label: 'none',
              value: '',
            },
            ...this.props.options,
          ]}
          onChange={event => this.onSelectChange(event.value)}
        />
      </Block>
    );
  }
}

export default ComparePicker;
