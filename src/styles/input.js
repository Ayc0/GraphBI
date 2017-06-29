import styled from 'styled-components';

export default styled.input`
  border: 1px solid #dddddd;
  border-radius: 0;
  :focus {
    border: 1px solid #f98400;
  };
  outline: none;
  width: calc(100% - 16px);
  font-family: 'Maven Pro';
  font-size: 12px;
  font-weight: bold;
  line-height: 34px;
  padding-left: 8px;
  padding-right: 8px;
`;
