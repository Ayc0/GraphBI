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

    const defaultCategory = categories[Object.keys(categories)[0]];

    this.state = {
      selectedCategory: defaultCategory.name,
      selectedValue: defaultCategory.charts[this.props.nbOfDim][0].alt,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.nbOfDim !== this.props.nbOfDim) {
      const alt = (categories[this.state.selectedCategory].charts[
        nextProps.nbOfDim
      ][0] || {}).alt;
      this.setState({
        selectedValue: alt,
      });
      this.props.onGraphTypeChange(alt);
    }
  }

  onSelect = (event) => {
    const alt = event.target.alt;
    this.setState({ selectedValue: alt });
    this.props.onGraphTypeChange(alt);
  };

  onCategorySelect = (event) => {
    const alt = event.target.alt;
    this.setState({ selectedCategory: alt });
  };

  render() {
    return (
      <Block>
        <BlockTitle>Graph type :</BlockTitle>
        <Line>
          {Object.keys(categories).map(category =>
            (<Graph
              key={categories[category].name}
              src={categories[category].icon}
              alt={categories[category].name}
              onClick={this.onCategorySelect}
              active={this.state.selectedCategory}
            />),
          )}
        </Line>
        <Line>
          {categories[this.state.selectedCategory].charts[
            this.props.nbOfDim
          ].map(chart =>
            (<Graph
              key={chart.alt}
              src={chart.src}
              alt={chart.alt}
              onClick={this.onSelect}
              active={this.state.selectedValue}
            />),
          )}
        </Line>
      </Block>
    );
  }
}

GraphPicker.defaultProps = {
  onGraphTypeChange: () => {},
  nbOfDim: 2,
};

export default GraphPicker;
