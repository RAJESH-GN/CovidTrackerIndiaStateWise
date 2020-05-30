import React, { Component } from "react";
import "./dashBoardCard.css";
class DashBoardCard extends Component {
  state = {};

  getClassName = () => {
    return "dashboard-card-container-wrapper " + this.props.isEnabled;
  };
  render() {
    return (
      <div className={this.getClassName()}>
        {this.props.properties.map((property) => (
          <div className="dashboard-card-container" key={property.id}>
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
