import React, { useState, useEffect } from "react";
import "./IndexCards.css";
import { useNavigate, useLocation } from "react-router-dom";
import { LightModeContext } from "../ModeContext"; // Entfernen von LightModeProvider aus dem Import

function IndexCards() {
  const navigate = useNavigate();
  const location = useLocation();
  const { lightMode } = React.useContext(LightModeContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const dividerLight = require("../assets/images/green-divider-light.png");
  const dividerDark = require("../assets/images/green-divider-dark.png");

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isActive = (path) => {
    return (
      location.pathname === path ||
      (path === "/home" &&
        (location.pathname === "/" || location.pathname === "/home"))
    );
  };

  const buttonClass = (path) => {
    const baseClass = "index-buttons";
    const modeClass = lightMode ? "index-buttons-light" : "index-buttons-dark";
    const activeClass = isActive(path) ? `active-${modeClass}` : "";
    return `${baseClass} ${modeClass} ${activeClass}`;
  };

  const dividerStyle = {
    backgroundColor: "#c0f37e",
    backgroundImage:
      windowWidth >= 800
        ? `url(${lightMode ? dividerLight : dividerDark})`
        : "none",
    width: "100vw",
    minHeight: "90px",
    display: "flex",
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 90px",
  };

  return (
    <div className="index-cards">
      <div style={dividerStyle}>
        <div className="index-buttons-wrap">
          <button
            type="button"
            className={buttonClass("/home")}
            onClick={() => navigate("/home")}
          >
            Projekte
          </button>
          <button
            type="button"
            className={buttonClass("/about")}
            onClick={() => navigate("/about")}
          >
            Über mich
          </button>
          <button
            type="button"
            className={buttonClass("/contact")}
            onClick={() => navigate("/contact")}
          >
            Kontakt
          </button>
        </div>
      </div>
    </div>
  );
}

export default IndexCards;
