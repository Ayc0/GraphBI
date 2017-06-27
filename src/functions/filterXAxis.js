import groupBy from 'lodash/groupBy';
import sortBy from 'lodash/sortBy';

import weekConverter from './weekConverter';
import dateGroupBy from './dateGroupBy';

import { numberLabels, dateLabels } from '../data/';

// INPUT : a JSON and the label of the columns used as an abscissa
// OUTPUT : a list of {name: '', values: [...]} elements
// where each name corresponds to a value of the label
// (ex: Bike, Run-In and Swim Fast for the label Brand)
// and values regroups the elements of the JSON containing the associate label

const toNumber = (string) => {
  const nb = parseFloat(string);
  return isNaN(nb) ? 0 : nb;
};

const filterXAxis = (json, xAxis, timelapse) => {
  const groupedBy = dateLabels.includes(xAxis)
    ? groupBy(json, element => dateGroupBy(toNumber(element[xAxis]), timelapse))
    : groupBy(json, element => element[xAxis]);
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
  if (dateLabels.includes(xAxis)) {
    return sortBy(
      out.filter(element => element.name > 0).map(element => ({
        name: toNumber(element.name),
        values: element.values,
      })),
      ['name'],
    );
  }
  if (numberLabels.includes(xAxis)) {
    return sortBy(
      out.filter(element => element.name !== 'undefined').map(element => ({
        name: toNumber(element.name),
        values: element.values,
      })),
      ['name'],
    );
  }
  return out.filter(element => element.name !== 'undefined');
};

export default filterXAxis;
