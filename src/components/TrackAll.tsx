import React from "react";
import ToggleSwitch from "./ToggleSwitch";

const TrackAll = () => {
  return (
    <div className="track-all w-full">
      <div className="gutter">
        <div className="flex justify-content-between">
          <div className="text-primary fs-sm">
            <p className="fw-lg fs-xs">
              Track all timezone
            </p>
          </div>
          <div className="fs-xs">
            <div className="my-1">
              <ToggleSwitch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackAll;
