import React, { Component } from "react";

import Select from "react-select";
import "react-select/dist/react-select.css";

import { Container, LeftColumn, RightColumn } from "../styles/layout";
import GraphTypeBlock from "./graph-type-block";
import FirstAxisBlock from "./first-axis-block";
import SecondAxisBlock from "./second-axis-block";

import json from "../data/projects.json";

import Chart from "./chart";

import filterXAxis from "../functions/filterXAxis";
import sumYAxis from "../functions/sumYAxis";
import meanYAxis from "../functions/meanYAxis";

const values = json[1];

const options = json[0].map(column => ({
  label: column.title,
  value: column.title
}));

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options,
      Y_selected_value: [],
      X_selected_value: options[1]
    };
  }

  onFirstAxisChange(e) {
    this.setState({ Y_selected_value: e });
  }

  onSecondAxisChange(e) {
    this.setState({ X_selected_value: e });
  }

  render() {
    return (
      <Container>
        <LeftColumn>
          <GraphTypeBlock />
          <FirstAxisBlock
            options={options}
            onFirstAxisChange={e => this.onFirstAxisChange(e)}
          />
          <SecondAxisBlock
            options={options}
            onSecondAxisChange={e => this.onSecondAxisChange(e)}
          />
        </LeftColumn>
        <RightColumn>
          <Chart
            data={meanYAxis(
              filterXAxis(values, this.state.X_selected_value),
              this.state.Y_selected_value.map(option => option.label)
            )}
          />
        </RightColumn>
      </Container>
    );
  }
}
