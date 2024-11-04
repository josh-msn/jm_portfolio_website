import "../App.css";
import React from "react";
import Hero from "../components/Hero";
import IndexCards from "../components/IndexCards";
import ProjectGrid from "../components/ProjectGrid";
import projects from "../projects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="App">
      <Hero />

      <IndexCards />
      <ProjectGrid projects={projects} />
      <Footer />
    </div>
  );
}
