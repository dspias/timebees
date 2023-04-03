import React from "react";

const ToggleSwitch = () => {
  return (
    <span className="toggler">
      <input type="checkbox" className="d-none" id="switch" />
      <label htmlFor="switch">Toggle</label>
    </span>
  );
};

export default ToggleSwitch;