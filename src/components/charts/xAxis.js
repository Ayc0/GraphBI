import React from 'react';
import { XAxis } from 'recharts';

import dateDisplayer from '../../functions/dateDisplayer';
import { numberLabels, dateLabels } from '../../data/';

const checkType = xAxis =>
  numberLabels.includes(xAxis) || xAxis === 'World availabilty date' ? 'number' : 'category';

const checkDomain = xAxis =>
  numberLabels.includes(xAxis) || xAxis === 'World availabilty date'
    ? ['dataMin', 'dataMax']
    : null;

const checkTickFormater = (xAxis, timelapse) =>
  dateLabels.includes(xAxis) ? i => dateDisplayer(i, timelapse) : i => i;

export { checkType, checkDomain, checkTickFormater };

export default (xAxis, timelapse) => (
  <XAxis
    dataKey="name"
    type={checkType(xAxis)}
    domain={checkDomain(xAxis)}
    tickFormatter={checkTickFormater(xAxis, timelapse)}
  />
  );
