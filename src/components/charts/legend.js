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
    wrapperStyle={{ paddingBottom: '12px' }}
    onClick={event => onClick(event.value)}
  />
);
