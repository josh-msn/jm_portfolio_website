import "../App.css";
import React, { useRef, useEffect } from "react";
import Hero from "../components/Hero";
import IndexCards from "../components/IndexCards";
import ContactCard from "../components/ContactCard";
import Footer from "../components/Footer";

export default function Contact() {
  const contactCardRef = useRef(null);

  useEffect(() => {
    if (contactCardRef.current) {
      contactCardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="App">
      <Hero />
      <IndexCards />
      <ContactCard ref={contactCardRef} />
      <Footer />
    </div>
  );
}
