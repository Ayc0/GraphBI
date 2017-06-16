import React from 'react';

// Charts
import Chart from './charts/areachart';
import SimplePieChart from './charts/piechart';

// Functions
import filterXAxis from '../functions/filterXAxis';
import countYAxis from '../functions/countYAxis';
import sumYAxis from '../functions/sumYAxis';
import meanYAxis from '../functions/meanYAxis';

// data should be a list of {name: string, value: number} elements
// with name being the label (X axis) and value the value (Y axis)

const getCorrespondingData = (data, Y_selected, X_selected, function_selected) => {
  const new_data = filterXAxis(data, X_selected);
  switch (function_selected) {
    case 'sum':
      return sumYAxis(new_data, Y_selected);
    case 'number':
      return countYAxis(new_data);
    case 'avg':
      return meanYAxis(new_data, Y_selected);
    default:
      return countYAxis(new_data);
  }
};

const getGraph = (graphType, data) => {
  switch (graphType) {
    case 'pie-chart':
      return <SimplePieChart data={data} />;
    case 'area-chart':
      return <Chart data={data} />;
    default:
      // eslint-disable-next-line
      return <h2>Sorry, the chart selected isn't available yet</h2>;
  }
};

const RenderGraph = ({ graphType, data, Y_selected, X_selected, function_selected }) => {
  const projetOrYValue = (function_selected === 'number') ? 'projects' : Y_selected;
  const newData = getCorrespondingData(data, Y_selected, X_selected, function_selected);
  const title = <h1>{function_selected} of {projetOrYValue} by {X_selected}</h1>;
  return (
    <div style={{width: '100%', height: '75vh'}}>
      {title}
      {getGraph(graphType, newData)}
    </div>
  );
};

export default RenderGraph;
