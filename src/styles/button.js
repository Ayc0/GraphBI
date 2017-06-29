import styled from 'styled-components';

export default styled.button`
  background-color: #${({ color }) => (color === 'primary' ? '007aab' : '')}${({
  color,
}) => (color === 'secondary' ? '808080' : '')};
  color: #fff;
  outline: none;
  border: solid 1px #${({ color }) => (color === 'primary' ? '007aab' : '')}${({
  color,
}) => (color === 'secondary' ? '808080' : '')};
  flex-grow: 1;
  font-familty: 'Maven Pro';
  font-size: 14px;
  line-height: 25px;
  opacity: 0.65;
  :hover {
    cursor: pointer;
    opacity: 0.8;
  };
`;
