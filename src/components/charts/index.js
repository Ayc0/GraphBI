// Graph icons
import pieChart from '../../images/pie-chart.svg';
import lineChart from '../../images/line-chart.svg';
import barsChart from '../../images/bars-chart.svg';
import areaChart from '../../images/area-chart.svg';
import stackBarsChart from '../../images/stack-bars-chart.svg';
import multiBarsChart from '../../images/multi-bars-chart.svg';
import stackAreaChart from '../../images/stack-area-chart.svg';

// Graph components
import PieChart from './piechart';
import AreaChart from './areachart';

const graphs = {
  pieChart: { src: pieChart, alt: 'pie-chart', component: PieChart },
  lineChart: { src: lineChart, alt: 'line-chart', component: () => {} },
  barsChart: { src: barsChart, alt: 'bars-chart', component: () => {} },
  areaChart: { src: areaChart, alt: 'area-chart', component: AreaChart },
  stackBarsChart: {
    src: stackBarsChart,
    alt: 'stack-bars-chart',
    component: () => {},
  },
  multiBarsChart: {
    src: multiBarsChart,
    alt: 'multi-bars-chart',
    component: () => {},
  },
  stackAreaChart: {
    src: stackAreaChart,
    alt: 'stack-area-chart',
    component: () => {},
  },
};

const categories = {
  '1D': [graphs.pieChart],
  '2D': [graphs.lineChart, graphs.barsChart, graphs.areaChart],
  '3D': [graphs.stackBarsChart, graphs.multiBarsChart, graphs.stackAreaChart],
};

export { graphs, categories };
