import json from '../data/deliverables.json';

export const values = json[1];

export const options = json[0].map(column => ({
  label: column.title,
  value: column.title,
}));

export const numberLabels = json[0]
  .filter(column => column.type === 'number')
  .map(column => column.title);

export const optionsNumber = numberLabels.map(label => ({
  label,
  value: label,
}));

export const optionsCategory = json[0]
  .filter(column => column.type === 'category')
  .map(column => ({ label: column.title, value: column.title }));
