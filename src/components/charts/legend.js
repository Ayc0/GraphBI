import React from 'react';
import { Legend } from 'recharts';

export default (onClick = () => {}) =>
  (<Legend
    verticalAlign="top"
    iconType="circle"
    iconSize={12}
    height={28}
    onClick={e => onClick(e.value)}
  />);
