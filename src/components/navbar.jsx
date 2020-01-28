import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
          <a className="navbar-brand" href="#">
            NavBar Header
          </a>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
