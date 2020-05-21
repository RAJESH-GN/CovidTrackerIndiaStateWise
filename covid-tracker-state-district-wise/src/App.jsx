import React, { Component } from "react";
import NavBar from "./components/navBar";
import SideBar from "./components/sideBar";
import CovidDetails from "./components/covidDetails";
import "./App.css";
class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container">
          <SideBar />
          <CovidDetails />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
