import React from 'react';

// Charts
import Chart from './charts/areachart';
import SimplePieChart from './charts/piechart';
import SimpleBarChart from './charts/barchart';
import SimpleLineChart from './charts/linechart';
import ComposedChart from './charts/composedchart';

// Functions
import filterXAxis from '../functions/filterXAxis';
import countYAxis from '../functions/countYAxis';
import sumYAxis from '../functions/sumYAxis';
import meanYAxis from '../functions/meanYAxis';

// data should be a list of {name: string, value: number} elements
// with name being the label (X axis) and value the value (Y axis)

const getCorrespondingData = (data, YSelected, XSelected, functionSelected) => {
  const newData = filterXAxis(data, XSelected);
  switch (functionSelected) {
    case 'sum':
      return sumYAxis(newData, YSelected);
    case 'number':
      return countYAxis(newData);
    case 'avg':
      return meanYAxis(newData, YSelected);
    default:
      return countYAxis(newData);
  }
};

const getGraph = (graphType, data, XSelected, YSelected) => {
  console.log('chart', YSelected);
  switch (graphType) {
    case 'pie-chart':
      return (
        <SimplePieChart
          data={data}
          XSelected={XSelected}
          YSelected={YSelected}
        />
      );
    case 'area-chart':
      return <Chart data={data} XSelected={XSelected} YSelected={YSelected} />;
    case 'bar-chart':
      return (
        <SimpleBarChart
          data={data}
          XSelected={XSelected}
          YSelected={YSelected}
        />
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

const RenderGraph = ({
  graphType,
  data,
  YSelected,
  XSelected,
  functionSelected,
}) => {
  const projetOrYValue = functionSelected === 'number' ? 'projects' : YSelected;
  const newData = getCorrespondingData(
    data,
    YSelected,
    XSelected,
    functionSelected,
  );
  const title = <h1>{functionSelected} of {projetOrYValue} by {XSelected}</h1>;
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
      {title}
      {getGraph(graphType, newData, XSelected, YSelected)}
    </div>
  );
};

export default RenderGraph;
