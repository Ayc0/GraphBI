import React, { PureComponent } from 'react';

import { Line } from '../styles/layout';
import { Block, BlockTitle } from '../styles/block';
import Img from '../styles/img';

// Graph types
import { categories, findMaxDim } from './charts/';

const Graph = ({ src, onClick, active, alt }) =>
  <Img src={src} alt={alt} onClick={onClick} active={active === alt} />;

class GraphPicker extends PureComponent {
  constructor(props) {
    super(props);

    const defaultCategory = categories[Object.keys(categories)[0]];

    this.state = {
      selectedCategory: defaultCategory.name,
      selectedValue: (defaultCategory.charts[this.props.nbOfDim][0] || {}).alt,
    };
  }

  componentWillMount() {
    this.props.onGraphTypeChange(this.state.selectedValue);
  }

  componentDidMount() {
    window.addEventListener('onDataLoad', this.onDataLoad);
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.nbOfDim !== this.props.nbOfDim &&
      nextProps.selectedCategory !== this.props.selectedCategory
    ) {
      const alt = (categories[this.state.selectedCategory].charts[
        nextProps.nbOfDim
      ][0] || {}).alt;
      this.onSelectGraph(alt);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('onDataLoad', this.onDataLoad);
  }

  onDataLoad = (event) => {
    const { graphType, compareBy } = event.detail;
    let selectedCategory = '';
    if (findMaxDim(graphType) === 2 || compareBy === '') {
      selectedCategory = Object.values(categories).filter(category =>
        category.charts[2].map(chart => chart.alt).includes(graphType),
      )[0].name;
    } else {
      selectedCategory = (Object.values(categories).filter(category =>
        category.charts[3].map(chart => chart.alt).includes(graphType),
      )[0] || {}).name;
    }
    this.setState(
      () => ({ selectedCategory }),
      () => this.onSelectGraph(graphType),
    );
  };

  onSelectGraph = (alt) => {
    this.setState({ selectedValue: alt });
    this.props.onGraphTypeChange(alt);
  };

  onSelect = (event) => {
    const alt = event.target.alt;
    this.onSelectGraph(alt);
  };

  onCategorySelect = (event) => {
    const alt = event.target.alt;
    this.setState({
      selectedCategory: alt,
    });
    const graphAlt = (categories[alt].charts[this.props.nbOfDim][0] || {}).alt;
    if (graphAlt !== undefined) {
      this.onSelectGraph(graphAlt);
    } else {
      this.onSelectGraph(`${alt}-chart`);
    }
  };

  render() {
    return (
      <Block>
        <BlockTitle>Graph type :</BlockTitle>
        <Line>
          {Object.values(categories).map(category =>
            (<Graph
              key={category.name}
              src={category.icon}
              alt={category.name}
              onClick={this.onCategorySelect}
              active={this.state.selectedCategory}
            />),
          )}
        </Line>
        <Line>
          {categories[this.state.selectedCategory]
            ? categories[this.state.selectedCategory].charts[
                this.props.nbOfDim
              ].map(chart =>
                (<Graph
                  key={chart.alt}
                  src={chart.src}
                  alt={chart.alt}
                  onClick={this.onSelect}
                  active={this.state.selectedValue}
                />),
              )
            : null}
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
