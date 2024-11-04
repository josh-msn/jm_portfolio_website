import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LightModeProvider, LightModeContext } from "./ModeContext";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Imprint from "./pages/Imprint";
import Privacy from "./pages/Privacy";
import NoPage from "./pages/NoPage";
import ScrollToTop from "./components/ScrollToTop";
import BackToTopButton from "./components/BackToTopButton";
import ProjectPortfolioWebsite from "./pages/project_pages/PortfolioWebsite";
import ProjectErtragsrechner from "./pages/project_pages/Ertragsrechner";
import ProjectIngGellert from "./pages/project_pages/IngGellert";
import ProjectBodenstaendig from "./pages/project_pages/Bodenstaendig";
import ProjectBodenstaendigShop from "./pages/project_pages/Bodenstaendigshop";
import ProjectTischlerei from "./pages/project_pages/Tischlerei";
import ProjectWiderrufsformular from "./pages/project_pages/Widerrufsformular";
import ProjectAirBnB_DB from "./pages/project_pages/AirBnB_DB";
import ProjectHabitTracker from "./pages/project_pages/HabitTracker";

function App() {
  return (
    <LightModeProvider>
      <AppInner />
    </LightModeProvider>
  );
}

function AppInner() {
  const { lightMode } = React.useContext(LightModeContext);
  return (
    <div className={lightMode ? "App App-light" : "App App-dark"}>
      <BrowserRouter>
        <ScrollToTop />
        <BackToTopButton />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route
            path="/portfoliowebsite"
            element={<ProjectPortfolioWebsite />}
          />
          <Route path="/ertragsrechner" element={<ProjectErtragsrechner />} />
          <Route path="/habittracker" element={<ProjectHabitTracker />} />
          <Route path="/inggellert" element={<ProjectIngGellert />} />
          <Route path="/bodenstaendig" element={<ProjectBodenstaendig />} />
          <Route path="/tischlerei" element={<ProjectTischlerei />} />
          <Route
            path="/widerrufsformular"
            element={<ProjectWiderrufsformular />}
          />
          <Route path="/airbnbdb" element={<ProjectAirBnB_DB />} />
          <Route
            path="/bodenstaendigshop"
            element={<ProjectBodenstaendigShop />}
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
