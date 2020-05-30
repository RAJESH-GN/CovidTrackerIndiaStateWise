import React, { Component } from "react";
class Dropdown extends Component {
  getContainerClassName = (propClasses) => {
    const classes = "drop-down-container ";
    return classes + propClasses;
  };
  render() {
    const { onChange, options, label, className, elementId } = this.props;
    return (
      <div className={this.getContainerClassName(className)}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor={elementId}>
              {label}
            </label>
          </div>
          <select
            className="custom-select"
            id={elementId}
            onChange={onChange}
            defaultValue={"choose"}
          >
            <option value={"choose"}>Choose...</option>
            {options.map((data, index) => (
              <option key={`${index}+${data}`} value={data}>
                {data}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default Dropdown;
