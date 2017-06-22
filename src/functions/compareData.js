import groupBy from 'lodash/groupBy';

export default (data, category) => {
  if (category === '') {
    return [data, ['values']];
  }
  const labels = new Set([]);
  const groupedBy = data.map((element) => {
    const out = groupBy(element.values, value => value[category]);
    delete out.undefined;
    Object.keys(out).forEach(key => labels.add(key));
    out.name = element.name;
    return out;
  });
  groupedBy.name = data.name;
  return [groupedBy, Array.from(labels)];
};
