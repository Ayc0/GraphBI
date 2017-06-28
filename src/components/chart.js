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

    const limitDay = 7;
    const limitTimestamp = limitDay * 1000; //* 24 * 3600 * 1000;
    const storedData = localStorage.getItem('state');
    if (storedData !== null) {
      const { date, state } = JSON.parse(atob(localStorage.getItem('state')));
      if (Date.now - date > limitTimestamp) {
        localStorage.removeItem('state');
      } else {
        const event = new CustomEvent('onDataLoad', { detail: state });
        console.log(state);
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
  }

  onToggleLegend = (event) => {
    const detail = event.detail;
    if (this.state.disabled.includes(detail)) {
      this.setState((prevState) => {
        const disabled = prevState.disabled.filter(
          element => element !== detail,
        );
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
          this.props.timelapse,
        )}
      </GraphWrapper>
    );
  }
}

export default RenderGraph;
