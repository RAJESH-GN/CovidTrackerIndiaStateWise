import React, { Component } from "react";
import "./districtDetails.css";
import http from "./../services/http";
import DashBoardCard from "./dashBoardCard";
import Dropdown from "./dropDown";

class DistrictDetails extends Component {
  state = {
    stateNames: [],
    districtNames: [],
    selectedState: "",
    selectedDistrict: "",
    result: {},
    defaultValue: "",
    enableDashboard: false,
    dashboardProperty: [
      { id: 1, name: "confirmed", color: "red" },
      { id: 2, name: "active", color: "blue" },
      { id: 3, name: "recovered", color: "green" },
      { id: 4, name: "deceased", color: "grey" },
    ],
  };

  async componentDidMount() {
    const districtRawDetails = await http.getData(
      "https://api.covid19india.org/state_district_wise.json"
    );
    const stateNames = Object.keys(districtRawDetails.data);
    this.setState({ stateNames, districtRawDetails: districtRawDetails.data });
  }

  handleStateSelected = (e) => {
    const selectedState = e.target.value;
    this.setState({ selectedState, enableDashboard: false });
    this.enableDistrct();
    this.populateDistrict(selectedState);
  };

  handleDistrictSelected = (e) => {
    const selectedDistrict = e.target.value;
    this.setState({ selectedDistrict, enableDashboard: true });
    this.enableCovidDashboardDetails(selectedDistrict);
  };

  enableCovidDashboardDetails = (district) => {
    const { selectedState, districtRawDetails } = this.state;
    const result = districtRawDetails[selectedState]["districtData"][district];
    this.setState({ result });
  };

  populateDistrict = (state) => {
    const { districtRawDetails } = this.state;
    const districtNames = Object.keys(districtRawDetails[state].districtData);
    this.setState({ districtNames });
  };

  isEnabled = () => {
    const { selectedDistrict, selectedState } = this.state;
    if (selectedState != "" && selectedDistrict != "") {
      return;
    }
    return "disabled";
  };

  enableDistrct = () => {
    const { selectedState } = this.state;
    if (selectedState == "") {
      return "disabled";
    }
    return "";
  };

  render() {
    const {
      dashboardProperty,
      stateNames,
      districtNames,
      result,
      defaultValue,
    } = this.state;
    return (
      <div className="covid-details-container">
        <Dropdown
          className="states-dropdown"
          elementId="states"
          onChange={this.handleStateSelected}
          options={stateNames}
          label={"State"}
        />
        <Dropdown
          className={this.enableDistrct()}
          elementId="districts"
          onChange={this.handleDistrictSelected}
          options={districtNames}
          label="District"
        />
        <DashBoardCard
          total={result}
          properties={dashboardProperty}
          isEnabled={this.state.enableDashboard}
        >
          <h1>Label for Heading</h1>
        </DashBoardCard>
      </div>
    );
  }
}

export default DistrictDetails;
