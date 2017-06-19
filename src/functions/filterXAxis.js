import groupBy from 'lodash/groupBy';
import sortBy from 'lodash/sortBy';

import weekConverter from './weekConverter';

// INPUT : a JSON and the label of the columns used as an abscissa
// OUTPUT : a list of {name: '', values: [...]} elements
// where each name corresponds to a value of the label
// (ex: Bike, Run-In and Swim Fast for the label Brand)
// and values regroups the elements of the JSON containing the associate label

const filterXAxis = (json, xAxis) => {
  if (xAxis === 'World availabilty date') {
    const newJson = json.map((element) => {
      const newElement = { ...element };
      newElement['World availabilty date'] = weekConverter(
        element['World availabilty date'],
      );
      return {
        name: newElement['World availabilty date'],
        values: [element],
      };
    });
    const out = sortBy(newJson.filter(element => element.name !== -1), [
      'name',
    ]);
    console.log(out);
    return out;
  }
  const groupedBy = groupBy(json, element => element[xAxis]);
  const out = Object.keys(groupedBy).map(key => ({
    name: key,
    values: groupedBy[key],
  }));
  return out.filter(element => element.name !== 'undefined');
};

export default filterXAxis;
