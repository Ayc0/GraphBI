import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Line = Row.extend`
  border-bottom: 1px dashed rgb(204, 204, 204);
  flex-wrap: wrap;
  :last-child {
    border-bottom: 0;
  };
`;

const Container = Row.extend`
  min-height: 90vh;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  min-width: 200px;
  max-width: 300px;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1em;
  flex-grow: 1;
`;

export { Container, LeftColumn, RightColumn, Row, Line };
