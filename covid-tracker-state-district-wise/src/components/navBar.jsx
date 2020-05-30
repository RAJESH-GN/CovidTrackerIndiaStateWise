import React, { Component } from "react";
import "./navBar.css";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">
        {" "}
        Covid India Tracker
        <img
          className="corona-img"
          src="https://cdn.pixabay.com/photo/2020/04/10/08/42/coronavirus-5024649_960_720.png"
          alt=""
        />
      </span>
    </nav>
  );
};

export default NavBar;
