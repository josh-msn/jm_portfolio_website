import "../App.css";
import React from "react";
import Hero from "../components/Hero";
import IndexCards from "../components/IndexCards";
import AboutCard from "../components/AboutCard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="App">
      <Hero />
      <IndexCards />
      <AboutCard />
      <Footer />
    </div>
  );
}
