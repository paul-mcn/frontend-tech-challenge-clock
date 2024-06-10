import { useEffect, useState } from "react";

// useState can be used instead of useContext as Date is a global var/class
// As requested, the cycle "Update[s] the time each second". 
// However, setInterval can be inaccurate. As such the refreshCycle can be reduced for better accuracy
// Read more: https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
const useTime = (refreshCycle = 1000) => {
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
