import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navBar";
import SideBar from "./components/sideBar";
import DistrictDetails from "./components/districtDetails";
import CovidDetails from "./components/covidDetails";
import "./App.css";
import CovidDistrictDetails from "./components/covidDistrictDetails";
import NotFound from "./components/notFound";

class App extends Component {
  state = {
    selectedTab: { id: 1, name: "State" },
  };

  handleSelectedTab = (selectedTab) => {
    this.setState({ selectedTab });
  };

  render() {
    const { selectedTab } = this.state;
    const tabs = [
      { id: "1", name: "State", routeDetails: "/covid/india/state" },
      { id: "2", name: "District", routeDetails: "/covid/india/district" },
    ];
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <div className="sidebar-container">
            <SideBar
              tabs={tabs}
              tabHeading="Search By"
              selectedTab={selectedTab}
              onSelectedTab={this.handleSelectedTab}
            />
          </div>
          <div className="route-details-container">
            <Switch>
              <Route
                path="/covid/india/state/:name/details"
                render={(props) => <CovidDistrictDetails {...props} />}
              />
              <Route path="/covid/india/state" component={CovidDetails} />
              <Route path="/covid/india/district" component={DistrictDetails} />
              <Route path="/covid/india/notfound" component={NotFound} />
              <Redirect to="/covid/india/state" exact from="/" />
              <Redirect to="/covid/india/notfound" />
            </Switch>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
