import React, { Component } from 'react';

import { graphs, findMaxDim } from './charts/index';
import ErrorMessage from './charts/errorchart';

import getCorrespondingData from '../functions/getCorrespondingData';
import { convertDataToHash, convertDataToHashWithDate } from '../functions/convertDataToHash';

import GraphWrapper from '../styles/graphWrapper';

const getGraph = (
  graphType,
  data,
  XSelected,
  YSelected,
  functionSelected,
  YSelected2,
  functionSelected2,
  timelapse,
  disabled,
  brush,
) => {
  const out = Object.values(graphs).filter(({ alt }) => alt === graphType);
  if (out.length > 0) {
    const Graph = out[0].component;
    return (
      <Graph
        graphType={graphType}
        data={data}
        XSelected={XSelected}
        YSelected={YSelected}
        functionSelected={functionSelected}
        YSelected2={YSelected2}
        functionSelected2={functionSelected2}
        timelapse={timelapse}
        disabled={disabled}
        brush={brush}
      />
    );
  }
  return null;
};

class RenderGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: getCorrespondingData(this.props),
      disabled: [],
    };
  }

  componentDidMount() {
    window.addEventListener('onToggleLegend', this.onToggleLegend);
    window.addEventListener('onDataLoad', this.onDataLoad);

    const limitDay = 7;
    const limitTimestamp = limitDay * 1000; //* 24 * 3600 * 1000;
    const storedData = localStorage.getItem('state');
    if (storedData !== null) {
      const { date, state } = JSON.parse(atob(localStorage.getItem('state')));
      if (Date.now - date > limitTimestamp) {
        localStorage.removeItem('state');
      } else {
        const event = new CustomEvent('onDataLoad', { detail: state });

        window.dispatchEvent(event);
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    // Don't actualize data if the type of chart change without changing the dimension,
    // or if we go from percent to non percent
    const nextTypeOfChartSplit = nextProps.graphType.split('-');
    const actualTypeOfChartSplit = this.props.graphType.split('-');
    const nextTypeOfChart = nextTypeOfChartSplit[nextTypeOfChartSplit.length - 2];
    const actualTypeOfChart = actualTypeOfChartSplit[actualTypeOfChartSplit.length - 2];
    if (
      !(
        nextTypeOfChart !== actualTypeOfChart &&
        findMaxDim(nextProps.graphType) === findMaxDim(this.props.graphType) &&
        nextProps.graphType.includes('percent') === this.props.graphType.includes('percent')
      )
    ) {
      this.setState({
        data: getCorrespondingData(nextProps),
        disabled: [],
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    const datedHash = convertDataToHashWithDate(nextProps, nextState);
    const undatedHash = convertDataToHash(nextProps, nextState);
    const event = new CustomEvent('onGraphStateChange', {
      detail: undatedHash,
    });
    window.dispatchEvent(event);
    localStorage.setItem('state', datedHash);
  }

  componentWillUnmount() {
    window.removeEventListener('onToggleLegend', this.onToggleLegend);
    window.removeEventListener('onDataLoad', this.onDataLoad);
  }

  onToggleLegend = (event) => {
    const detail = event.detail;
    if (this.state.disabled.includes(detail)) {
      this.setState((prevState) => {
        const disabled = prevState.disabled.filter(element => element !== detail);
        return {
          data: getCorrespondingData(this.props, disabled),
          disabled,
        };
      });
    } else {
      this.setState((prevState) => {
        const disabled = [...prevState.disabled, detail];
        return {
          data: getCorrespondingData(this.props, disabled),
          disabled,
        };
      });
    }
  };

  onDataLoad = (event) => {
    const { disabled } = event.detail;
    this.setState(() => ({
      data: getCorrespondingData(this.props, disabled),
      disabled,
    }));
  };

  render() {
    if ((this.state.data[0] || { name: 'error' }).name !== 'error') {
      return (
        <GraphWrapper>
          {getGraph(
            this.props.graphType,
            this.state.data,
            this.props.XSelected,
            this.props.YSelected,
            this.props.functionSelected,
            this.props.YSelected2,
            this.props.functionSelected2,
            this.props.timelapse,
            this.state.disabled,
            this.props.brush,
          )}
        </GraphWrapper>
      );
    }
    if (this.state.data.length > 0) {
      return <ErrorMessage info={(this.state.data[0] || { value: 'unknown' }).value} />;
    }
    return <p>Loading...</p>;
  }
}

export default RenderGraph;
