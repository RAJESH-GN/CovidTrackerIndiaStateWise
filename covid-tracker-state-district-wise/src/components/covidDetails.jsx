import React, { Component } from "react";
import http from "./../services/http";
import config from "./../config/appConfig.json";
import "./covidDetails.css";
import DashBoardCard from "./dashBoardCard";
class CovidDetails extends Component {
  state = {
    statewiseDetails: [],
    total: {},
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
    const total = { ...statewiseDetails.find((data) => data.state == "Total") };
    this.setState({ statewiseDetails, total });
  }

  render() {
    const { statewiseDetails, total, property } = this.state;
    let covidDetails = [
      ...statewiseDetails.filter((data) => data.state != "Total"),
    ];

    return (
      <div className="covid-details-container">
        <DashBoardCard total={total} properties={property} />
        <div className="table-container">
          <table className="table ">
            <thead>
              <tr>
                <th>State</th>
                <th>Confirmed/Total</th>
                <th>Active</th>
                <th>Recovered</th>
                <th>Deceased</th>
              </tr>
            </thead>
            <tbody>
              {covidDetails.map((data) => (
                <tr key={data.statecode}>
                  <td>{data.state}</td>
                  <td>{data.confirmed}</td>
                  <td>{data.active}</td>
                  <td>{data.recovered}</td>
                  <td>{data.deaths}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default CovidDetails;
