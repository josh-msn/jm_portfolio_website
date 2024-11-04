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
  const img_1 = require("../../assets/images/project_images/Bodenstaendig/bodenstaendig-img4.webp");
  const img_2 = require("../../assets/images/project_images/Bodenstaendig/bodenstaendig-img5.webp");

  const { lightMode } = React.useContext(LightModeContext);

  // State for Lightbox
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Array of images
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
            <h1>Website: Bodenständig Shop</h1>
          </div>
          <div className="project-page-hero">
            <div className="project-page-hero-col1">
              <h2>Beschreibung</h2>
              <p>
                Ich habe für diesen Shopify Shop die Betreuung übernommen und
                ein Redesign durchgeführt und die Struktur hinsichtlich SEO
                überarbeitet.
                <br />
                <br /> Zudem wurde der Code einiger Sections angepasst und
                erweitert, um zusätzliche Funktionen im Backend bei der
                Gestaltung zu haben.
              </p>
              URL:{" "}
              <a
                href="https://www.bodenstaendig.shop/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://bodenstaendig.shop/
              </a>
            </div>
            <div className="project-page-hero-col2">
              <h2> Technologien </h2>
              <div className="project-page-logos">
                <img src={icon_css} alt="icon_css" />
              </div>
            </div>
          </div>
          <h2 id="showcase-heading">Bilder & Showcase</h2>
          <div className="project-page-showcase">
            <div className="showcase-col1">
              <img
                src={img_1}
                alt="image3"
                onClick={() => {
                  setPhotoIndex(2);
                  setIsOpen(true);
                }}
                className="clickable-image"
              />
            </div>

            <div className="showcase-col2">
              <img
                src={img_2}
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
