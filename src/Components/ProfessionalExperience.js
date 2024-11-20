// src/components/ProfessionalExperience.js

import React from 'react';
import './ProfessionalExperience.css';

const ProfessionalExperience = ({ isDarkMode }) => {
  const experiences = [
    {
      title: "Software Intern",
      company: "Encora Pvt. Ltd.",
      location: "Pune, India",
      dates: "May 2023 – July 2023",
      description: "Worked on a full-stack development project, implementing features and enhancing system performance using Spring Boot and Java.",
    },
    {
      title: "IT Intern",
      company: "Micromate Computer and Peripherals Pvt. Ltd.",
      location: "Pune, India",
      dates: "Oct. 2021 – Feb. 2022",
      description: "Managed hardware troubleshooting and network setup, supporting seamless office IT operations.",
    },
    {
      title: "Concessions Supervisor",
      company: "JMA Wireless Dome",
      location: "Syracuse, NY, USA",
      dates: "2023 – Current",
      description: "Overseeing operations, managing inventory, and ensuring positive customer experiences at the JMA Wireless Dome.",
    },
  ];

  return (
    <section className={`professional-experience-section ${isDarkMode ? 'dark-mode' : ''}`} id="experience">
      <h2 className="experience-title" data-aos="fade-up">Professional Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
            <div className="timeline-content">
              <h3 className="experience-position">{exp.title}</h3>
              <p className="experience-company">{exp.company} - {exp.location}</p>
              <p className="experience-dates">{exp.dates}</p>
              <p className="experience-description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalExperience;
