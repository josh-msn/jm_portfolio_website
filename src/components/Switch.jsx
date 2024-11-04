import React, { useContext, useEffect } from "react";
import { LightModeContext } from "../ModeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun as farSun,
  faMoon as farMoon,
} from "@fortawesome/free-regular-svg-icons";
import "./Switch.css";
import NinjaAnimation from "./Ninja";

function Switch() {
  const { lightMode, toggleLightMode } = useContext(LightModeContext);

  useEffect(() => {
    // Entferne das initiale Umschalten, falls nicht benötigt
    // toggleLightMode();
  }, [toggleLightMode]);

  const handleSwitch = () => {
    toggleLightMode();
  };

  return (
    <div className="switch-container">
      <NinjaAnimation />
      <div className="switch">
        <label className="mode-switch">
          <input type="checkbox" checked={lightMode} onChange={handleSwitch} />
          <span className="mode-slider round" id="lightswitch">
            <FontAwesomeIcon
              icon={lightMode ? farSun : farMoon}
              className="moon-icon"
            />
            <FontAwesomeIcon
              icon={lightMode ? farSun : farMoon}
              className="sun-icon"
            />
          </span>
        </label>
      </div>
    </div>
  );
}

export default Switch;
