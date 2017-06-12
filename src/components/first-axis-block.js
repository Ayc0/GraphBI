import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import { Block, BlockTitle } from '../styles/block';

class FirstAxisBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_value: [],
    };
  }

  onSelectChange(e) {
    this.setState({ selected_value: e });
    this.props.onFirstAxisChange(e);
  }

  render() {
    return (
      <Block>
        <BlockTitle>Y Axis :</BlockTitle>
        <p>Sum of</p>
        <Select
          name="Y-axis"
          multi
          value={this.state.selected_value}
          options={this.props.options}
          onChange={e => this.onSelectChange(e)}
        />
      </Block>
    );
  }
}

export default FirstAxisBlock;
