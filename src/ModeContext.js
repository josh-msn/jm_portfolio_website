import React, { createContext, useState, useEffect } from "react";

const LightModeContext = createContext();

function LightModeProvider(props) {
  // Zustand des Light-Modus, Standardwert wird aus dem Local Storage geladen oder auf false gesetzt
  const [lightMode, setLightMode] = useState(() => {
    const storedMode = localStorage.getItem("lightMode");
    return storedMode !== null ? JSON.parse(storedMode) : false;
  });

  // Funktion zum Umschalten des Light-Modus
  const toggleLightMode = () => {
    setLightMode((prevMode) => !prevMode);
  };

  // Speichern des aktuellen Light-Modus im Local Storage
  useEffect(() => {
    localStorage.setItem("lightMode", JSON.stringify(lightMode));
  }, [lightMode]);

  return (
    <LightModeContext.Provider value={{ lightMode, toggleLightMode }}>
      {props.children}
    </LightModeContext.Provider>
  );
}

export { LightModeContext, LightModeProvider };
