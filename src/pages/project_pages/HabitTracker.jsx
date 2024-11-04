import React, { useState } from "react";
import "./ProjectPage.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { LightModeContext } from "../../ModeContext";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export default function ProjectIngGellert() {
  const icon_python = require("../../assets/images/icon_python.webp");
  const img_1 = require("../../assets/images/project_images/HabitTracker/habittracker_img1.webp");
  const img_2 = require("../../assets/images/project_images/HabitTracker/habittracker_img2.webp");
  const img_3 = require("../../assets/images/project_images/HabitTracker/habittracker_img3.webp");
  const img_4 = require("../../assets/images/project_images/HabitTracker/habittracker_img4.webp");
  const { lightMode } = React.useContext(LightModeContext);

  // State for Lightbox
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Array of images
  const images = [img_1, img_2, img_3, img_4];

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
            <h1>Projekt: Habit Tracking App</h1>
          </div>
          <div className="project-page-hero">
            <div className="project-page-hero-col1">
              <h2>Beschreibung</h2>
              <p>
                In diesem Projekt wurde ein Backend für eine Habit-Tracking-App
                in Python entwickelt, das die grundlegenden Funktionen zur
                Erstellung, Verfolgung und Analyse von Gewohnheiten umfasst.
                Benutzer können mehrere Gewohnheiten definieren, Aufgaben als
                erledigt markieren und Streaks aufbauen. <br /> <br />
                Die Anwendung bietet eine Analysefunktion, um Fragen zu
                Gewohnheiten zu beantworten, wie etwa die längste Streak oder
                die aktuell verfolgten Gewohnheiten. Die Lösung umfasst eine
                benutzerfreundliche CLI, unterstützt durch objektorientierte und
                funktionale Programmierung, und erfüllt alle definierten
                Anforderungen.
                <br />
                <br />
                <a
                  href="https://github.com/josh-msn/habit_tracking_app.git"
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
                <img src={icon_python} alt="icon_sql" />
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
              {images.slice(2, 4).map((image, index) => (
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
