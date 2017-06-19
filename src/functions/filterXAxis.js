import groupBy from 'lodash/groupBy';
import sortBy from 'lodash/sortBy';

import weekConverter from './weekConverter';

// INPUT : a JSON and the label of the columns used as an abscissa
// OUTPUT : a list of {name: '', values: [...]} elements
// where each name corresponds to a value of the label
// (ex: Bike, Run-In and Swim Fast for the label Brand)
// and values regroups the elements of the JSON containing the associate label

const filterXAxis = (json, xAxis) => {
  const groupedBy = groupBy(json, element => element[xAxis]);
  const out = Object.keys(groupedBy).map(key => ({
    name: key,
    values: groupedBy[key],
  }));
  if (xAxis === 'World availabilty date') {
    return sortBy(
      out
        .map((element) => {
          const newElement = { ...element };
          newElement.name = weekConverter(element.name);
          return newElement;
        })
        .filter(element => !isNaN(element.name)),
      ['name'],
    );
  }
  return out.filter(element => element.name !== 'undefined');
};

export default filterXAxis;
