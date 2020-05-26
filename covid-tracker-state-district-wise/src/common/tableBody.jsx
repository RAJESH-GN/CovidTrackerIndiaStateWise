import React, { Component } from "react";
import _ from "lodash";
import "./tableBody.css";

class TableBody extends Component {
  state = {};

  getPropertyValue = (data, path) => {
    return _.get(data, path);
  };
  render() {
    return (
      <tbody>
        {this.props.bodyData.map((data) => (
          <tr key={data.statecode}>
            {this.props.properties.map((property) => (
              <td
                onClick={() => this.props.onClick(data)}
                className="hover-highlight"
              >
                {this.getPropertyValue(data, property.path)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
