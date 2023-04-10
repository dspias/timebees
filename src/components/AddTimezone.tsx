import React, { useState } from "react";
import SelectDropdown from "./SelectDropdown";

type ChangeFunction = (s: string) => void;
type updateListFunction = (s: string[]) => void;
type AddTimezoneType = {
  change: ChangeFunction;
  timezonelist: string[];
  updateList: updateListFunction;
};

const AddTimezone = ({change, timezonelist, updateList}: AddTimezoneType) => {
  let [timezone, setTimezone] = useState('');
  const setTimezoneList = (value: string) => {
    const hasAlready = timezonelist.find((item) => item === value);
    if (value !== '' && !hasAlready) {
      timezonelist.push(value);
      chrome.storage.sync.set({ timezonelist }).then(() => {
        updateList(timezonelist);
      });
    }
    change('main');
  };
  return (
    <>
      <p onClick={e => change('main')} className="cursor-pointer my-4">BACK</p>
      <h4 className="fs-xxl text-primary my-2 text-center">Add New Timezone</h4>
      <div className="my-1">
        <SelectDropdown callback={setTimezone} classes="add-timezone" isFullText={true}/>
      </div>
      <div
        className="mt-2 bg-blue w-full text-center py-2 text-white add-button fs-md cursor-pointer"
        onClick={e => setTimezoneList(timezone)}
      >
        +Add
      </div>
      <div
        className="mt-2 mb-4 w-full text-center py-2 text-blue add-button fs-md cursor-pointer"
        onClick={e => change('main')}
      >
        Cancel
      </div>
    </>
  );
};

export default AddTimezone;
