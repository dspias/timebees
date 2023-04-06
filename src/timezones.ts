import data from "./timezones.json";

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
const timezones: TimezoneType[]  = data;

export default timezones;
