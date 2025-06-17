import { useEffect, useRef, useCallback } from "react";

// Define la URL del sonido estándar.
// Asegúrate de que esta ruta sea correcta para tu proyecto (Vite vs Create React App).
// Si usas Vite, te recomiendo:
// const STANDARD_ALERT_SOUND_URL = new URL('/sounds/default-alert.mp3', import.meta.url).href;
// Si usas Create React App o el archivo está directamente en 'public':
const STANDARD_ALERT_SOUND_URL = "src/hooks/sounds/alert-2.wav";
const DEFAULT_VOLUME = 0.7; // Volumen estándar de la alerta (0.0 a 1.0)

/**
 * @returns {function} Una función `playSound` que dispara la alerta sonora.
 **/

function useSoundAlert() {
  // Usamos useRef para mantener una única instancia del objeto Audio.
  // El src y el volumen se configuran una sola vez aquí.
  const audioRef = useRef(new Audio(STANDARD_ALERT_SOUND_URL));

  // Configura el volumen inicial del objeto Audio una vez al montar.
  // Este efecto solo se ejecuta una vez.
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = DEFAULT_VOLUME;
    }
  }, []);

  // Función para reproducir el sonido.
  // Memoizada con useCallback para asegurar que su referencia sea estable.
  const playSound = useCallback(() => {
    if (audioRef.current) {
      // Reinicia el sonido al principio cada vez que se reproduce.
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((error) => {
        console.error("Error al reproducir el sonido:", error);
        // Si la reproducción es bloqueada por el navegador (ej. políticas de autoplay),
        // es útil notificar al usuario.
        alert(
          "El sonido de la alerta no pudo reproducirse. Por favor, interactúa con la página."
        );
      });
    }
  }, []); // No tiene dependencias, ya que audioRef.current es estable.

  // Retorna la función que permite disparar la alerta.
  return playSound;
}

export default useSoundAlert;
