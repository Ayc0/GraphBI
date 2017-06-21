// INPUT : JSON file and a name for the label (default 'count')
// OUTPUT : list containing {name: '', count: x} elements
// With key being the number of occurrences of 'name' in the JSON

const countYAxis = (json, values = ['values']) =>
  json.map((element) => {
    const out = {
      name: element.name,
    };
    values.forEach((value) => {
      out[value] = element[value].length;
    });
    return out;
  });

export default countYAxis;
