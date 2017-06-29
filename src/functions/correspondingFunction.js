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

export default (func, field, key, value = 'values') => {
  const rightFunction = findRightFunction(func);
  return rightFunction(field[value], (element) => {
    const elementInt = parseFloat(element[key]);
    return isNaN(elementInt) ? 0 : elementInt;
  });
};
