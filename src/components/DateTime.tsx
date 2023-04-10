import  React, { useState , useEffect } from 'react';
import dayjs, { Dayjs } from "dayjs";
import timezone from 'dayjs/plugin/timezone';
import utc from "dayjs/plugin/utc";

dayjs.extend(utc)
dayjs.extend(timezone)

const DateTime = ({zone}: {zone?: string}) => {
  let [date,setDate] = useState(new Date());
  useEffect(() => {
      let timer = setInterval(()=>setDate(new Date()), 1000 )
      return function cleanup() {
          clearInterval(timer)
      };
  });
  const formatTime = (
    date: string | Date | Dayjs,
    timeFormat?: number | null,
  ) => {
    return dayjs(date).tz(zone).format(timeFormat === 12 ? "h:mm A" : "HH:mm");
  };

  return(
      <>
        {formatTime(date, 12)}
      </>
  );
};

export default DateTime;
