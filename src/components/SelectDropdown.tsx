import React, {useState} from "react";

type SelectType = {
  text: string;
  value: string | number;
};
const SelectDropdown = ({list}: {list: SelectType[]}) => {
  const [selectedTimezone, setSelectedTimezone] = useState(list[0].value);
  return (
    <select
      className="timezone"
      id="timezone"
      value={selectedTimezone}
      onChange={e => setSelectedTimezone(e.target.value)}
    >
      {list.map((item) => {
        return (
          <option value={item.value}>{item.text}</option>
        );
      })}
    </select>
  );
};

export default SelectDropdown;
