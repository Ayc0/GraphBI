import React, { Component } from 'react';

import { Line } from '../styles/layout';
import { Block, BlockTitle } from '../styles/block';
import Img from '../styles/img';

// Graph types
import { categories } from './charts/';

const Graph = ({ src, onClick, active, alt }) =>
  <Img src={src} alt={alt} onClick={onClick} active={active === alt} />;

class GraphPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: categories['1D'][0],
    };

    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(event) {
    const alt = event.target.alt;
    this.setState({ selectedValue: alt });
    // this.props.onGraphTypeChange(alt);
  }

  render() {
    return (
      <Block>
<<<<<<< HEAD
        <BlockTitle>Graph type :</BlockTitle>
        <Line>
          {categories['1D'].map(graph =>
            (<Graph
              src={graph.src}
              alt={graph.alt}
              onClick={this.onSelect}
              active={this.state.selectedValue}
            />),
          )}
        </Line>
        <Line>
          {categories['2D'].map(graph =>
            (<Graph
              src={graph.src}
              alt={graph.alt}
              onClick={this.onSelect}
              active={this.state.selectedValue}
            />),
          )}
        </Line>
        <Line>
          {categories['3D'].map(graph =>
            (<Graph
              src={graph.src}
              alt={graph.alt}
              onClick={this.onSelect}
              active={this.state.selectedValue}
            />),
          )}
        </Line>
=======
        <BlockTitle>Type of graph :</BlockTitle>
        <Select
          name="graph-type"
          clearable={false}
          value={this.state.selected_value}
          options={options}
          onChange={e => this.onSelectChange(e.label)}
        />
>>>>>>> 26deac5e2f9887ecba8baf717d55c2ac0cd6c86b
      </Block>
    );
  }
}

export default GraphPicker;
