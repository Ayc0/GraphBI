import sumBy from 'lodash/sumBy';
import meanBy from 'lodash/meanBy';

const findRightFunction = (func) => {
  switch (func) {
    case 'sum':
      return sumBy;
    case 'avg':
      return meanBy;
    default:
      return values => (values || []).length;
  }
};

export default (func, field, key) => {
  const rightFunction = findRightFunction(func);
  return rightFunction(field.values, (element) => {
    const elementInt = parseInt(element[key], 10);
    return isNaN(elementInt) ? 0 : elementInt;
  });
};
