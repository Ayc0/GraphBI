import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import { Block, BlockTitle } from '../styles/block';

class XAxisPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: this.props.options[2],
    };

    this.onSelectChange = this.onSelectChange.bind(this);
  }

  componentWillMount() {
    this.props.onXAxisChange(this.props.options[2].label);
  }

  onSelectChange(term) {
    this.setState({ selectedValue: term });
    this.props.onXAxisChange(term);
  }

  render() {
    return (
      <Block>
        <BlockTitle>X Axis :</BlockTitle>
        <p>by</p>
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
