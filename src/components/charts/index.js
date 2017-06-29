// Graph icons
import pieChart from '../../images/pie-chart.svg';
import lineChart from '../../images/line-chart.svg';
import barsChart from '../../images/bars-chart.svg';
import areaChart from '../../images/area-chart.svg';
import composedChart from '../../images/composed-chart.svg';
import stackBarsChart from '../../images/stack-bars-chart.svg';
import multiBarsChart from '../../images/multi-bars-chart.svg';
import percentBarsChart from '../../images/percent-bars-chart.svg';
import stackAreaChart from '../../images/stack-area-chart.svg';
import percentAreaChart from '../../images/percent-area-chart.svg';

// Graph components
import PieChart from './piechart';
import AreaChart from './areachart';
import StackAreaChart from './stackareachart';
import BarChart from './barchart';
import StackBarChart from './stackbarchart';
import LineChart from './linechart';
import ComposedChart from './composedchart';
// import ErrorMessage from './errorchart';

const graphs = {
  pieChart: { src: pieChart, alt: 'pie-chart', component: PieChart },
  lineChart: { src: lineChart, alt: 'line-chart', component: LineChart },
  barsChart: { src: barsChart, alt: 'bar-chart', component: BarChart },
  areaChart: { src: areaChart, alt: 'area-chart', component: AreaChart },
  composedChart: {
    src: composedChart,
    alt: 'composed-chart',
    component: ComposedChart,
  },
  stackBarsChart: {
    src: stackBarsChart,
    alt: 'stack-bars-chart',
    component: StackBarChart,
  },
  percentBarsChart: {
    src: percentBarsChart,
    alt: 'percent-bars-chart',
    component: StackBarChart,
  },
  multiBarsChart: {
    src: multiBarsChart,
    alt: 'multi-bars-chart',
    component: BarChart,
  },
  stackAreaChart: {
    src: stackAreaChart,
    alt: 'stack-area-chart',
    component: StackAreaChart,
  },
  percentAreaChart: {
    src: percentAreaChart,
    alt: 'percent-area-chart',
    component: StackAreaChart,
  },
};

const categories = {
  pie: {
    name: 'pie',
    icon: pieChart,
    charts: {
      2: [graphs.pieChart],
      3: [],
    },
  },
  line: {
    name: 'line',
    icon: lineChart,
    charts: {
      2: [graphs.lineChart],
      3: [graphs.lineChart],
    },
  },
  bar: {
    name: 'bar',
    icon: barsChart,
    charts: {
      2: [graphs.barsChart],
      3: [graphs.multiBarsChart, graphs.stackBarsChart, graphs.percentBarsChart],
    },
  },
  area: {
    name: 'area',
    icon: stackAreaChart,
    charts: {
      2: [graphs.areaChart],
      3: [graphs.stackAreaChart, graphs.percentAreaChart],
    },
  },
  composed: {
    name: 'composed',
    icon: composedChart,
    charts: {
      2: [graphs.composedChart],
      3: [],
    },
  },
};

const findMaxDim = (chart) => {
  const category = (chart) ? chart.split('-')[0] : '';
  if (category in categories) {
    const numberOf3DGraphs = categories[category].charts[3].length;
    return (numberOf3DGraphs > 0) ? 3 : 2;
  }
  return 3;
};

export { graphs, categories, findMaxDim };
