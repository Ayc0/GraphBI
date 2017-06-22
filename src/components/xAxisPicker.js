import React, { Component } from 'react';
import Select from 'react-select';

import { Block, BlockTitle } from '../styles/block';

class XAxisPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: this.props.options[4].value,
    };
  }

  componentWillMount() {
    this.props.onXAxisChange(this.state.selectedValue);
  }

  onSelectChange = (term) => {
    this.setState({ selectedValue: term });
    this.props.onXAxisChange(term);
  };

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
      </Block>
    );
  }
}

export default XAxisPicker;
