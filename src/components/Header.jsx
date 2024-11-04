import React from "react";
import { Link } from "react-router-dom";
import ContactWidget from "./ContactWidget";
import Switch from "./Switch";
import "./Header.css";

function Header() {
  const portrait_jm = require("../assets/images/portrait_jm.webp");

  return (
    <div className="header">
      <div className="header-content">
        <Link to="/home">
          <img id="header-portrait" src={portrait_jm} alt="portraitjm" />
        </Link>
        <ContactWidget id="header-contact" />
        <div className="spacer"></div>
        <Switch />
      </div>
    </div>
  );
}

export default Header;
