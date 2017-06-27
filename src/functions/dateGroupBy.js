export default (tick, timelapse) => {
  const date = new Date(tick * 1000);
  switch (timelapse) {
    case 'year': {
      const firstDayOfYear = new Date(date.getFullYear(), 0);
      return firstDayOfYear.getTime();
    }
    case 'semester': {
      const firstDayOfSemester = new Date(date.getFullYear(), Math.floor(date.getMonth() / 6));
      return firstDayOfSemester.getTime();
    }
    case 'trimester': {
      const firstDayOfTrimester = new Date(date.getFullYear(), Math.floor(date.getMonth() / 4));
      return firstDayOfTrimester.getTime();
    }
    case 'month': {
      const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth());
      return firstDayOfMonth.getTime();
    }
    case 'week': {
      const diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
      const firstDayOfWeek = new Date(date.setDate(diff));
      return firstDayOfWeek.getTime();
    }
    default:
      return date.getTime();
  }
};
