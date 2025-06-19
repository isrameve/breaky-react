import { useEffect, useRef, useCallback } from "react";

const STANDARD_ALERT_SOUND_URL = "../../public/sounds/alert-1.wav";
const DEFAULT_VOLUME = 0.7; // Volumen estándar de la alerta (0.0 a 1.0)

function useSoundAlert() {
  const audioRef = useRef(new Audio(STANDARD_ALERT_SOUND_URL));

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = DEFAULT_VOLUME;
    }
  }, []);

  const playSound = useCallback(() => {
    if (audioRef.current) {
      // Reinicia el sonido al principio cada vez que se reproduce.
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((error) => {
        console.error("Error al reproducir el sonido:", error);
        alert(
          "El sonido de la alerta no pudo reproducirse. Por favor, interactúa con la página."
        );
      });
    }
  }, []);

  return playSound;
}

export default useSoundAlert;
