// src/App.js

import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Extracurricular from './Components/ExtraCurricular';
import Projects from './Components/Projects';
import ProfessionalExperience from './Components/ProfessionalExperience';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'app dark-mode' : 'app'}>
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Hero toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Extracurricular isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <ProfessionalExperience isDarkMode={isDarkMode} /> {/* Add Professional Experience section */}
    </div>
  );
}

export default App;

