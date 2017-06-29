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
  timelapse,
  disabled,
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
        timelapse={timelapse}
        disabled={disabled}
      />
    );
  }
  return <ErrorMessage />;
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
    if (
      nextProps.data !== this.props.data ||
      nextProps.YSelected !== this.props.YSelected ||
      nextProps.XSelected !== this.props.XSelected ||
      nextProps.functionSelected !== this.props.functionSelected ||
      nextProps.YSelected2 !== this.props.YSelected2 ||
      nextProps.functionSelected2 !== this.props.functionSelected2 ||
      nextProps.compareBy !== this.props.compareBy ||
      nextProps.timelapse !== this.props.timelapse ||
      ((nextProps.graphType === 'composed-chart' ||
        this.props.graphType === 'composed-chart' ||
        this.props.graphType.includes('percent') ||
        nextProps.graphType.includes('percent')) &&
        nextProps.graphType !== this.props.graphType)
    ) {
      this.setState({
        data: getCorrespondingData(nextProps),
        disabled: [],
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(
      'state',
      btoa(
        JSON.stringify({
          date: Date.now(),
          state: {
            XSelected: nextProps.XSelected,
            YSelected: nextProps.YSelected,
            YSelected2: nextProps.YSelected2,
            compareBy: nextProps.compareBy,
            functionSelected: nextProps.functionSelected,
            functionSelected2: nextProps.functionSelected2,
            graphType: nextProps.graphType,
            timelapse: nextProps.timelapse,
            disabled: nextState.disabled,
          },
        }),
      ),
    );
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
    setTimeout(
      () =>
        this.setState(() => ({
          data: getCorrespondingData(this.props, disabled),
          disabled,
        })),
      100,
    );
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
          )}
        </GraphWrapper>
      );
    }
    return <ErrorMessage info={(this.state.data[0] || { value: 'unknown' }).value} />;
  }
}

export default RenderGraph;
