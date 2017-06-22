import json from '../data/deliverables.json';

export const values = json[1];

const columns = json[0];

export const options = columns.map(column => ({
  label: column.title,
  value: column.title,
}));

export const numberLabels = columns
  .filter(column => column.type === 'number')
  .map(column => column.title);

export const optionsNumber = numberLabels.map(label => ({
  label,
  value: label,
}));

export const optionsCategory = columns
  .filter(column => column.type === 'category')
  .map(column => ({ label: column.title, value: column.title }));
