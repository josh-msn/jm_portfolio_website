import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <ul className="centered-list">
        <li>
          <Link to="/imprint">Impressum</Link>{" "}
        </li>
        <li>
          <Link to="/privacy">Datenschutz</Link>{" "}
        </li>
      </ul>
      <p>© 2024. All rights reserved.</p>
    </div>
  );
}

export default Footer;
