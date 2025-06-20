import { useEffect } from "react";
import useTimer from "../../hooks/useTimer";
import useSoundAlert from "../../hooks/useSoundAlert";
import { useActivityStatus } from "../../contexts/ActivityContext";

import CardBackgroundGrey from "../CardBackgroundGrey/CardBackgroundGrey";
import Button from "../Button/Button";
import PopUpNotification from "../PopUpNotification/PopUpNotificacion";

import styles from "./WorkingTimer.module.scss";

const WorkigTimer = ({ timeWorking }) => {
  const { time, formattedTime, isRunning, start, pause, reset } =
    useTimer(timeWorking);

  const playSoundAlert = useSoundAlert();
  const { setActivityStatus } = useActivityStatus();

  const handleClickEndWorkingNotification = () => {
    setActivityStatus("pausing");
  };

  useEffect(() => {
    if (time === 0) {
      playSoundAlert();
    }
  }, [time, playSoundAlert]);

  return (
    <>
      {time === 0 && (
        <PopUpNotification
          title={"Acabó el tiempo de trabajo"}
          message={"Es tiempo de moverse y realizar tu pausa activa"}
          onClick={handleClickEndWorkingNotification}
        />
      )}
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
    </>
  );
};

export default WorkigTimer;
