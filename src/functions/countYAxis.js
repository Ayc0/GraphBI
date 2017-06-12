const countYAxis = (json) => {
  const out = [];
  json.forEach((field, id) => {
    out.push({ name: field.name });
    out[id].count = field.values.length;
  });
  return out;
};

export default countYAxis;
