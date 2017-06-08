import React, { Component } from "react";

import { Container, LeftColumn, RightColumn } from "../styles/layout";
import { Block, BlockTitle } from "../styles/block";

import Chart from "./chart";

const data = require("../data/Projects.json");
const columns = data[0];
const values = data[1];

function getBrandAndRevenue(value) {
  let Brand = value.Brand ? value.Brand : 'None';
  let Revenue = value["Revenues (k€)"] ? value["Revenues (k€)"] : 0;
  return [Brand, Revenue]
}

function getRevenuePerBrand(array) {
  const BrandAndRevenue = array.map(getBrandAndRevenue);
  let RevenuePerBrand = {};
  for (let i=0 ; i < array.length ; i++) {
    let item = BrandAndRevenue[i];
    RevenuePerBrand[item[0]] = RevenuePerBrand[item[0]] ? item[1] + RevenuePerBrand[item[0]] : item[1]
  }
  console.log(RevenuePerBrand);
  return RevenuePerBrand
}

export default class App extends Component {
  render() {
    return (
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
          <Chart data={getRevenuePerBrand(values)} />
        </RightColumn>
      </Container>
    );
  }
}
