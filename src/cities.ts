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
type CityType = {
    city: string;
    zoneName: string;
};

const timezones: TimezoneType[] = data;

const getCityName = (zoneName: string) => {
  const zone = zoneName.split('/');
  return zone[zone.length-1].replaceAll(/_|-/g," ");
};

const cities: CityType[] = timezones.map((timezone) => {
  return  {
    city: getCityName(timezone.zoneName),
    zoneName: timezone.zoneName
  };
});

export default cities;
