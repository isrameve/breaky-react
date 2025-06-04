import { useEffect, useState } from "react";
import useTimer from "../../hooks/useTimer";

import CardBackgroundGrey from "../CardBackgroundGrey/CardBackgroundGrey";

const WorkigTimer = ({ timeWorking }) => {
  const [display, setDisplay] = useState("block");
  const { time, formattedTime, isRunning, start, pause, reset } =
    useTimer(timeWorking);

  useEffect(() => {
    if (time === 0) {
      setDisplay("none");
    }
  }, [time, display]);

  return (
    <CardBackgroundGrey display={display}>
      <h3>{formattedTime}</h3>
      <h4>Hasta la pausa activa</h4>
      <button onClick={!isRunning ? start : pause}>
        {isRunning ? "Pausar" : "Iniciar"}
      </button>
      <button onClick={() => reset(timeWorking)}>Reiniciar</button>
    </CardBackgroundGrey>
  );
};

export default WorkigTimer;
