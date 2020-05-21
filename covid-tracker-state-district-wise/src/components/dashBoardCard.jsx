import React, { Component } from "react";
import "./dashBoardCard.css";
class DashBoardCard extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.props.properties.map((property) => (
          <div className="dashboard-card-container">
            <p
              className="dashboard-text"
              style={{ color: `${property.color}` }}
            >
              {property.name}
            </p>
            <p className="dashboard-count">{this.props.total[property.name]}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default DashBoardCard;
