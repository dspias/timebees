import  React, { useState , useEffect } from 'react';
import dayjs, { Dayjs } from "dayjs";

const DateTime = () => {
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
    return dayjs(date).format(timeFormat === 12 ? "h:mmA" : "HH:mm");
  };

  return(
      <>
        {formatTime(date, 12)}
      </>
  );
};

export default DateTime;
