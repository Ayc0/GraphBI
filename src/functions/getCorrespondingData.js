// Functions
import filterXAxis from '../functions/filterXAxis';
import compareData from '../functions/compareData';
import correspondingFunction from '../functions/correspondingFunction';
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
  const out = [];
  newData.forEach((field, index) => {
    out.push({
      name: field.name,
    });
    values.forEach((value) => {
      out[index][value] = correspondingFunction(functionSelected, field, YSelected);
    });
  });
  return out;
};
