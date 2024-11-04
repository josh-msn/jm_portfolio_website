import React from "react";
import "./ContactWidget.css";
import { useNavigate } from "react-router-dom";
import { LightModeContext } from '../ModeContext';

function ContactWidget() {
  const icon_mail = require("../assets/images/icon_mail.webp");
  const icon_phone = require("../assets/images/icon_phone.webp");

  const navigate = useNavigate();


  const { lightMode } = React.useContext(LightModeContext);

  return (

    <div className={lightMode ? 'contact-widget contact-widget-light' : 'contact-widget contact-widget-dark'}>

      <div className="contact-widget-column1">
        <img src={icon_mail} alt="icon_mail" />
        <p>
          E-Mail: <br />
          hallo@joshua-maurer.com
        </p>
      </div>
      <div className="contact-widget-column2">
        <img src={icon_phone} alt="icon_phone" />
        <p>
          Tel.: <br /> +49 178 6817362
        </p>
      </div>

      <button
        type="button"
        className="contact-button"
        onClick={() => navigate("/contact")}
      >
        Kontakt
      </button>

    </div>

  );
}

export default ContactWidget;
