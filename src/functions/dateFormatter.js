export default (tick) => {
  const date = new Date(tick);
  console.log(date);
  return date.toLocaleDateString();
};
