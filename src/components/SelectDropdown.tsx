import React, {useState} from "react";
import timezones from "../timezones";

type SelectType = {
  text: string;
  value: string | number;
};
const SelectDropdown = ({classes = "timezone", isFullText = false}: {classes?: string, isFullText?: boolean}) => {
  const offsetConvert = (gmtOffset: number) => {
    gmtOffset = gmtOffset / 3600;
    return `${(gmtOffset >= 0) ? '+' : ''}${gmtOffset.toFixed(2)}`
  };
  const list: SelectType[] = timezones.map((timezone) => {
    const zone = timezone.zoneName.split('/');
    const text = `${(zone[zone.length-1].replace(/_|-/," "))} ${(isFullText) ? `(${timezone.abbreviation} ${offsetConvert(timezone.gmtOffset)})` : ''}`;
    return { text: text, value: timezone.zoneName };
  });
  const [selectedTimezone, setSelectedTimezone] = useState(list[0].value);

  return (
    <select
      className={classes}
      id="timezone"
      value={selectedTimezone}
      onChange={e => setSelectedTimezone(e.target.value)}
    >
      {list.map((item, index) => {
        return (
          <option key={index} value={item.value}>{item.text}</option>
        );
      })}
    </select>
  );
};

export default SelectDropdown;
