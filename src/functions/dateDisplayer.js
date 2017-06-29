const monthNumbers = number => (number > 9 ? number.toString() : `0${number.toString()}`);
const numberAdj = (i) => {
  const j = i % 10;
  const k = i % 100;
  if (j === 1 && k !== 11) {
    return 'st';
  }
  if (j === 2 && k !== 12) {
    return 'nd';
  }
  if (j === 3 && k !== 13) {
    return 'rd';
  }
  return 'th';
};

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
      const semester = Math.floor((month - 1) / 6 + 1);
      return `${semester}${numberAdj(semester)} semester of ${year}`;
    }
    case 'trimester': {
      const trimester = Math.floor((month - 1) / 4 + 1);
      return `${trimester}${numberAdj(trimester)} trimester of ${year}`;
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
