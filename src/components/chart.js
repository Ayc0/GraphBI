import React, { Component } from 'react';

import { graphs } from './charts/index';
import ErrorMessage from './charts/errorchart';

import getCorrespondingData from '../functions/getCorrespondingData';

import GraphWrapper from '../styles/graphWrapper';

const getGraph = (
  graphType,
  data,
  XSelected,
  YSelected,
  functionSelected,
  YSelected2,
  functionSelected2,
) => {
  const out = Object.values(graphs).filter(({ alt }) => alt === graphType);
  if (out.length > 0) {
    const Graph = out[0].component;
    return (
      <Graph
        data={data}
        XSelected={XSelected}
        YSelected={YSelected}
        functionSelected={functionSelected}
        YSelected2={YSelected2}
        functionSelected2={functionSelected2}
      />
    );
  }
  return <ErrorMessage />;
};

class RenderGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: getCorrespondingData(
        this.props.data,
        this.props.YSelected,
        this.props.XSelected,
        this.props.graphType,
        this.props.functionSelected,
        this.props.YSelected2,
        this.props.functionSelected2,
      ),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.data !== this.props.data ||
      nextProps.YSelected !== this.props.YSelected ||
      nextProps.XSelected !== this.props.XSelected ||
      nextProps.functionSelected !== this.props.functionSelected ||
      nextProps.YSelected2 !== this.props.YSelected2 ||
      nextProps.functionSelected2 !== this.props.functionSelected2 ||
      nextProps.compareBy !== this.props.compareBy ||
      nextProps.graphType === 'composed-chart' ||
      this.props.graphType === 'composed-chart'
    ) {
      this.setState({
        data: getCorrespondingData(
          nextProps.data,
          nextProps.XSelected,
          nextProps.compareBy,
          nextProps.graphType,
          nextProps.YSelected,
          nextProps.functionSelected,
          nextProps.YSelected2,
          nextProps.functionSelected2,
        ),
      });
    }
  }

  render() {
    const projetOrYValue = this.props.functionSelected === 'number'
      ? 'projects'
      : this.props.YSelected;

    return (
      <GraphWrapper>
        <h1>
          {this.props.functionSelected} of {projetOrYValue} by
          {' '}{this.props.XSelected}
        </h1>
        {getGraph(
          this.props.graphType,
          this.state.data,
          this.props.XSelected,
          this.props.YSelected,
          this.props.functionSelected,
          this.props.YSelected2,
          this.props.functionSelected2,
        )}
      </GraphWrapper>
    );
  }
}

export default RenderGraph;
