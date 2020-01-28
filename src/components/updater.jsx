import React, { Component } from "react";

class Updater extends Component {
  render() {
    return (
      <form className="form-inline">
        <h5 className="m-1">Search here: </h5>
        <input
          className="form-control m-2"
          placeholder="Enter Field #1"
        ></input>
        <input
          className="form-control m-2"
          placeholder="Enter Field #2"
        ></input>
      </form>
    );
  }
}

export default Updater;
