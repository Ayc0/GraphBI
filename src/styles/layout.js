import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Container = Row;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  max-width: 300px;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1em;
  flex-grow: 1;
`;

export { Container, LeftColumn, RightColumn, Row };
