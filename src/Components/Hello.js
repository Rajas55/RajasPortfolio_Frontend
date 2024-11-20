import React from 'react';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm <span className="name-highlight">[Your Name]</span></h1>
        <p className="hero-subtitle">A Passionate Software Developer</p>
        <div className="hero-buttons">
          <Link to="projects" smooth={true} duration={500} className="hero-button">
            View Projects
          </Link>
          <Link to="contact" smooth={true} duration={500} className="hero-button">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
