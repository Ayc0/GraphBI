export default (tick, timelapse) => {
  const date = new Date(tick * 1000);
  if (timelapse === 'month') {
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth());
    return firstDayOfMonth.getTime();
  }
  if (timelapse === 'year') {
    const firstDayOfYear = new Date(date.getFullYear(), 0);
    return firstDayOfYear.getTime();
  }
  return tick;
};
