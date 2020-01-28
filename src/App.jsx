import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import NavBar from "./components/navbar";
import Updater from "./components/updater";
import DataPanel from "./components/dataPanel";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <div className="container container-fluid">
          <div className="row">
            <div className="col-sm-2 col-md-2 col-2"></div>
            <div className="col-sm-8 col-md-8 col-8">
              <Updater></Updater>
              <DataPanel></DataPanel>
            </div>
            <div className="col-sm-2 col-md-2 col-2"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
