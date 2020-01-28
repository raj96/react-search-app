import React, { Component } from "react";

class dataRow extends Component {
  render() {
    const { field1, field2, field3 } = this.props.data;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-4 col-sm-4 col-md-4">{field1}</div>
          <div className="col-4 col-sm-4 col-md-4">{field2}</div>
          <div className="col-4 col-sm-4 col-md-4">{field3}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default dataRow;
