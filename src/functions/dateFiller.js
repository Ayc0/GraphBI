const toNumber = (string) => {
  const nb = parseFloat(string);
  return isNaN(nb) ? 0 : nb;
};

export const fillAllYears = (groupedBy) => {
  const out = groupedBy;
  const years = Object.keys(groupedBy).filter(year => year !== '1970');
  const minYear = Math.min.apply(null, years);
  const maxYear = Math.max.apply(null, years);
  const missingYears = Array.from(
    new Array(maxYear - minYear + 1),
    (val, index) => minYear + index,
  ).filter(year => !years.includes(year.toString()));
  missingYears.forEach((year) => {
    out[year] = [];
  });
  return out;
};

export const fillAllMonths = (groupedBy) => {
  const out = groupedBy;
  const months = Object.keys(groupedBy).filter(year => !year.includes('1970'));
  const minDate = Math.min.apply(null, months).toString();
  const minMonth = toNumber(minDate.substring(4, 6));
  const minYear = toNumber(minDate.substring(0, 4));
  const maxDate = Math.max.apply(null, months).toString();
  const maxMonth = toNumber(maxDate.substring(4, 6));
  const maxYear = toNumber(maxDate.substring(0, 4));
  const years = Array.from(new Array(maxYear - minYear + 1), (val, index) => minYear + index);
  const missingMonths = [];
  years.forEach(year =>
    Array.from(new Array(12)).forEach((val, index) => {
      if ((index + 1 > minMonth || year > minYear) && (index + 1 < maxMonth || year < maxYear)) {
        const month = index > 8 ? (index + 1).toString() : `0${(index + 1).toString()}`;
        missingMonths.push(year + month);
      }
    }),
  );
  missingMonths.filter(month => !months.includes(month)).forEach(month => (out[month] = []));
  return out;
};
