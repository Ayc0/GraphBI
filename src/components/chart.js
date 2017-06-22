import React, { Component } from 'react';

// Charts
import Chart from './charts/areachart';
import PieChart from './charts/piechart';
import BarChart from './charts/barchart';
import SimpleLineChart from './charts/linechart';
import ComposedChart from './charts/composedchart';

import getCorrespondingData from '../functions/getCorrespondingData';

import GraphWrapper from '../styles/graphWrapper';

const getGraph = (graphType, data, XSelected, YSelected, YSelected2) => {
  switch (graphType) {
    case 'pie-chart':
      return (
        <PieChart data={data} XSelected={XSelected} YSelected={YSelected} />
      );
    case 'area-chart':
      return <Chart data={data} XSelected={XSelected} YSelected={YSelected} />;
    case 'bar-chart':
      return (
        <BarChart data={data} XSelected={XSelected} YSelected={YSelected} />
      );
    case 'line-chart':
      return (
        <SimpleLineChart
          data={data}
          XSelected={XSelected}
          YSelected={YSelected}
        />
      );
    case 'composed-chart':
      return (
        <ComposedChart
          data={data}
          XSelected={XSelected}
          YSelected={YSelected}
          YSelected2={YSelected2}
        />
      );
    default:
      // eslint-disable-next-line
      return <h2>Sorry, the chart selected isn't available yet</h2>;
  }
};

class RenderGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: getCorrespondingData(
        this.props.data,
        this.props.YSelected,
        this.props.XSelected,
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
      nextProps.compareBy !== this.props.compareBy
    ) {
      this.setState({
        data: getCorrespondingData(
          nextProps.data,
          nextProps.XSelected,
          nextProps.compareBy,
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
          this.props.YSelected2,
        )}
      </GraphWrapper>
    );
  }
}

export default RenderGraph;
