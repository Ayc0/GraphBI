const monthNumbers = number => (number > 9 ? number.toString() : `0${number.toString()}`);
const numberAdj = number => (number < 4 ? ['st', 'nd', 'rd'][number - 1] : 'th');

const getISOWeekFromDate = (date) => {
  const onejan = new Date(date.getFullYear(), 0, 1);
  return Math.ceil(((date - onejan) / 86400000 + onejan.getDay() + 1) / 7);
};

export default (tick, timelapse) => {
  const date = new Date(parseInt(tick, 10));
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  switch (timelapse) {
    case 'year': {
      return year;
    }
    case 'semester': {
      return `${month}${numberAdj(month)} semester of ${year}`;
    }
    case 'trimester': {
      return `${month}${numberAdj(month)} trimester of ${year}`;
    }
    case 'month': {
      return `${monthNumbers(month)}/${year}`;
    }
    case 'week': {
      const ISOweek = getISOWeekFromDate(date);
      return `${ISOweek + numberAdj(ISOweek)} week of ${year}`;
    }
    default: {
      return date.toLocaleDateString();
    }
  }
};
