import React, { useState } from 'react';
import DateTime from './DateTime';
import SelectDropdown from './SelectDropdown';
import dayjs, { Dayjs } from "dayjs";
import timezone from 'dayjs/plugin/timezone';
import utc from "dayjs/plugin/utc";

dayjs.extend(utc)
dayjs.extend(timezone)

const Header = ({localtimezone}: {localtimezone: string | undefined}) => {
  
  let [localzone, setLocalzone] = useState(() => localtimezone ? localtimezone : dayjs.tz.guess());
  const setLocalTimezone = (value: string) => {
    chrome.storage.sync.set({ localtimezone: value }).then(() => {
      dayjs.tz.setDefault(value);
      setLocalzone(value);
    });
  };

  return (
    <div className="App-header bg-primary w-full">
      <div className="gutter">
        <div className="flex justify-content-between">
          <div className="text-white fs-xs">
            <p className="fw-md fs-xs">
              Current time: <DateTime zone={localzone}/>
            </p>
          </div>
          <div className="text-white fs-xs">
            <SelectDropdown callback={setLocalTimezone} selectedValue={localzone}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;