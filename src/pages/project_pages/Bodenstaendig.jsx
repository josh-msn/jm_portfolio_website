import React, { useState } from "react";
import "./ProjectPage.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { LightModeContext } from "../../ModeContext";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export default function ProjectBodenstaendig() {
  const icon_css = require("../../assets/images/icon_css.webp");
  const icon_wordpress = require("../../assets/images/icon_wordpress.webp");
  const img_1 = require("../../assets/images/project_images/Bodenstaendig/bodenstaendig-img1.webp");
  const img_2 = require("../../assets/images/project_images/Bodenstaendig/bodenstaendig-img2.webp");
  const img_3 = require("../../assets/images/project_images/Bodenstaendig/bodenstaendig-img3.webp");
  const { lightMode } = React.useContext(LightModeContext);

  // State for Lightbox
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Array of images
  const images = [img_1, img_2, img_3];

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
            <h1>Website: Bodenständig</h1>
          </div>
          <div className="project-page-hero">
            <div className="project-page-hero-col1">
              <h2>Beschreibung</h2>
              <p>
                Die Seite wurde mit Wordpress und dem Bricks-Builder erstellt.
                Hinzu kommen noch einige Plugins, um die Soziale Platform,
                Memberships und Lerninhalte einzubinden.
                <br />
                <br /> Auf der Seite und bei den Plugins wurden einige
                Anpassungen von mir vorgenommen, um das gewünschte
                Erscheinungsbild zu erzielen.
                <br />
                <br />
                Weitere Informationen zum Ertragsrechner sind auf der
                entsprechenden Projektseite.
              </p>
              URL:{" "}
              <a
                href="https://bodenstaendig.community/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://bodenstaendig.com
              </a>
            </div>
            <div className="project-page-hero-col2">
              <h2> Technologien </h2>
              <div className="project-page-logos">
                <img src={icon_css} alt="icon_css" />
                <img src={icon_wordpress} alt="icon_wordpress" />
              </div>
              <h2 className="project-heading-features"> Features </h2>
              <ul>
                <li>Ertragsrechner</li>
                <li>Lernplattform</li>
                <li>Forum/Social Media</li>
                <li>Memberships</li>
              </ul>
            </div>
          </div>
          <h2 id="showcase-heading">Bilder & Showcase</h2>
          <div className="project-page-showcase">
            <div className="showcase-col1">
              {images.slice(0, 2).map((image, index) => (
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

            <div className="showcase-col2">
              <img
                src={img_3}
                alt="image3"
                onClick={() => {
                  setPhotoIndex(2);
                  setIsOpen(true);
                }}
                className="clickable-image"
              />
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
