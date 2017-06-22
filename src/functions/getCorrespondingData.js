// Functions
import filterXAxis from '../functions/filterXAxis';
import compareData from '../functions/compareData';
import countYAxis from '../functions/countYAxis';
import sumYAxis from '../functions/sumYAxis';
import meanYAxis from '../functions/meanYAxis';

// data should be a list of {name: string, value: number} elements
// with name being the label (X axis) and value the value (Y axis)

export default (data, YSelected, XSelected, functionSelected) => {
  const [newData, values] = compareData(filterXAxis(data, XSelected), '');
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
