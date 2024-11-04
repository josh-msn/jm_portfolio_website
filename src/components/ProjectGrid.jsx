import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import "./ProjectGrid.css";
import { LightModeContext } from "../ModeContext";

function createCard(project) {
  return (
    <ProjectCard
      key={project.id}
      thumbnail={project.thumbnail}
      title={project.title}
      type={project.type}
      logos={project.logos}
      url={project.url}
    />
  );
}

function ProjectGrid({ projects }) {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeFilter, setActiveFilter] = useState("All");
  const { lightMode } = React.useContext(LightModeContext);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredProjects]);

  const handleFilter = (category) => {
    setActiveFilter(category);
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) =>
        project.category.includes(category)
      );
      setFilteredProjects(filtered);
    }
  };

  const shuffleProjects = () => {
    const shuffled = [...filteredProjects];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setFilteredProjects(shuffled);
    setCurrentPage(1);
  };

  const isActive = (category) => {
    return activeFilter === category;
  };

  const getButtonClass = (category) => {
    const baseClass = "filter-button";
    const modeClass = lightMode ? "filter-button-light" : "filter-button-dark";
    const activeClass = isActive(category) ? `active-${modeClass}` : "";
    return `${baseClass} ${modeClass} ${activeClass}`;
  };

  // Pagination logic
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  return (
    <div className="project-container">
      <div className="filter-container">
        <div>
          <div className="filter">
            {[
              "All",
              "HTML / CSS",
              "React",
              "JavaScript",
              "Python",
              "SQL",
              "WordPress",
              "Design",
            ].map((category) => (
              <button
                key={category}
                onClick={() => handleFilter(category)}
                type="button"
                className={getButtonClass(category)}
              >
                {category}
              </button>
            ))}
            {/*
            <button
              onClick={shuffleProjects}
              type="button"
              className="shuffle-button"
              title="Projekte zufällig anordnen"
            >
              🎲
            </button>
            */}
          </div>
        </div>
      </div>
      <div className="project-grid">
        {currentProjects.map((project) => createCard(project))}
      </div>
      <div className="pagination">
        {/* Numbered Pagination */}
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          zurück
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`pagination-button ${
              currentPage === index + 1 ? "active-page" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="pagination-button"
        >
          weiter
        </button>
      </div>
    </div>
  );
}

export default ProjectGrid;
