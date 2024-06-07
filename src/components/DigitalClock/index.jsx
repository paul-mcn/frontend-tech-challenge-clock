import useTime from "../../hooks/useTime";
import styles from "./index.module.css";
const DigitalClock = () => {
  const { getCurrentTime } = useTime();
  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };
  const hours = formatTime(getCurrentTime().hours);
  const minutes = formatTime(getCurrentTime().minutes);
  const seconds = formatTime(getCurrentTime().seconds);
  return (
    <div className={styles["digital-clock"]}>
      <span>{hours}</span>
      <span>:</span>
      <span>{minutes}</span>
      <span>:</span>
      <span>{seconds}</span>
    </div>
  );
};

export default DigitalClock;
