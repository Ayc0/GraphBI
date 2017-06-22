// Graph icons
import pieChart from '../../images/pie-chart.svg';
import lineChart from '../../images/line-chart.svg';
import barsChart from '../../images/bars-chart.svg';
import areaChart from '../../images/area-chart.svg';
import composedChart from '../../images/composed-chart.svg';
import stackBarsChart from '../../images/stack-bars-chart.svg';
import multiBarsChart from '../../images/multi-bars-chart.svg';
import stackAreaChart from '../../images/stack-area-chart.svg';

// Graph components
import PieChart from './piechart';
import AreaChart from './areachart';
import BarChart from './barchart';
import LineChart from './linechart';
import ComposedChart from './composedchart';

const graphs = {
  pieChart: { src: pieChart, alt: 'pie-chart', component: PieChart },
  lineChart: { src: lineChart, alt: 'line-chart', component: LineChart },
  barsChart: { src: barsChart, alt: 'bar-chart', component: BarChart },
  areaChart: { src: areaChart, alt: 'area-chart', component: AreaChart },
  composedChart: { src: composedChart, alt: 'composed-chart', component: ComposedChart },
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
    component: AreaChart,
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
      3: [],
    },
  },
  bar: {
    name: 'bar',
    icon: barsChart,
    charts: {
      2: [graphs.barsChart],
      3: [graphs.stackBarsChart, graphs.multiBarsChart],
    },
  },
  area: {
    name: 'area',
    icon: stackAreaChart,
    charts: {
      2: [graphs.areaChart],
      3: [graphs.stackAreaChart],
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

export { graphs, categories };
