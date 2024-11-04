import React, { useState } from "react";
import "./ProjectPage.css";
import "./Ertragsrechner.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { LightModeContext } from "../../ModeContext";
import ErtragsrechnerWidget from "./ErtragsrechnerWidget";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export default function ProjectPortfolioWebsite() {
  const icon_html = require("../../assets/images/icon_html.webp");
  const icon_css = require("../../assets/images/icon_css.webp");
  const icon_js = require("../../assets/images/icon_js.webp");
  const img_1 = require("../../assets/images/project_images/Ertragsrechner/ertragsrechner_img1.webp");
  const img_2 = require("../../assets/images/project_images/Ertragsrechner/ertragsrechner_img2.webp");
  const img_3 = require("../../assets/images/project_images/Ertragsrechner/ertragsrechner_img3.webp");
  const { lightMode } = React.useContext(LightModeContext);

  // State für die Lightbox
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [img_1, img_3];

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
          </Link>
          <div className="project-page-heading">
            <h1>Ertragsrechner</h1>
          </div>
          <div className="project-page-hero">
            <div className="project-page-hero-col1">
              <h2>Beschreibung</h2>
              <p>
                Der Ertragsrechner wurde für eine Garten-Community erstellt.
                <br />
                <br />
                Über ein Dropdown kann ein Gemüse, Kräuter, etc. ausgewählt
                werden. Anhand der hinterlegten Daten werden die Ergebnisse
                berechnet und angezeigt.
                <br />
                <br />
                Ziel war es, ein simples Tool zu erstellen, das im besten Fall
                externe Verlinkungen auf die Seite generiert.
                <br />
                <br />
                Der Ertragsrechner ist als iFrame eingebunden und kann im
                Showcase ausprobiert werden.
              </p>
            </div>
            <div className="project-page-hero-col2">
              <h2>Technologien</h2>
              <div className="project-page-logos">
                <img src={icon_html} alt="HTML Icon" />
                <img src={icon_css} alt="CSS Icon" />
                <img src={icon_js} alt="JavaScript Icon" />
              </div>
            </div>
          </div>
          <h2 id="showcase-heading">Bilder & Showcase</h2>

          <div className="project-page-showcase">
            <div className="ertragsrechner-background showcase-col1">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Bild ${index + 1}`}
                  onClick={() => {
                    setPhotoIndex(index);
                    setIsOpen(true);
                  }}
                  className="clickable-image"
                />
              ))}
            </div>
            <div className="showcase-col2">
              <ErtragsrechnerWidget />
            </div>
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
