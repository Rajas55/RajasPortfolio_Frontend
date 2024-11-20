// src/components/Extracurricular.js

import React from 'react';
import './Extracurricular.css';

const Extracurricular = ({ isDarkMode }) => {
  return (
    <section className={`extracurricular-section ${isDarkMode ? 'dark-mode' : ''}`} id="extracurricular">
      <h2 className="extracurricular-title" data-aos="fade-up">Extracurricular Activities</h2>
      
      <div className="extracurricular-content">
        {/* State Cricket Team Captain */}
        <div className="activity" data-aos="fade-right">
          <h3 className="activity-title">State Cricket Team Captain</h3>
          <p className="activity-description">
            Led the Pune, India cricket team, demonstrating leadership, strategy, and teamwork. Oversaw team dynamics and motivated players to perform at their best.
          </p>
        </div>

        {/* Saarthi Volunteer */}
        <div className="activity" data-aos="fade-up">
          <h3 className="activity-title">Saarthi Volunteer</h3>
          <p className="activity-description">
            Volunteered for the People's Assistance Social Welfare and Development Committee (SW&D) in 2021. Assisted elderly individuals in learning technology, fostering digital literacy and independence.
          </p>
        </div>

        {/* Marathon Runner */}
        <div className="activity" data-aos="fade-up">
          <h3 className="activity-title">Marathon Runner</h3>
          <p className="activity-description">
            Participated in multiple marathons, embracing endurance challenges, setting personal goals, and developing resilience through consistent training and discipline.
          </p>
        </div>

        {/* Concessions Supervisor */}
        <div className="activity" data-aos="fade-left">
          <h3 className="activity-title">Concessions Supervisor – JMA Wireless Dome</h3>
          <p className="activity-description">
            Currently serving as a Concessions Supervisor at the JMA Wireless Dome, Syracuse, New York. Oversee operations, manage inventory, and ensure a positive customer experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;
