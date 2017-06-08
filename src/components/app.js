import React from 'react';

import { Container, LeftColumn, RightColumn } from '../styles/layout';
import { Block, BlockTitle } from '../styles/block';

import data from '../data/projects.json';

import Chart from './chart';

import filterXAxis from '../functions/filterXAxis';

console.log(data);

// const columns = data[0];
const values = data[1];

function getBrandAndRevenue(value) {
  const Brand = value.Brand ? value.Brand : 'None';
  const Revenue = value['Revenues (k€)'] ? value['Revenues (k€)'] : 0;
  return [Brand, Revenue];
}

function getRevenuePerBrand(array) {
  const brandAndRevenue = array.map(getBrandAndRevenue);
  const revenuePerBrand = {};
  brandAndRevenue.forEach((item) => {
    revenuePerBrand[item[0]] = revenuePerBrand[item[0]]
      ? item[1] + revenuePerBrand[item[0]]
      : item[1];
  });
  // console.log(revenuePerBrand);
  return revenuePerBrand;
}

console.log(filterXAxis(values, 'Brand'));

export default () =>
  (<Container>
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
  </Container>);
