// INPUT : JSON file
// OUTPUT : list containing {name: '', count: x} elements
// With 'count' being the number of occurrences of 'name' in the JSON

const countYAxis = json =>
  json.map(element => ({
    name: element.name,
    value: element.values.length,
  }));

export default countYAxis;
