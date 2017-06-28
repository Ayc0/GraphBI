// Functions
import filterXAxis from '../functions/filterXAxis';
import compareData from '../functions/compareData';
import correspondingFunction from '../functions/correspondingFunction';
import composedFunction from '../functions/composedFunction';

// data should be a list of {name: string, value: number} elements
// with name being the label (X axis) and value the value (Y axis)

export default (
  {
    data,
    XSelected,
    compareBy,
    graphType,
    YSelected,
    functionSelected,
    YSelected2,
    functionSelected2,
    timelapse,
  },
  disabled = [],
) => {
  if (graphType === 'composed-chart') {
    const newData = filterXAxis(data, XSelected);
    return composedFunction(
      newData,
      YSelected,
      functionSelected,
      YSelected2,
      functionSelected2,
    );
  }
  const [newData, values] = compareData(
    filterXAxis(data, XSelected, timelapse),
    compareBy,
  );
  const out = [];
  const total = {};
  newData.forEach((field, index) => {
    out.push({
      name: field.name,
    });
    total[index] = 0;

    if (values.length === 1 && values[0] === 'values') {
      // si on n'a pas fait de compare, toutes les données sont sous le nom de 'values'
      out[index][XSelected] = correspondingFunction(
        functionSelected,
        field,
        YSelected,
        'values',
      );
      total[index] += out[index][XSelected];
    } else {
      // sinon, il y a plusieurs champs
      values.forEach((value) => {
        if (disabled.includes(value)) {
          // si le champ est désactivé
          out[index][value] = 0;
        } else {
          out[index][value] = correspondingFunction(
            functionSelected,
            field,
            YSelected,
            value,
          );
          total[index] += out[index][value];
        }
      });
    }

    if (graphType.includes('percent')) {
      values.forEach((value) => {
        out[index][value] = total[index] === 0
          ? 0
          : out[index][value] * 100 / total[index];
      });
    }
  });
  return out;
};
