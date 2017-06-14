import React from 'react';

// Charts
import Chart from './charts/areachart';
import SimplePieChart from './charts/piechart';

// Functions
import filterXAxis from '../functions/filterXAxis';
import countYAxis from '../functions/countYAxis';
// import sumYAxis from '../functions/sumYAxis';
// import meanYAxis from '../functions/meanYAxis';

const RenderGraph = ({ graph_type, data, Y_selected, X_selected }) => {
  switch (graph_type) {
    case 'pie-chart':
      return (
        <SimplePieChart
          data={countYAxis(filterXAxis(data, X_selected), Y_selected.map(option => option.label))}
        />
      );
      break;
    case 'area-chart':
      return (
        <Chart
          data={countYAxis(filterXAxis(data, X_selected), Y_selected.map(option => option.label))}
        />
      );
      break;
    default:
      return <h1>Sorry, the chart selected isn't available yet</h1>;
  }
};

export default RenderGraph;
