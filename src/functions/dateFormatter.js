const monthNumbers = number => (number > 9 ? number.toString() : `0${number.toString()}`);

export default (tick, timelapse) => {
  const date = new Date(tick * 1000);
  if (timelapse === 'month') {
    const month = monthNumbers(date.getMonth() + 1);
    const year = date.getFullYear();
    return year + month;
  }
  if (timelapse === 'year') {
    const year = date.getFullYear();
    return year;
  }
  return date.toLocaleDateString();
};
