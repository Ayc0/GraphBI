import React, { Component } from 'react';

// Charts
import Chart from './charts/areachart';
import PieChart from './charts/piechart';
import BarChart from './charts/barchart';
import SimpleLineChart from './charts/linechart';
import ComposedChart from './charts/composedchart';

import getCorrespondingData from '../functions/getCorrespondingData';

const getGraph = (graphType, data, XSelected, YSelected) => {
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
      ),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.YSelected !== this.props.YSelected ||
      nextProps.XSelected !== this.props.XSelected ||
      nextProps.data !== this.props.data ||
      nextProps.XSelected !== this.props.XSelected
    ) {
      this.setState({
        data: getCorrespondingData(
          nextProps.data,
          nextProps.YSelected,
          nextProps.XSelected,
          nextProps.functionSelected,
        ),
      });
    }
  }

  render() {
    const projetOrYValue = this.props.functionSelected === 'number'
      ? 'projects'
      : this.props.YSelected;

    return (
      <div
        style={{
          width: '100%',
          height: '75vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>
          {this.props.functionSelected} of {projetOrYValue} by
          {' '}{this.props.XSelected}
        </h1>
        {getGraph(
          this.props.graphType,
          this.state.data,
          this.props.XSelected,
          this.props.YSelected,
        )}
      </div>
    );
  }
}

export default RenderGraph;
