import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 576px) {
    flex-wrap: wrap;
  }
  width: 100%;
`;

const Line = Row.extend`
  border-bottom: 1px dashed rgb(204, 204, 204);
  :last-child {
    border-bottom: 0;
  }
`;

const Container = Row.extend`min-height: 90vh;`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 576px) {
    width: 35%;
    max-width: 300px;
  }
  @media (max-width: 576px) {
    width: 100%;
  }
  min-width: 200px;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-left: 0.5em;
  @media (min-width: 576px) {
    padding-left: 2em;
  }
`;

export { Container, LeftColumn, RightColumn, Row, Line };
