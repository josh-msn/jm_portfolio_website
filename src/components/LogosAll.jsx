import React, { useState, useEffect, useRef } from "react";
import "./LogosAll.css";

function LogosAll() {
  const icons = [
    {
      src: require("../assets/images/icon_html.webp"),
      alt: "HTML",
      name: "HTML",
    },
    { src: require("../assets/images/icon_css.webp"), alt: "CSS", name: "CSS" },
    {
      src: require("../assets/images/icon_js.webp"),
      alt: "JavaScript",
      name: "JavaScript",
    },
    {
      src: require("../assets/images/icon_react.webp"),
      alt: "React",
      name: "React",
    },
    {
      src: require("../assets/images/icon_python.webp"),
      alt: "Python",
      name: "Python",
    },
    { src: require("../assets/images/icon_sql.webp"), alt: "SQL", name: "SQL" },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  // Referenz für den Container der Icons
  const containerRef = useRef(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  useEffect(() => {
    // Funktion, die überprüft, ob außerhalb des Containers geklickt wurde
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setActiveIndex(null);
      }
    };

    // Füge den Event-Listener hinzu
    document.addEventListener("click", handleClickOutside);

    // Entferne den Event-Listener beim Unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="logos-techstack" ref={containerRef}>
      {icons.map((icon, index) => (
        <div
          className={`icon-container ${activeIndex === index ? "active" : ""}`}
          key={index}
          onClick={() => handleClick(index)}
        >
          <img src={icon.src} alt={icon.alt} />
          <span className="icon-text">{icon.name}</span>
        </div>
      ))}
    </div>
  );
}

export default LogosAll;
