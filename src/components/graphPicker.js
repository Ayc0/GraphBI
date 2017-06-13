import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import { Block, BlockTitle } from '../styles/block';

const options = [
  { value: 'Linear', label: 'Linear' },
  { value: 'PieChart', label: 'PieChart' },
];

class GraphPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_value: options[0],
    };
  }

  onSelectChange(e) {
    this.setState({ selected_value: e });
    this.props.onGraphTypeChange(e);
  }

  render() {
    return (
      <Block>
        <BlockTitle>Type of graph :</BlockTitle>
        <Select
          name="graph-type"
          clearable={false}
          value={this.state.selected_value}
          options={options}
          onChange={e => this.onSelectChange(e.label)}
        />
      </Block>
    );
  }
}

export default GraphPicker;
