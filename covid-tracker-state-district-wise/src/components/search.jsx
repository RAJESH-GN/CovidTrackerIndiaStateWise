import React, { Component } from "react";
import "./search.css";
class Search extends Component {
  render() {
    return (
      <div>
        <div className="input-group input-group-lg search-input">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-lg">
              Search
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={this.props.handleChange}
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
          />
        </div>
      </div>
    );
  }
}

export default Search;
