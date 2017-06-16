import { groupBy } from 'lodash';

// INPUT : a JSON and the label of the columns used as an abscissa
// OUTPUT : a list of {name: '', values: [...]} elements
// where each name corresponds to a value of the label (ex: Bike, Run-In and Swim Fast for the label Brand)
// and values regroups the elements of the JSON containing the associate label

const filterXAxis = (json, xAxis) => {
  const groupedBy = groupBy(json, element => element[xAxis]);
  const out = Object.keys(groupedBy).map(key => ({
    name: key,
    values: groupedBy[key],
  }));
  return out.filter(element => element.name !== 'undefined');
};

export default filterXAxis;
