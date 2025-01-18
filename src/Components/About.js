// src/components/About.js

import React from 'react';
import './About.css';

const About = ({ isDarkMode }) => {
  const image2 = "https://res.cloudinary.com/drjqn1dre/image/upload/v1737167301/image2_dsfdou.png"; // Replace with your Cloudinary URL

  return (
    <section className={`about-section ${isDarkMode ? 'dark-mode' : ''}`} id="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            I am a passionate software developer with a strong foundation in computer science and hands-on experience across software and hardware domains. Currently pursuing my Master's in Computer Science at Syracuse University, I bring a mix of full-stack development, machine learning, and software engineering skills to my work.
          </p>
          
          {/* Quick Facts Section */}
          <div className="quick-facts" data-aos="fade-up">
            <h3>Quick Facts</h3>
            <div className="facts-grid">
              <div className="fact">📍 Based in Syracuse, NY</div>
              <div className="fact">💻 Full-Stack Developer</div>
              <div className="fact">🎓 MS in Computer Science</div>
              <div className="fact">🏆 Proficient in Java, Python, React, SQL</div>
            </div>
          </div>

          {/* Skills Section with Circular Bars */}
          <h3 className="about-subtitle">Skills & Expertise</h3>
          <div className="skills" data-aos="fade-up">
            <div className="skill-circle">
              <span>Java</span>
              <div className="circle" style={{ '--percentage': '90%' }}>90%</div>
            </div>
            <div className="skill-circle">
              <span>Python</span>
              <div className="circle" style={{ '--percentage': '80%' }}>80%</div>
            </div>
            <div className="skill-circle">
              <span>SQL</span>
              <div className="circle" style={{ '--percentage': '75%' }}>75%</div>
            </div>
            <div className="skill-circle">
              <span>React</span>
              <div className="circle" style={{ '--percentage': '80%' }}>80%</div>
            </div>
          </div>

          {/* Timeline Section */}
          <h3 className="about-subtitle">Experience Timeline</h3>
          <div className="timeline">
            <div className="timeline-item" data-aos="fade-right">
              <span>2023-25</span>
              <p>Pursuing Masters of Science in Computer Science at Syracuse University</p>
            </div>
            <div className="timeline-item" data-aos="fade-right" data-aos-delay="100">
              <span>2022</span>
              <p>Software Intern at Encora Pvt. Ltd.</p>
            </div>
            <div className="timeline-item" data-aos="fade-right" data-aos-delay="200">
              <span>2021</span>
              <p>IT Intern at Micromate Computer and Peripherals Pvt. Ltd.</p>
            </div>
            <div className="timeline-item" data-aos="fade-right" data-aos-delay="200">
              <span>2019-23</span>
              <p>Bachelors of Technology at Vishwakarma Institute of Technology</p>
            </div>
          </div>
        </div>

        {/* Unique Shape for Image */}
        <div className="about-image" data-aos="fade-left">
          <img src={image2} alt="Description of image" />
        </div>
      </div>
    </section>
  );
};

export default About;
