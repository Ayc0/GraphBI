import React from 'react';

import { Container, LeftColumn, RightColumn } from '../styles/layout';
import { Block, BlockTitle } from '../styles/block';

import json from '../data/projects.json';

import Chart from './chart';

import filterXAxis from '../functions/filterXAxis';
import sumYAxis from '../functions/sumYAxis';

console.log(json);

// const columns = json[0];
const values = json[1];

// function getBrandAndRevenue(value) {
//   const Brand = value.Brand ? value.Brand : 'None';
//   const Revenue = value['Revenues (k€)'] ? value['Revenues (k€)'] : 0;
//   return [Brand, Revenue];
// }

// function getRevenuePerBrand(array) {
//   const brandAndRevenue = array.map(getBrandAndRevenue);
//   const revenuePerBrand = {};
//   brandAndRevenue.forEach((item) => {
//     revenuePerBrand[item[0]] = revenuePerBrand[item[0]]
//       ? item[1] + revenuePerBrand[item[0]]
//       : item[1];
//   });
//   // console.log(revenuePerBrand);
//   return revenuePerBrand;
// }

const first = filterXAxis(values, 'Brand');

const data = sumYAxis(first, ['Latitude', 'Longitude']);

console.log(data);

export default () =>
  (<Container>
    <LeftColumn>
      <Block>
        <BlockTitle>Y Axis :</BlockTitle>
        <p>Sum of Revenue</p>
      </Block>
      <Block>
        <BlockTitle>X Axis :</BlockTitle>
        <p>by Brand</p>
      </Block>
      <Block>
        <BlockTitle>Type of graph :</BlockTitle>
        <p>Linear</p>
      </Block>
    </LeftColumn>
    <RightColumn>
      <Chart data={data} />
    </RightColumn>
  </Container>);
