import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  // 1. Inicializar el estado:
  // Intentar obtener el valor de localStorage al inicio.
  // Si no existe, usar el valor inicial proporcionado.
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Manejar errores si localStorage está deshabilitado o el JSON es inválido
      console.warn(`Error al leer '${key}' de localStorage:`, error);
      return initialValue;
    }
  });

  // 2. Usar useEffect para guardar el valor en localStorage
  // cada vez que 'storedValue' (el estado) cambia.
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(`Error al guardar '${key}' en localStorage:`, error);
    }
  }, [key, storedValue]); // Dependencias: el hook se ejecuta cuando 'key' o 'storedValue' cambian

  // 3. Devolver el valor almacenado y la función para actualizarlo,
  // tal como lo hace useState.
  return [storedValue, setStoredValue];
}

export default useLocalStorage;
