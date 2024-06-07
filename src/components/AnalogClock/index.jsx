import styles from "./index.module.css";
import useTime from "../../hooks/useTime";
const AnalogClock = () => {
  const { getCurrentTime } = useTime();
  const hourDeg =
    getCurrentTime().hours * 30 + (getCurrentTime().minutes / 60) * 30;
  const minuteDeg =
    getCurrentTime().minutes * 6 + (getCurrentTime().seconds / 60) * 6;
  const secondDeg = getCurrentTime().seconds * 6;
  return (
    <div className={styles["analog-clock__container"]}>
      <div className={styles["analog-clock__grey-styling"]}></div>
      <div className={styles["analog-clock__anchor"]}>
        <div
          className={styles["analog-clock__second-hand"]}
          style={{ rotate: `${secondDeg}deg` }}
        ></div>
        <div
          className={styles["analog-clock__minute-hand"]}
          style={{ rotate: `${minuteDeg}deg` }}
        ></div>
        <div
          className={styles["analog-clock__hour-hand"]}
          style={{ rotate: `${hourDeg}deg` }}
        ></div>
      </div>
    </div>
  );
};

export default AnalogClock;
