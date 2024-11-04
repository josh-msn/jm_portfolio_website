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
  const img_1 = require("../../assets/images/project_images/AirBnBDB/airbnbdb_img1.webp");
  const img_2 = require("../../assets/images/project_images/AirBnBDB/airbnbdb_img2.webp");
  const img_3 = require("../../assets/images/project_images/AirBnBDB/airbnbdb_img3.webp");
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
            <h1>Projekt: AirBnB Database</h1>
          </div>
          <div className="project-page-hero">
            <div className="project-page-hero-col1">
              <h2>Beschreibung</h2>
              <p>
                Bei diesem Projekt ging es um den Aufbau eines
                Datenbankmanagementsystems für eine Vermietungsplattform wie
                Airbnb. Das Ziel war es, ein starkes, skalierbares System zu
                schaffen, das alles von der Benutzerverwaltung über die
                Auflistung von Immobilien bis hin zu Buchungen, Zahlungen und
                Bewertungen abwickeln kann.
                <br />
              </p>
            </div>
            <div className="project-page-hero-col2">
              <h2> Technologien </h2>
              <div className="project-page-logos">
                <img src={icon_sql} alt="icon_sql" />
              </div>
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
