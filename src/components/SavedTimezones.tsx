import React from "react";
import timezones from "../timezones";
import DateTime from "./DateTime";

type TimezoneType = {
  countryCode: string;
  countryName: string;
  regionName: string;
  cityName: string;
  zoneName: string;
  abbreviation: string;
  gmtOffset: number;
  dst: string;
  zoneStart: number;
  zoneEnd?: number | null;
  nextAbbreviation?: string | null;
};
type updateListFunction = (s: string[]) => void;
type callbackType = (s: string) => void;

const Timezone = ({timezone, callback}: {timezone: TimezoneType, callback: callbackType}) => {
  const truncate = (str: string, length: number = 17) => {
    return str.length > length ? str.substring(0, length) + ".." : str;
  }
  const getCity = (zoneName: string) => {
    const list = zoneName.split('/');
    return list[list.length-1].replace(/_|-/," ");
  };
  const offsetConvert = (gmtOffset: number) => {
    gmtOffset = gmtOffset / 3600;
    return `UTC/GMT ${(gmtOffset >= 0) ? '+' : ''}${gmtOffset.toFixed(2)}`
  };
  
  return (
    <div className="my-2 timebox">
      <div className="flex p-relative">
        <div className="time-description bg-secondary text-white text-center">
          <p className="fs-xs fw-md my-2 mx-2" title={getCity(timezone.zoneName)}>
            {truncate(getCity(timezone.zoneName), 9)}
          </p>
          <p className="fs-xxl fw-xxl my-2">
            {timezone.abbreviation}
          </p>
        </div>
        <div className="time-show ml-2">
          <p className="mt-0 fs-xs fw-xs text-gray" title={timezone.countryName}>
            {truncate(timezone.countryName)}
          </p>
          <h4 className="fs-lg fw-xxl my-0 text-primary">
            <DateTime zone={timezone.zoneName} />
          </h4>
          <p className="mb-0 fs-xs fw-xs text-gray" title={timezone.countryName}>
            {offsetConvert(timezone.gmtOffset)}
          </p>
        </div>
        <div
          className="delete-icon cursor-pointer"
          onClick={e => callback(timezone.zoneName)}
        >
          x
        </div>
      </div>
    </div>
  );
};

const SavedTimezones = ({ timezonelist, updateList }: { timezonelist: string[], updateList: updateListFunction}) => {

  const lists = timezones.filter((timezone: TimezoneType) => timezonelist.includes(timezone.zoneName));
  const setTimezoneList = (value: string) => {
  timezonelist = timezonelist.filter((item) => item !== value);
  chrome.storage.sync.set({ timezonelist }).then(() => {
    updateList(timezonelist);
  });
  };
  return (
    <>
      <div className="gutter">
        {lists.map((timezone: TimezoneType, index: number) => (
            <Timezone key={index} timezone={timezone} callback={setTimezoneList}/>
          ))}
      </div>
    </>
  );
};

export default SavedTimezones;
