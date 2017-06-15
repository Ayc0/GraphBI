import React, { PureComponent } from 'react';

import { Line } from '../styles/layout';
import { Block, BlockTitle } from '../styles/block';
import Img from '../styles/img';

// Graph types
import { categories } from './charts/';

const Graph = ({ src, onClick, active, alt }) =>
  <Img src={src} alt={alt} onClick={onClick} active={active === alt} />;

class GraphPicker extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: categories['1D'][0],
    };

    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(event) {
    const alt = event.target.alt;
    console.log('You selected', alt);
    this.setState({ selectedValue: alt });
    this.props.onGraphTypeChange(alt);
  }

  render() {
    return (
      <Block>
        <BlockTitle>Graph type :</BlockTitle>
        <Line>
          {categories['1D'].map(graph =>
            (<Graph
              key={graph.alt}
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
              key={graph.alt}
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
              key={graph.alt}
              src={graph.src}
              alt={graph.alt}
              onClick={this.onSelect}
              active={this.state.selectedValue}
            />),
          )}
        </Line>
      </Block>
    );
  }
}

export default GraphPicker;
