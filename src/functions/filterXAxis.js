import { groupBy } from 'lodash';

const filterXAxis = (json, xAxis) => {
  const groupedBy = groupBy(json, element => element[xAxis]);
  const out = Object.keys(groupedBy).map(key => ({
    name: key,
    values: groupedBy[key],
  }));
  return out.filter(element => element.name !== 'undefined');
};

export default filterXAxis;
