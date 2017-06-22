import React from 'react';
import { XAxis } from 'recharts';

import dateFormatter from '../../functions/dateFormatter';
import { numberLabels } from '../../data/';

const checkType = xAxis =>
  numberLabels.includes(xAxis) || xAxis === 'World availabilty date'
    ? 'number'
    : 'category';

const checkDomain = xAxis =>
  numberLabels.includes(xAxis) || xAxis === 'World availabilty date'
    ? ['dataMin', 'dataMax']
    : null;

const checkTickFormater = xAxis =>
  xAxis === 'World availabilty date' ? dateFormatter : i => i;

export { checkType, checkDomain, checkTickFormater };

export default xAxis =>
  (<XAxis
    dataKey="name"
    type={checkType(xAxis)}
    domain={checkDomain(xAxis)}
    tickFormatter={checkTickFormater(xAxis)}
  />);
