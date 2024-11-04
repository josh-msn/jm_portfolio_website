import React, { useState } from "react";
import "./ProjectPage.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { LightModeContext } from "../../ModeContext";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export default function ProjectIngGellert() {
  const icon_css = require("../../assets/images/icon_css.webp");
  const icon_html = require("../../assets/images/icon_html.webp");
  const img_1 = require("../../assets/images/project_images/Tischlerei/tischlerei_img1.webp");
  const img_2 = require("../../assets/images/project_images/Tischlerei/tischlerei_img2.webp");
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
            <h1>Website: Tischlerei (Template)</h1>
          </div>
          <div className="project-page-hero">
            <div className="project-page-hero-col1">
              <h2>Beschreibung</h2>
              <p>
                Bei dieser Seite handelt es sich um ein "Template" zur schnellen
                und einfachen Erstellung von digitalen Visitenkarten für kleine
                Betriebe. <br />
                <br />
              </p>
              URL:{" "}
              <a
                href="https://josh-msn.github.io/website-showcase.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://josh-msn.github.io/website-showcase.io/
              </a>
            </div>
            <div className="project-page-hero-col2">
              <h2>Technologien</h2>
              <div className="project-page-logos">
                <img src={icon_html} alt="icon_html" />
                <img src={icon_css} alt="icon_css" />
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
