import { useEffect, useState } from "react";
import useTimer from "../../hooks/useTimer";

import CardBackgroundGrey from "../CardBackgroundGrey/CardBackgroundGrey";
import Button from "../Button/Button";

import styles from "./WorkingTimer.module.scss";

const WorkigTimer = ({ timeWorking }) => {
  const [display, setDisplay] = useState("flex");
  const { time, formattedTime, isRunning, start, pause, reset } =
    useTimer(timeWorking);

  useEffect(() => {
    if (time === 0) {
      setDisplay("none");
    }
  }, [time, display]);

  return (
    <CardBackgroundGrey display={display}>
      <h3 className={styles.primaryText}>{formattedTime}</h3>
      <h4 className={styles.secondaryText}>Hasta la pausa activa</h4>
      <div className={styles.buttonsContainer}>
        <Button
          onClick={!isRunning ? start : pause}
          label={isRunning ? "Pausar" : "Iniciar"}
        />
        <Button
          typeOfButton="secondaryButton"
          onClick={() => reset(timeWorking)}
          label={"Reiniciar"}
        />
      </div>
    </CardBackgroundGrey>
  );
};

export default WorkigTimer;
