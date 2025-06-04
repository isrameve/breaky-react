import { useState, useEffect, useRef } from "react";

const useTimer = (initialTimeInSeconds = 0, autoStart = false) => {
  const [time, setTime] = useState(initialTimeInSeconds);
  const [isRunning, setIsRunning] = useState(autoStart);
  const intervalRef = useRef(null); // Para almacenar la referencia del intervalo

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
  };

  const pause = () => {
    if (isRunning) {
      setIsRunning(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
  };

  const reset = (newTime = initialTimeInSeconds) => {
    pause(); // Pausar antes de resetear
    setTime(newTime);
    setIsRunning(false); // Por defecto, al resetear no inicia automáticamente
  };

  // Efecto para manejar el contador
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            setIsRunning(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000); // Cada segundo
    } else if (intervalRef.current) {
      // Limpiar el intervalo si se pausa o no está corriendo
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Función de limpieza al desmontar el componente o cuando isRunning cambia a false
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning]); // Se ejecuta cada vez que 'isRunning' cambia

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return {
    time,
    formattedTime: formatTime(), // Devuelve también el tiempo formateado
    isRunning,
    start,
    pause,
    reset,
  };
};

export default useTimer;
