import React, { Component } from "react";
import "./navBar.css";
const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-align-center">
        <h1 className="navbar-heading">COVID-19 INDIA TRACKER</h1>
        <span className="image-container">
          <img
            className="corona-img"
            src="https://cdn.pixabay.com/photo/2020/04/10/08/42/coronavirus-5024649_960_720.png"
            alt=""
          />
        </span>
      </div>
    </div>
  );
};

export default NavBar;
