import dayjs, {Dayjs} from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
dayjs.extend(utc);
dayjs.extend(timezone);

const formatTime = (
  date: string | Date | Dayjs,
  timeFormat?: number,
  zone?: string,
) => {
  return dayjs(date).tz(zone).format(timeFormat === 12 ? "h:mm A" : "HH:mm");
};

const ConvertTime = (time?: string | null, zone?: string | null, targetZone?: string | null) => {
  if (!time) return '';

  if (!zone) return '';

  if (!targetZone) {
    targetZone = dayjs.tz.guess();
  }
  // Define the original date and time in a specific timezone
  const date = dayjs(time, 'HH:mm').tz(zone);
  
  // Convert the date and time to a new timezone
  return formatTime(date, 12, targetZone);
};

export default ConvertTime;