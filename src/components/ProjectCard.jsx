import React from "react";
import "./ProjectCard.css";
import { useNavigate } from "react-router-dom";
import { LightModeContext } from "../ModeContext";

function ProjectCard(props) {
  const navigate = useNavigate();
  const { lightMode } = React.useContext(LightModeContext);

  return (
    <div
      className={
        lightMode
          ? "project-card project-card-light"
          : "project-card project-card-dark"
      }
      onClick={() => navigate(props.url)}
    >
      <img
        src={props.thumbnail}
        alt="Project Thumbnail"
        className="project-thumbnail"
      />
      <div className="project-card-content">
        <h3 className="project-title">{props.title}</h3>
        <p className="project-type">{props.type}</p>
      </div>
      <div className="project-logos">
        {props.logos.map((logo, index) => (
          <img key={index} src={logo} alt="Project Logo" />
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
