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


const Timezone = ({timezone}: {timezone: TimezoneType}) => {
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
      <div className="flex">
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
            <DateTime />
          </h4>
          <p className="mb-0 fs-xs fw-xs text-gray" title={timezone.countryName}>
            {offsetConvert(timezone.gmtOffset)}
          </p>
        </div>
      </div>
    </div>
  );
};

const SavedTimezones = () => {
  return (
    <>
      <div className="gutter">
        {timezones.map((timezone: TimezoneType, index: number) => (
              <Timezone key={index} timezone={timezone} />
          ))}
      </div>
    </>
  );
};

export default SavedTimezones;
