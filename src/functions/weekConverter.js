export default (string) => {
  if (!string) return -1;
  const [year, week] = string.split('W');
  const date = new Date(year, 0, 1 + (week - 1) * 7);
  // return date.toLocaleDateString();
  return date.getTime();
};
