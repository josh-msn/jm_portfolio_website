// src/components/AboutCard.js
import React, { useEffect, useRef, useState } from "react";
import "./AboutCard.css";

// Lokale Bildimporte für Skill-Icons
import icon_html from "../assets/images/icon_html.webp";
import icon_css from "../assets/images/icon_css.webp";
import icon_js from "../assets/images/icon_js.webp";
import icon_react from "../assets/images/icon_react.webp";
import icon_python from "../assets/images/icon_python.webp";
import icon_sql from "../assets/images/icon_sql.webp";

function AboutCard() {
  // Referenz für den Skills-Bereich
  const skillsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null, // Beobachtet die Sichtbarkeit im Viewport
      threshold: 0.1, // Trigger, wenn 10% des Elements sichtbar sind
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stoppt die Beobachtung nach dem ersten Trigger
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <div className="about-card">
      <div className="about-card-columns">
        <div className="about-card-column1">
          <div className="about-card-title1">
            <h2>Über mich</h2>
          </div>
          <div className="about-card-text">
            <p>
              <span style={{ fontSize: "34px" }}>Hi</span>, ich bin Joshua,
              mittlerweile seit drei Jahren in Hamburg zu Hause. Die Stadt ist
              klasse, aber was mich wirklich antreibt, ist die Leidenschaft für
              alles, was mit Technik und Programmierung zu tun hat. <br />
              <br />
              Schon seit ich denken kann, war ich der Typ, der lieber am
              Computer tüftelt, statt draußen Fußball zu spielen. Mit der Zeit
              hat sich mein Fokus erweitert. Websites und ihre Entwicklung haben
              es mir angetan. <br />
              WordPress und Page Builder waren meine ersten Spielwiesen, aber
              ich wollte tiefer in die Materie eintauchen. Eine Weiterbildung
              zum Webdesigner war der nächste Schritt, gefolgt von JavaScript
              und React durch Online-Kurse. Daraufhin habe ich mein Kenntnisse noch mit einer
              Weiterbildung zum “Python und SQL Programmer” erweitert.
              <br />
              <br />
              Freelancer-Projekte in der Webentwicklung haben mir die Tür zur
              IT-Branche geöffnet. Auch als Quereinsteiger konnte ich so
              wertvolle Erfahrungen sammeln und meine Skills unter Beweis
              stellen. Die Herausforderungen, denen ich begegnet bin, haben mich
              nicht nur geformt, sondern auch gezeigt, dass ich für diese
              Branche gemacht bin.
              <br />
              <br />
              Kurzum, ich bin ein 28-jähriger Webentwickler, der seine Zukunft
              aktiv gestaltet. Ich liebe, was ich tue, und bin immer auf der
              Suche nach dem nächsten Projekt, bei dem ich meine Fähigkeiten
              einsetzen und erweitern kann.
            </p>
          </div>
        </div>
        <div className="about-card-column2">
          <div className="about-card-title2">
            <h2>Erfahrung</h2>
          </div>
          <div className="about-card-experience">
            <p>
              2022 - heute <br /> “Webdesign & Webentwicklung” <br /> -
              Freelancer
              <br />
              <br />
              2024-2025 <br />
              “Python and SQL Programmer” <br />- IU Akademie
              <br />
              <br />
              2022-2023 <br />
              “geprüfter Webdesigner” <br /> - Onlineschule für Gestaltung
            </p>
          </div>
        </div>
      </div>
      {/* Neue Skills-Sektion mit Progress-Bars */}
      <div className="skills-container" ref={skillsRef}>
        <div className="skills-column">
          <h3>Sprachen</h3>
          <div className="skill">
            <div className="skill-name">
              <img src={icon_html} alt="HTML Icon" />
              HTML
            </div>
            <div
              className={`progress-bar ${isVisible ? "animate" : ""}`}
              style={{ "--target-width": "80%" }}
            >
              <span className="html-skill"></span>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name">
              <img src={icon_css} alt="CSS Icon" />
              CSS
            </div>
            <div
              className={`progress-bar ${isVisible ? "animate" : ""}`}
              style={{ "--target-width": "70%" }}
            >
              <span className="css-skill"></span>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name">
              <img src={icon_js} alt="JavaScript Icon" />
              JavaScript
            </div>
            <div
              className={`progress-bar ${isVisible ? "animate" : ""}`}
              style={{ "--target-width": "40%" }}
            >
              <span className="js-skill"></span>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name">
              <img src={icon_react} alt="React Icon" />
              React
            </div>
            <div
              className={`progress-bar ${isVisible ? "animate" : ""}`}
              style={{ "--target-width": "40%" }}
            >
              <span className="react-skill"></span>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name">
              <img src={icon_python} alt="Python Icon" />
              Python
            </div>
            <div
              className={`progress-bar ${isVisible ? "animate" : ""}`}
              style={{ "--target-width": "30%" }}
            >
              <span className="python-skill"></span>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name">
              <img src={icon_sql} alt="SQL Icon" />
              SQL
            </div>
            <div
              className={`progress-bar ${isVisible ? "animate" : ""}`}
              style={{ "--target-width": "60%" }}
            >
              <span className="sql-skill"></span>
            </div>
          </div>
        </div>

        <div className="skills-column">
          <h3>CMS</h3>
          <div className="skill">
            <div className="skill-name">WordPress</div>
            <div
              className={`progress-bar ${isVisible ? "animate" : ""}`}
              style={{ "--target-width": "80%" }}
            >
              <span className="wordpress-skill"></span>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name">Shopify</div>
            <div
              className={`progress-bar ${isVisible ? "animate" : ""}`}
              style={{ "--target-width": "65%" }}
            >
              <span className="shopify-skill"></span>
            </div>
          </div>

          <h3>Tools & Co</h3>
          <div className="skill">
            <div className="skill-name">Figma</div>
            <div
              className={`progress-bar ${isVisible ? "animate" : ""}`}
              style={{ "--target-width": "75%" }}
            >
              <span className="figma-skill"></span>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name">Photoshop</div>
            <div
              className={`progress-bar ${isVisible ? "animate" : ""}`}
              style={{ "--target-width": "75%" }}
            >
              <span className="photoshop-skill"></span>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name">Premiere Pro</div>
            <div
              className={`progress-bar ${isVisible ? "animate" : ""}`}
              style={{ "--target-width": "60%" }}
            >
              <span className="premiere-skill"></span>
            </div>
          </div>
          <div className="skill">
            <div className="skill-name">SEO</div>
            <div
              className={`progress-bar ${isVisible ? "animate" : ""}`}
              style={{ "--target-width": "50%" }}
            >
              <span className="seo-skill"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
