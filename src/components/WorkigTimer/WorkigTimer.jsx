import { useEffect } from "react";
import useTimer from "../../hooks/useTimer";
import useSoundAlert from "../../hooks/useSoundAlert";

import CardBackgroundGrey from "../CardBackgroundGrey/CardBackgroundGrey";
import Button from "../Button/Button";

import styles from "./WorkingTimer.module.scss";

const WorkigTimer = ({ timeWorking }) => {
  const { time, formattedTime, isRunning, start, pause, reset } =
    useTimer(timeWorking);

  const playSoundAlert = useSoundAlert();

  useEffect(() => {
    if (time === 0) {
      playSoundAlert();
      // Implementar popUp simple para la notificación visual y no usar alert() bloqueantes
    }
  }, [time, playSoundAlert]);

  return (
    <CardBackgroundGrey>
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
