import React from "react";

import { Container, LeftColumn, RightColumn } from "../styles/layout";
import { Block, BlockTitle } from "../styles/block";

import Chart from "./chart";

export default () =>
  <Container>
    <LeftColumn>
      <Block>
        <BlockTitle>Hey!</BlockTitle>
        <p>Plop</p>
      </Block>
      <Block>Hey !</Block>
      <Block>Hey !</Block>
    </LeftColumn>
    <RightColumn>
      <Chart />
    </RightColumn>
  </Container>;
