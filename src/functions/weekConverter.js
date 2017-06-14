export default (string) => {
  const [year, week] = string.split('M');
  const date = new Date(year, 0, 1 + (week - 1) * 7);
  return date.getTime();
};
