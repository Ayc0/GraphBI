import React from 'react';

import Fa from 'react-fontawesome';

import { Block } from '../styles/block';

export default ({ active, onChangeBrush }) =>
  (<span style={{ alignSelf: 'flex-end' }}>
    <Block onClick={onChangeBrush}>
      {active ? <Fa name="search-minus" /> : <Fa name="search-plus" />}
    </Block>
  </span>);
