import React from 'react';
import { Legend } from 'recharts';

const onClick = (label) => {
  const event = new CustomEvent('onToggleLegend', { detail: label });
  window.dispatchEvent(event);
};

export default (
  <Legend
    verticalAlign="top"
    iconType="circle"
    iconSize={12}
    height={28}
    onClick={e => onClick(e.value)}
  />
);
