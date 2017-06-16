import { sumBy } from 'lodash';

// INPUT : a JSON that went through filterXAxis and a list of columns labels
// OUTPUT : a list the same length as the JSON input, with {'name': '', 'key1': x, 'key2': x, ...}
// where name is the same as in the JSON input
// and each key is the sum of the value of each key (ex: sum of revenues per brand)

const sumYAxis = (json, keys) => {
  const out = [];
  json.forEach((field, id) => {
    out.push({ name: field.name });
    keys.forEach((key) => {
      out[id][key] = sumBy(field.values, (element) => {
        const elementInt = parseInt(element[key], 10);
        return isNaN(elementInt) ? 0 : elementInt;
      });
    });
  });
  return out;
};

export default sumYAxis;
