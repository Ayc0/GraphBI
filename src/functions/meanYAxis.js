import { meanBy } from 'lodash';

const meanYAxis = (json, keys) => {
  const out = [];
  json.forEach((field, id) => {
    out.push({ name: field.name });
    keys.forEach((key) => {
      out[id][key] = meanBy(field.values, (element) => {
        const elementInt = parseInt(element[key], 10);
        return isNaN(elementInt) ? 0 : elementInt;
      });
    });
  });
  return out;
};

export default meanYAxis;
