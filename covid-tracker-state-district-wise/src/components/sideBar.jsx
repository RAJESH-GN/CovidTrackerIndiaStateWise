import React, { Component } from "react";
import "./sidebar.css";
class SideBar extends Component {
  state = {};
  render() {
    return (
      <div className="sidebar-container">
        <ul>
          <li className="item">Search By</li>
          <li className="item">State </li>
          <li className="item">District </li>
        </ul>
      </div>
    );
  }
}

export default SideBar;
