import React, { Component } from "react";
import "./tableHead.css";
class TableHead extends Component {
  render() {
    return (
      <thead>
        <tr>
          {this.props.properties.map((property) => (
            <th className="header-table" key={property.id}>
              {property.name}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHead;
