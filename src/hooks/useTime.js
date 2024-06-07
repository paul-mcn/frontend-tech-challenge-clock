import { useEffect, useState } from "react";

// useState can be used instead of useContext as Date is global var
const useTime = (refreshCycle = 100) => {
  const [time, setTime] = useState(new Date());

  const getHours = () => {
    const hours = time.getHours();
    return hours;
  };

  const getMinutes = () => {
    const minutes = time.getMinutes();
    return minutes;
  };

  const getSeconds = () => {
    const seconds = time.getSeconds();
    return seconds;
  };

  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), refreshCycle);

    return () => clearInterval(intervalId);
  }, [refreshCycle, setInterval, clearInterval, setTime]);

  return {
    getCurrentTime: () => {
      return {
        hours: getHours(),
        minutes: getMinutes(),
        seconds: getSeconds(),
      };
    },
  };
};

export default useTime;
