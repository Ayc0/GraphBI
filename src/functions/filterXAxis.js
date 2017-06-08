import _ from 'lodash';

const filterXAxis = (json, xAxis) => {
  const groupBy = _.groupBy(json, element => element[xAxis]);
  return Object.keys(groupBy).map(key => ({
    name: key,
    values: groupBy[key],
  }));
};

export default filterXAxis;
