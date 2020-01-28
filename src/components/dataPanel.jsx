import React, { Component } from "react";
import DataRow from "./dataRow";
import uuid from "uuid";

class dataPanel extends Component {
  state = {
    testSuiteData: [{ field1: "value1", field2: "value2", field3: 0 }]
  };
  render() {
    return (
      <React.Fragment>
        {this.state.testSuiteData.map(data => (
          <DataRow key={uuid.v4()} data={data} />
        ))}
      </React.Fragment>
    );
  }
}

export default dataPanel;
