import { useEffect } from "react";
import useTimer from "../../hooks/useTimer";

import CardBackgroundGrey from "../CardBackgroundGrey/CardBackgroundGrey";
import Button from "../Button/Button";

import styles from "./BreakTimer.module.scss";

const BreakTimer = ({ breakTime }) => {
  const { time, formattedTime, isRunning, start, pause, reset } =
    useTimer(breakTime);

  useEffect(() => {
    if (time === 0) {
      alert("A trabajar!!");
    }
  }, [time]);

  return (
    <CardBackgroundGrey>
      <h3 className={styles.primaryText}>{formattedTime}</h3>
      <h4 className={styles.secondaryText}>De pausa activa</h4>
      <div className={styles.buttonsContainer}>
        <Button
          onClick={!isRunning ? start : pause}
          label={isRunning ? "Pausar" : "Iniciar"}
        />
        <Button
          typeOfButton="secondaryButton"
          onClick={() => reset(breakTime)}
          label={"Reiniciar"}
        />
      </div>
    </CardBackgroundGrey>
  );
};

export default BreakTimer;
