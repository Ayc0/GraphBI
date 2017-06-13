import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  min-width: 200px;
  max-width: 300px;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1em;
  flex-grow: 1;
`;

export { Container, LeftColumn, RightColumn };
