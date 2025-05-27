import React, { useState, useEffect, useCallback } from "react";

const formatTime = (secs) => {
  const minutes = Math.floor(secs / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (secs % 60).toString().padStart(2, "0");

  return `${minutes}:${seconds}`;
};

function Timer({ className, id, timerPurpose, initialTime = 5, onTimerEnd }) {
  //initialTime recordar cambiar a *60 para obtener minutos
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timerInterval;

    if (isActive && timeLeft > 0) {
      timerInterval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      console.log(timeLeft);
    } else if (timeLeft === 0 && isActive) {
      setIsActive(false);
      onTimerEnd?.(); //Callback al terminar
    }
    return () => clearInterval(timerInterval);
  }, [isActive, timeLeft, onTimerEnd]);

  // Controladores
  const startTimer = useCallback(() => setIsActive(true), []);
  const pauseTimer = useCallback(() => setIsActive(false), []);
  const resetTimer = useCallback(() => setTimeLeft(initialTime), [initialTime]);

  return (
    <div className={className}>
      <h2 id={id}>{formatTime(timeLeft)}</h2>
      <h3>{timerPurpose}</h3>
      <div className="timer-controls">
        <button onClick={isActive ? pauseTimer : startTimer}>
          {isActive ? "Pausar" : "Iniciar"}
        </button>
        <button onClick={resetTimer}>Reiniciar</button>
      </div>
    </div>
  );
}

export default Timer;
