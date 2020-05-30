import React, { Component } from "react";
import http from "./../services/http";
import config from "./../config/appConfig.json";
import "./covidDetails.css";
import DashBoardCard from "./dashBoardCard";
import TableHead from "./tableHead";
import Search from "./search";
import TableBody from "../common/tableBody";
import util from "./../utils/filter";

class CovidDetails extends Component {
  state = {
    statewiseDetails: [],
    totalCases: {},
    searchUserInput: "",
    property: [
      { id: 1, name: "confirmed", color: "red" },
      { id: 2, name: "active", color: "blue" },
      { id: 3, name: "recovered", color: "green" },
      { id: 4, name: "deaths", color: "grey" },
    ],
  };

  async componentDidMount() {
    const { data } = await http.getData(config.GET_COVID_STATE_WISE_URL);
    const statewiseDetails = data.statewise;
    const totalCases = {
      ...statewiseDetails.find((data) => data.state == "Total"),
    };
    this.setState({ statewiseDetails, totalCases });
  }

  handleSelectedState = (data) => {
    this.props.history.push({
      pathname: `/covid/india/state/${data.state}/details`,
      state: { ...data },
    });
  };

  handleSearchInput = (e) => {
    this.setState({ searchUserInput: e.target.value });
  };

  render() {
    const {
      statewiseDetails,
      totalCases,
      property,
      searchUserInput,
    } = this.state;
    const tableProperties = [
      { id: 1, name: "State", path: "state" },
      { id: 2, name: "Confirmed/Total", path: "confirmed" },
      { id: 3, name: "Active", path: "active" },
      { id: 4, name: "Recovered", path: "recovered" },
      { id: 5, name: "Deceased", path: "deaths" },
    ];
    let covidDetails = [
      ...statewiseDetails.filter((data) => data.state != "Total"),
    ];
    let filteredResult = util.filterBasedOnUserInput(
      covidDetails,
      searchUserInput,
      "state"
    );
    const placeholder = "Search a state...";
    return (
      <div className="covid-details-container">
        <Search
          handleChange={this.handleSearchInput}
          searchInputValue={searchUserInput}
          placeholder={placeholder}
        />
        <DashBoardCard total={totalCases} properties={property} />
        <div className="table-responsive">
          <table className="table table-bordered">
            <TableHead properties={tableProperties} />
            <TableBody
              bodyData={filteredResult}
              properties={tableProperties}
              onClick={this.handleSelectedState}
            />
          </table>
        </div>
      </div>
    );
  }
}

export default CovidDetails;
