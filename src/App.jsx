import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importieren von Routes und Route
import { useTranslation } from 'react-i18next'; // Für Übersetzungen

import './../i18n'; // Importiere die i18n-Konfiguration
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from "./components";
import Impressum from './components/Imprint'; // Importieren der Impressum-Seite

const App = () => {
  const { i18n } = useTranslation(); // Hole den i18n Kontext

  // Funktion zum Ändern der Sprache
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); // Sprache wechseln
  };

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar handleLanguageChange={handleLanguageChange} />
        <Routes>
          <Route path="/" element={
            <>
              <div id="hero" className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Hero />
              </div>
              <div id="about">
                <About />
              </div>
              <div id="experience">
                <Experience />
              </div>
              <div id="technologies">
                <Tech />
              </div>
              <div id="projects">
                <Works />
              </div>
              <div id="contact" className='relative z-0'>
                <Contact />
                <StarsCanvas />
              </div>
              <Footer />
            </>
          } />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;