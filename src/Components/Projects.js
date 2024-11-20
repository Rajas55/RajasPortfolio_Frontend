// src/components/Projects.js

import React from 'react';
import './Projects.css';

const Projects = ({ isDarkMode }) => {
  const projectList = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built using React and CSS animations. Showcases projects and experience with a vibrant, smooth-flowing UI.",
      techStack: ["React", "CSS", "JavaScript"],
      github: "https://github.com/yourusername/portfolio",
      liveDemo: "https://yourportfolio.com" // Replace with your live portfolio link
    },
    {
      title: "Laptop on Rent Website",
      description: "Developed a full-stack website using Java and Spring Boot, with a secure admin side for daily updates on offers and promotions. Utilized SQL for database design, JavaScript, HTML, and CSS for frontend development.",
      techStack: ["Spring", "Java", "HTML", "CSS", "JS", "SQL", "Thymeleaf"],
      github: "https://github.com/yourusername/laptop-rent-website",
      liveDemo: ""
    },
    {
      title: "Hate Speech Detection",
      description: "Developed an SVM model with Tf-Idf for detecting hate speech types, alongside Logistic Regression for classification. Demonstrated understanding of ML pipelines with data preprocessing, splitting, training, and testing.",
      techStack: ["Python", "ML", "NLP"],
      github: "https://github.com/yourusername/hate-speech-detection",
      liveDemo: ""
    },
    {
      title: "Yogdaan Web Application",
      description: "Built the backend using Spring Boot and PostgreSQL, creating REST APIs with integrated Spring Security. Developed controllers and designed the database.",
      techStack: ["Spring Boot", "PostgreSQL", "Spring Security", "Git"],
      github: "https://github.com/yourusername/yogdaan-web-app",
      liveDemo: ""
    },
    {
      title: "Flight Delay Prediction",
      description: "Created a predictive model using Random Forest and XGBoost to predict flight delays based on historical flight and weather data with over 80% accuracy. Optimized data preprocessing and feature selection.",
      techStack: ["Gradient Boosting", "ML", "XGBoost", "Random Forest"],
      github: "https://github.com/yourusername/flight-delay-prediction",
      liveDemo: ""
    }
  ];

  return (
    <section className={`projects-section ${isDarkMode ? 'dark-mode' : ''}`} id="projects">
      <h2 className="projects-title" data-aos="fade-up">Projects</h2>
      
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div className="project-card" key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            
            <div className="project-tech-stack">
              {project.techStack.map((tech, i) => (
                <span className="tech-badge" key={i}>{tech}</span>
              ))}
            </div>

            <div className="project-links">
              {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>}
              {project.liveDemo && <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
