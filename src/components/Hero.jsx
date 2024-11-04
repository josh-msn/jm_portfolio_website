import React from "react";
import "./Hero.css";
import ContactWidget from "./ContactWidget";
import LogosAll from "./LogosAll";
import Switch from "./Switch";
import { LightModeContext } from "../ModeContext";

function Hero() {
  const portrait_jm = require("../assets/images/portrait_jm.webp");
  const location_icon_light = require("../assets/images/icon_location_white.png");
  const location_icon_dark = require("../assets/images/icon_location_black.png");
  const { lightMode } = React.useContext(LightModeContext);

  const locationIcon = lightMode ? location_icon_dark : location_icon_light;

  return (
    <>
      <div className="greenbeam"></div>
      <div className="contentwrap">
        <div className="hero">
          <Switch />
          <div className="hero-2-column-layout">
            <div className="hero-first-column">
              <h1>Joshua Maurer</h1>
              <h2>
                Webentwickler
                <img src={locationIcon} alt="location_icon" />
                Hamburg
              </h2>
              <p>
                Seit über 2 Jahren beschäftige ich mich mit Webentwicklung und
                arbeite seit Beginn 2022 zudem als Freelancer. Auf dieser Seite
                findest du mehr Informationen über mich, sowie einige meiner
                Projekte.
              </p>
              <LogosAll />
              <ContactWidget />
            </div>
            <div className="hero-second-column">
              <img src={portrait_jm} alt="portraitjm" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
