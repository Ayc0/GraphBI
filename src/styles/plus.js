import styled from 'styled-components';

export default styled.span`
  height: 26px;
  line-height: 26px;
  width: 26px;

  border-radius: 50%;
  background: #00a0ee;
  color: #fff;

  font-family: Times New Roman;
  font-weight: 200;
  font-size: 24px;
  text-align: center;

  transition: 0.25s ease-out;
  transform: rotate(-90deg) scale(0.5);

  :hover {
    background: #007aab;
    transform: rotate(0deg) scale(1);
    cursor: pointer;
  };
`;
