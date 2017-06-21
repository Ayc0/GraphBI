// Functions
import filterXAxis from '../functions/filterXAxis';
import countYAxis from '../functions/countYAxis';
import sumYAxis from '../functions/sumYAxis';
import meanYAxis from '../functions/meanYAxis';

// data should be a list of {name: string, value: number} elements
// with name being the label (X axis) and value the value (Y axis)

export default (data, YSelected, XSelected, functionSelected) => {
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
