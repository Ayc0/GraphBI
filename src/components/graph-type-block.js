import React, { Component } from "react";

import { Block, BlockTitle } from "../styles/block";
import Select from "react-select";
import "react-select/dist/react-select.css";

const GraphTypeBlock = () => {
  return (
    <Block>
      <BlockTitle>Type of graph :</BlockTitle>
      <p>Linear</p>
    </Block>
  );
};

export default GraphTypeBlock;
