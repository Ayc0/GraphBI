import correspondingFunction from '../functions/correspondingFunction';

export default (data, YSelected1, function1, YSelected2, function2) => {
  const label1 = function1 === 'number' ? 'number' : `${function1}_${YSelected1}`;
  const label2 = function2 === 'number' ? 'number' : `${function2}_${YSelected2}`;
  const out = [];
  data.forEach((field, index) => {
    out.push({
      name: field.name,
    });
    out[index][label1] = correspondingFunction(function1, field, YSelected1);
    out[index][label2] = correspondingFunction(function2, field, YSelected2);
  });
  return out;
};
