import React from "react";

const Dropdown = ({ onSelect, options, label }) => {
  return (
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <label class="input-group-text" for="inputGroupSelect01">
          {label}
        </label>
      </div>
      <select class="custom-select" id="inputGroupSelect01" onChange={onSelect}>
        <option selected disabled>
          Choose...
        </option>
        {options.map((data) => (
          <option value={data}>{data}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
