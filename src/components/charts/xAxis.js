import React from 'react';
import { XAxis } from 'recharts';

import dateDisplayer from '../../functions/dateDisplayer';
import { numberLabels, dateLabels } from '../../data/';

const checkType = xAxis =>
  numberLabels.includes(xAxis) || dateLabels.includes(xAxis) ? 'number' : 'category';

const checkDomain = (xAxis, timelapse) => {
  if (numberLabels.includes(xAxis)) {
    return ['dataMin', 'dataMax'];
  }
  if (dateLabels.includes(xAxis)) {
    switch (timelapse) {
      case 'year': {
        const time = new Date(1971, 0, 1).getTime();
        return [`dataMin - ${time / 2}`, `dataMax + ${time / 2}`];
      }
      case 'semester': {
        const time = new Date(1970, 6, 1).getTime();
        return [`dataMin - ${time / 2}`, `dataMax + ${time / 2}`];
      }
      case 'trimester': {
        const time = new Date(1970, 4, 1).getTime();
        return [`dataMin - ${time / 2}`, `dataMax + ${time / 2}`];
      }
      case 'month': {
        const time = new Date(1970, 1, 1).getTime();
        return [`dataMin - ${time / 2}`, `dataMax + ${time / 2}`];
      }
      case 'week': {
        const time = new Date(1970, 0, 7).getTime();
        return [`dataMin - ${time / 2}`, `dataMax + ${time / 2}`];
      }
      case 'day': {
        const time = new Date(1970, 0, 2).getTime();
        return [`dataMin - ${time / 2}`, `dataMax + ${time / 2}`];
      }
      default: {
        return ['dataMin', 'dataMax'];
      }
    }
  }
  return null;
};

const checkTickFormater = (xAxis, timelapse) =>
  dateLabels.includes(xAxis) ? i => dateDisplayer(i, timelapse) : i => i;

export { checkType, checkDomain, checkTickFormater };

export default (xAxis, timelapse) => (
  <XAxis
    dataKey="name"
    type={checkType(xAxis)}
    domain={checkDomain(xAxis, timelapse)}
    tickFormatter={checkTickFormater(xAxis, timelapse)}
  />
  );
