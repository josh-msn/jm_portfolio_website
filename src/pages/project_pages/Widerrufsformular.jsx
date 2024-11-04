import React, { useState } from "react";
import "./ProjectPage.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { LightModeContext } from "../../ModeContext";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export default function ProjectIngGellert() {
  const icon_sql = require("../../assets/images/icon_sql.webp");
  const icon_css = require("../../assets/images/icon_css.webp");
  const icon_php = require("../../assets/images/icon_php.webp");
  const img_1 = require("../../assets/images/project_images/Widerrufsformular/widerruf_img1.webp");
  const img_2 = require("../../assets/images/project_images/Widerrufsformular/widerruf_img2.webp");
  const { lightMode } = React.useContext(LightModeContext);

  // State für die Lightbox
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Array der Bilder
  const images = [img_1, img_2];

  return (
    <div className="project-page">
      <Header />

      <div className="project-page-wrapper">
        <div className="project-page-content">
          <Link
            className={
              lightMode
                ? "project-page-breadcrumbs-light"
                : "project-page-breadcrumbs-dark"
            }
            to="/home"
          >
            Übersicht
          </Link>{" "}
          <div className="project-page-heading">
            <h1>Projekt: Widerrufsformular</h1>
          </div>
          <div className="project-page-hero">
            <div className="project-page-hero-col1">
              <h2>Beschreibung</h2>
              <p>
                Aufgabe: <br /> <br />
                Ein Immobilienmakler möchte an Interessenten einen Link per Mail
                senden, welcher zuerst zu einem Widerrufsformular führt und nach
                dem Akzeptieren zum gewünschten Expose weiterleitet. Es soll
                zudem gespeichert werden wer zu welchem Zeitpunkt das Formular
                akzeptiert hat. <br /> <br /> <br />
                Umsetzung:
                <br /> <br />
                Zunächst habe ich eine neue Datenbank mit mehreren Tabellen
                angelegt. In den Tabellen werden getrennt die Interessenten, die
                Immobilien und die Akzeptierten Formulare gespeichert. Anhand
                der URL wird mittels ID der Interessent und die Immobilie
                erkannt und die Daten (Name, Adresse, Immobiliendaten) dynamisch
                im Formular angezeigt. Nach dem Akzeptieren werden die ID’s mit
                dem Datum gespeichert und weitergeleitet. Auf einer nur für den
                Immobilienmakler zugänglichen Seite werden alle akzeptierten
                Formulare angezeigt. Damit kann bequem der aktuelle Stand
                geprüft werden, ohne sich in die Datenbank einloggen zu müssen.
                <br /> <br />
                <a
                  href="https://github.com/josh-msn/revocationform.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Auf GitHub ansehen
                </a>
              </p>
            </div>
            <div className="project-page-hero-col2">
              <h2> Technologien </h2>
              <div className="project-page-logos">
                <img src={icon_php} alt="icon_php" />
                <img src={icon_css} alt="icon_css" />
                <img src={icon_sql} alt="icon_sql" />
              </div>
            </div>
          </div>
          <h2 id="showcase-heading">Bilder & Showcase</h2>
          <div className="project-page-showcase">
            <div className="showcase-col1">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`image${index + 1}`}
                  onClick={() => {
                    setPhotoIndex(index);
                    setIsOpen(true);
                  }}
                  className="clickable-image"
                />
              ))}
            </div>

            <div className="showcase-col2"></div>
          </div>
        </div>
      </div>

      <Footer />

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
}
