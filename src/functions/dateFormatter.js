export default (tick) => {
  const date = new Date(tick);
  return date.toLocaleDateString();
};
