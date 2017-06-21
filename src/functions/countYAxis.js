// INPUT : JSON file and a name for the label (default 'count')
// OUTPUT : list containing {name: '', count: x} elements
// With key being the number of occurrences of 'name' in the JSON

const countYAxis = (json, key = 'count') =>
  json.map(element => ({
    name: element.name,
    [key]: element.values.length,
  }));

export default countYAxis;
