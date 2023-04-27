import dayjs from "dayjs";
import timezone from 'dayjs/plugin/timezone';
import utc from "dayjs/plugin/utc";
import customParseFormat from 'dayjs/plugin/customParseFormat';
import cities from "../cities";
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(customParseFormat);


function formatTime(timeStr: string): string {
  // Remove all spaces from the input string
  timeStr = timeStr.replace(/\s+/g, "");

  // Match the input string against various time formats using regular expressions
  const pattern = /^(1[0-2]|0?[1-9])([:.]?([0-5][0-9]))?(a|p)m?$|^([01]?[0-9]|2[0-3])([:.]?([0-5][0-9]))?$/;
  const match = timeStr.match(pattern);

  if (!match) return '';

  // Extract the hours and minutes from the match object
  let hours = match[1] || match[5] || '00';
  let minutes = match[3] || match[7] || '00';
  // Convert hours to 24-hour format if necessary
  if (match[4]) {
    if (match[4].toLowerCase() === "p") {
      hours = String((Number(hours)%12) + 12);
    }
    if (hours.length === 1) {
      hours = "0" + hours;
    }
  }

  // Combine hours and minutes into a formatted string
  return `${hours}:${minutes}`;
}

const findCity = (text: string) => {
  const timezoneRegex = /\b([A-Z]{3,4})\b/g;

  const timezoneMatch = text.match(timezoneRegex);
  const timezone = timezoneMatch ? timezoneMatch[0] : null;
  if (timezone == null) {
    const matchedCities: string[] = [];
  
    // Use a regular expression to match city names in the input text
    for (const city of cities) {
      const pattern = new RegExp(`\\b${city.city}\\b`, "gi");
      if (pattern.test(text)) {
        matchedCities.push(city.zoneName);
      }
    }
    return matchedCities ? matchedCities[0] : null;
  }
  return timezone;
};

const DetectTime = (text: string) => {
  const timeRegex = /((1[0-2]|[1-9])(:[0-5][0-9])?\s?(am|pm)|([01][0-9]|2[0-3])(:[0-5][0-9])?)/i;
  
  // const offsetRegex = /GMT ?([+-][0-9]{1,2})(:([0-9]{2}))?|UTC ?([+-][0-9]{1,2})(:([0-9]{2}))?/i;

  const timeMatch = text.match(timeRegex);
  // const offsetMatch = text.match(offsetRegex);
  const time = timeMatch ? formatTime(timeMatch[0]) : null;
  const timezone = findCity(text);
  // const offset = offsetMatch ? offsetMatch[0].replace(/[^+\-\d]/g, '') : null;

  return [time, timezone];
};

export default DetectTime;