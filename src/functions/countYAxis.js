// INPUT : JSON file
// OUTPUT : list containing {name: '', count: x} elements
// With 'count' being the number of occurrences of 'name' in the JSON

const countYAxis = (json) => {
  const out = [];
  json.forEach((field, id) => {
    out.push({ name: field.name });
    out[id].value = field.values.length;
  });
  return out;
};

export default countYAxis;
