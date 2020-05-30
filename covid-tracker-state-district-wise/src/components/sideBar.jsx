import React, { Component } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

class SideBar extends Component {
  getClassName = (tab, selectedTab) => {
    if (tab.id == selectedTab.id) {
      return "list-group-item item active";
    }
    return "list-group-item item";
  };
  render() {
    const { tabHeading, tabs, selectedTab, onSelectedTab } = this.props;
    return (
      <div className=" list-group">
        <ul>
          <li className="list-group-item item heading">{tabHeading}</li>
          {tabs.map((tab) => (
            <Link to={tab.routeDetails} key={tab.id}>
              <li
                className={this.getClassName(tab, selectedTab)}
                key={tab.id}
                onClick={() => onSelectedTab(tab)}
              >
                {tab.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default SideBar;
