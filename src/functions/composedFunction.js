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

export default (data, YSelected1, function1, YSelected2, function2) => {
  const label1 = function1 === 'number' ? 'number' : `${function1}_${YSelected1}`;
  const label2 = function2 === 'number' ? 'number' : `${function2}_${YSelected2}`;
  const out = [];
  const func1 = findRightFunction(function1);
  const func2 = findRightFunction(function2);
  data.forEach((field, index) => {
    out.push({
      name: field.name,
    });
    out[index][label1] = func1(field.values, (element) => {
      const elementInt = parseInt(element[YSelected1], 10);
      return isNaN(elementInt) ? 0 : elementInt;
    });
    out[index][label2] = func2(field.values, (element) => {
      const elementInt = parseInt(element[YSelected1], 10);
      return isNaN(elementInt) ? 0 : elementInt;
    });
  });
  return out;
};
