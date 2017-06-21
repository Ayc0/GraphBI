import meanBy from 'lodash/meanBy';

// INPUT : a JSON that went through filterXAxis and one of the columns labels
// OUTPUT : a list the same length as the JSON input, with {'name': '', key: x}
// where name is the same as in the JSON input
// and x is the average of the value of the key (ex: average of revenues per brand)

/*
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
*/

const meanYAxis = (json, key) => {
  const out = [];
  json.forEach((field) => {
    out.push({
      name: field.name,
      [key]: meanBy(field.values, (element) => {
        const elementInt = parseInt(element[key], 10);
        return isNaN(elementInt) ? 0 : elementInt;
      }),
    });
  });
  return out;
};

export default meanYAxis;
