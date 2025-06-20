import { useEffect } from "react";
import useTimer from "../../hooks/useTimer";
import useSoundAlert from "../../hooks/useSoundAlert";
import { useActivityStatus } from "../../contexts/ActivityContext";

import CardBackgroundGrey from "../CardBackgroundGrey/CardBackgroundGrey";
import Button from "../Button/Button";
import PopUpNotification from "../PopUpNotification/PopUpNotificacion";

import styles from "./BreakTimer.module.scss";

const BreakTimer = ({ breakTime }) => {
  const { time, formattedTime, isRunning, start, pause, reset } =
    useTimer(breakTime);

  const playSoundAlert = useSoundAlert();
  const { setActivityStatus } = useActivityStatus();

  const handleClickEndRestNotification = () => {
    setActivityStatus("working");
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
          title={"Acabó la pausa activa"}
          message={"Es tiempo de trabajar con enfoque"}
          onClick={handleClickEndRestNotification}
        />
      )}
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
    </>
  );
};

export default BreakTimer;
