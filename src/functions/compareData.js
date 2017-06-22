import groupBy from 'lodash/groupBy';

export default (data, category) => {
  if (category === '') {
    return [data, ['values']];
  }
  const groupedBy = data.map((element) => {
    const out = groupBy(element.values, value => value[category]);
    out.name = element.name;
    return out;
  });
  const labels = Object.keys(groupedBy[0] || []).filter(key => key !== 'name');
  groupedBy.name = data.name;
  return [groupedBy, labels];
};
