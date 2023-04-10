import React, {useState} from "react";
import timezones from "../timezones";

type SelectType = {
  text: string;
  value: string | number;
};

type SelectDropdownType = {
  selectedValue?: string;
  classes?: string;
  isFullText?: boolean;
  callback: (value: string) => void;
};

const SelectDropdown = ({selectedValue, classes = "timezone", isFullText = false, callback}: SelectDropdownType) => {
  const offsetConvert = (gmtOffset: number) => {
    gmtOffset = gmtOffset / 3600;
    return `${(gmtOffset >= 0) ? '+' : ''}${gmtOffset.toFixed(2)}`
  };
  const list: SelectType[] = timezones.map((timezone) => {
    const zone = timezone.zoneName.split('/');
    const text = `${(zone[zone.length-1].replace(/_|-/," "))} ${(isFullText) ? `(${timezone.abbreviation} ${offsetConvert(timezone.gmtOffset)})` : ''}`;
    return { text: text, value: timezone.zoneName };
  });
  const [selectedTimezone, setSelectedTimezone] = useState(selectedValue);
  const changeTimezone = (e: any) => {
    setSelectedTimezone(e.target.value)
    callback(e.target.value);
  };

  return (
    <select
      className={classes}
      id="timezone"
      value={selectedTimezone}
      onChange={e => changeTimezone(e)}
    >
      <option value="">Select a timezone</option>
      {list.map((item, index) => {
        return (
          <option key={index} value={item.value}>{item.text}</option>
        );
      })}
    </select>
  );
};

export default SelectDropdown;
