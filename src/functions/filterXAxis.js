import { groupBy } from 'lodash';

const filterXAxis = (json, xAxis) => {
  const groupedBy = groupBy(json, element => element[xAxis]);
  return Object.keys(groupedBy).map(key => ({
    name: key,
    values: groupedBy[key],
  }));
};

export default filterXAxis;
