// import projects from '../data/projects.json';
import deliverables from '../data/deliverables.json';

// const json = projects;
const json = deliverables;

export const values = json[1];

const columns = json[0];

export const isValidColumn = param =>
  columns.map(column => column.title).includes(param);

export const options = columns
  .filter(column => column.type !== 'number')
  .map(column => ({
    label: column.title,
    value: column.title,
  }));

export const numberLabels = columns
  .filter(column => column.type === 'number')
  .map(column => column.title);

export const dateLabels = columns
  .filter(column => column.type === 'date')
  .map(column => column.title);

export const optionsNumber = numberLabels.map(label => ({
  label,
  value: label,
}));

export const optionsCategory = columns
  .filter(column => column.type === 'category')
  .map(column => ({ label: column.title, value: column.title }));
