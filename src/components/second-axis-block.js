import React, { Component } from "react";

import { Block, BlockTitle } from "../styles/block";
import Select from "react-select";
import "react-select/dist/react-select.css";

class SecondAxisBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_value: this.props.options[1]
    };
  }

  onSelectChange(e) {
    this.setState({ selected_value: e });
    this.props.onSecondAxisChange(e);
  }

  render() {
    return (
      <Block>
        <BlockTitle>X Axis :</BlockTitle>
        <p>by</p>
        <Select
          clearable={false}
          name="X-axis"
          value={this.state.selected_value}
          options={this.props.options}
          onChange={e => {
            this.onSelectChange(e.label);
          }}
        />
      </Block>
    );
  }
}

export default SecondAxisBlock;
