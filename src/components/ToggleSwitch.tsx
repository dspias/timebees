import React, { useState } from "react";

const ToggleSwitch = ({isalltrack}: {isalltrack: boolean | undefined}) => {
  let [istrack, setIstrack] = useState(() => (isalltrack === false) ? false : true);
  const setTrack = () => {
    const value = !istrack;
    chrome.storage.sync.set({ isalltrack: value }).then(() => {
      setIstrack(value);
    });
  };
  return (
    <span className="toggler">
      <input type="checkbox" className="d-none" id="switch"  checked={istrack} onChange={(e) => setTrack()}/>
      <label htmlFor="switch">Toggle</label>
    </span>
  );
};

export default ToggleSwitch;