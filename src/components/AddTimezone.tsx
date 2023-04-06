import React from "react";
import SelectDropdown from "./SelectDropdown";
type ChangeFunction = (s: string) => void;

const AddTimezone = ({change}: {change: ChangeFunction}) => {
  return (
    <>
      <p onClick={e => change('main')} className="cursor-pointer my-4">BACK</p>
      <h4 className="fs-xxl text-primary my-2 text-center">Add New Timezone</h4>
      <div className="my-1">
        <SelectDropdown classes="add-timezone" isFullText={true}/>
      </div>
      <div
        className="mt-2 bg-blue w-full text-center py-2 text-white add-button fs-lg cursor-pointer"
      >
        +Add
      </div>
      <div
        className="mt-2 mb-4 w-full text-center py-2 text-blue add-button fs-lg cursor-pointer"
        onClick={e => change('main')}
      >
        Cancel
      </div>
    </>
  );
};

export default AddTimezone;
