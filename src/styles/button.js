import styled from 'styled-components';

const primary = '00a0ee';
const secondary = '808080';

const colorSwitch = (color) => {
  if (color === 'primary') return primary;
  if (color === 'secondary') return secondary;
  return '';
};

export default styled.button`
  background-color: #${({ color }) => colorSwitch(color)};
  color: #fff;
  outline: none;
  border: solid 1px #${({ color }) => colorSwitch(color)};
  flex-grow: 1;
  font-familty: 'Maven Pro';
  font-size: 14px;
  line-height: 25px;
  opacity: 1;
  :hover {
    cursor: pointer;
    opacity: 0.8;
  };
`;
