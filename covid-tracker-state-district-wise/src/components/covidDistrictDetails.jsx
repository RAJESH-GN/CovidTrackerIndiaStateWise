import React, { Component } from "react";
import http from "../services/http";
import TableHead from "./tableHead";
import DashBoardCard from "./dashBoardCard";
import Search from "./search";
import util from "./../utils/filter";

class CovidDistrictDetails extends Component {
  state = {
    districtNames: [],
    districtDetails: {},
    searchUserInput: "",
    dashboardProperty: [
      { id: 1, name: "confirmed", color: "red" },
      { id: 2, name: "active", color: "blue" },
      { id: 3, name: "recovered", color: "green" },
      { id: 4, name: "deaths", color: "grey" },
    ],
  };

  async componentDidMount() {
    const response = await http.getData(
      "https://api.covid19india.org/state_district_wise.json"
    );
    const districtDetails =
      response.data[this.props.match.params.name].districtData;
    const districtNames = [...this.getDistrictNames(districtDetails)];
    this.setState({
      districtDetails,
      districtNames,
    });
  }

  getDistrictNames = (districtDetails) => {
    const districtNames = [...Object.keys(districtDetails)];
    return districtNames;
  };

  handleSearchInput = (e) => {
    this.setState({ searchUserInput: e.target.value });
  };

  render() {
    const tableProperties = [
      { id: 1, name: "District Name" },
      { id: 2, name: "Confirmed" },
      { id: 3, name: "Active" },
      { id: 4, name: "Recovered" },
      { id: 5, name: "Deceased" },
    ];
    const {
      districtDetails,
      districtNames,
      dashboardProperty,
      searchUserInput,
    } = this.state;

    let filteredDistrictResult = util.filterBasedOnUserInput(
      districtNames,
      searchUserInput
    );
    const placeholder = "Search a district...";
    return (
      <div className="covid-details-container">
        <Search
          handleChange={this.handleSearchInput}
          searchInputValue={searchUserInput}
          placeholder={placeholder}
        />
        <DashBoardCard
          total={this.props.location.state}
          properties={dashboardProperty}
        />
        <div className="table-container">
          <table className="table ">
            <TableHead properties={tableProperties} />
            <tbody>
              {filteredDistrictResult.map((name, index) => (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{districtDetails[name].confirmed}</td>
                  <td>{districtDetails[name].active}</td>
                  <td>{districtDetails[name].recovered}</td>
                  <td>{districtDetails[name].deceased}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default CovidDistrictDetails;
