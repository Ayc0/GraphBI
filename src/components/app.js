import React from 'react';
import styled from 'styled-components';

import Block from './block';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1em;
  flex-grow: 1;
`;

export default () =>
  <Container>
    <LeftColumn>
      <Block>Hey !</Block>
      <Block>Hey !</Block>
      <Block>Hey !</Block>
    </LeftColumn>
    <RightColumn>
      <p>Yo</p>
      <p>Yo</p>
      <p>Yo</p>
      <p>Yo</p>
    </RightColumn>
  </Container>;
