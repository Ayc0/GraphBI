// Functions
import filterXAxis from '../functions/filterXAxis';
import compareData from '../functions/compareData';
import countYAxis from '../functions/countYAxis';
import sumYAxis from '../functions/sumYAxis';
import meanYAxis from '../functions/meanYAxis';
import composedFunction from '../functions/composedFunction';

// data should be a list of {name: string, value: number} elements
// with name being the label (X axis) and value the value (Y axis)

export default (
  data,
  XSelected,
  compareBy,
  graphType,
  YSelected,
  functionSelected,
  YSelected2,
  functionSelected2,
) => {
  if (graphType === 'composed-chart') {
    const newData = filterXAxis(data, XSelected);
    return composedFunction(newData, YSelected, functionSelected, YSelected2, functionSelected2);
  }
  const [newData, values] = compareData(filterXAxis(data, XSelected), compareBy);
  switch (functionSelected) {
    case 'sum':
      return sumYAxis(newData, YSelected, values);
    case 'number':
      return countYAxis(newData, values);
    case 'avg':
      return meanYAxis(newData, YSelected, values);
    default:
      return countYAxis(newData, values);
  }
};
