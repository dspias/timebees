import React from 'react';
import DateTime from './DateTime';
import SelectDropdown from './SelectDropdown';

const Header = () => {
  return (
    <div className="App-header bg-primary w-full">
      <div className="gutter">
        <div className="flex justify-content-between">
          <div className="text-white fs-xs">
            <p className="fw-md fs-xs">
              Current time: <DateTime />
            </p>
          </div>
          <div className="text-white fs-xs">
            <SelectDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;