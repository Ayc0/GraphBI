import React from 'react';
import Select from 'react-select';

import { Block, BlockTitle } from '../styles/block';

const ComparePicker = ({ value, options, hide, onCompareChange }) => {
  if (hide === true) {
    return null;
  }
  return (
    <Block>
      <BlockTitle>Compare which data?</BlockTitle>
      <Select
        clearable={false}
        name="Compare which data?"
        value={value}
        options={[
          {
            label: 'none',
            value: '',
          },
          ...options,
        ]}
        onChange={event => onCompareChange(event.value)}
      />
    </Block>
  );
};

ComparePicker.defaultProps = {
  value: '',
  options: [],
  hide: false,
  onCompareChange: () => {},
};

export default ComparePicker;
