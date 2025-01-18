// // src/components/Hero.js

// import React from 'react';
// import './Hero.css';
// import profileImage from '/Users/rajasyardi/my-portfolio-frontend/src/IMG_8896.JPG';
// import Typing from 'react-typing-effect';
// import { FaLinkedin, FaGithub, FaTwitter, FaSun, FaMoon } from 'react-icons/fa';

// const Hero = ({ toggleDarkMode, isDarkMode }) => {
//   return (
//     <section className={`hero ${isDarkMode ? 'dark-mode' : ''}`} id="home">
//       {/* Dark Mode Toggle with Icons */}
//       <div className="toggle-container">
//         <FaSun className="toggle-icon sun-icon" />
//         <input
//           type="checkbox"
//           className="toggle-checkbox"
//           id="darkModeToggle"
//           checked={isDarkMode}
//           onChange={toggleDarkMode}
//         />
//         <label className="toggle-label" htmlFor="darkModeToggle">
//           <span className="toggle-ball"></span>
//         </label>
//         <FaMoon className="toggle-icon moon-icon" />
//       </div>

//       {/* Remaining hero content */}
//       <div className="hero-background-circle"></div> {/* Background Circle */}
//       <div className="floating-shape shape1"></div>
//       <div className="floating-shape shape2"></div>
//       <div className="floating-shape shape3"></div>

//       <div className="hero-content">
//         <div className="hero-greeting">Hello!</div>
//         <h1 className="hero-title">
//           I’m <span className="highlight-name">Rajas Yardi</span>, <br />
//           <Typing
//             text={['Software Developer', 'Problem Solver', 'Creative Coder']}
//             speed={100}
//             eraseSpeed={50}
//             eraseDelay={2000}
//             typingDelay={500}
//           />
//         </h1>
//         <p className="hero-subtitle">
//           Crafting clean, efficient code to solve real-world problems.
//         </p>
//         <div className="hero-buttons">
//           <button className="hero-button primary">Resume</button>
//           <button className="hero-button secondary">Contact Me</button>
//         </div>
//         <div className="social-icons">
//           <a href="https://www.linkedin.com/in/rajas-yardi-6b3871217/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
//           <a href="https://github.com/Rajas55" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
//           <a href="https://twitter.com/rajasyardi" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
//         </div>
//       </div>
//       <div className="hero-image-container">
//         <img src={profileImage} alt="Your Profile" className="hero-image" />
//       </div>
//       <div className="scroll-down-indicator">&#8595;</div>
//     </section>
//   );
// };

// export default Hero;

// src/components/Hero.js

// import React, { useState } from 'react';
// import './Hero.css';
// import ContactForm from './ContactForm'; // Import the ContactForm component
// import profileImage from '/Users/rajasyardi/my-portfolio-frontend/src/IMG_8896.JPG';
// import Typing from 'react-typing-effect';
// import { FaLinkedin, FaGithub, FaTwitter, FaSun, FaMoon } from 'react-icons/fa';

// const Hero = ({ toggleDarkMode, isDarkMode }) => {
//   const [showContactForm, setShowContactForm] = useState(false); // State to toggle the form

//   return (
//     <section className={`hero ${isDarkMode ? 'dark-mode' : ''}`} id="home">
//       {/* Dark Mode Toggle with Icons */}
//       <div className="toggle-container">
//         <FaSun className="toggle-icon sun-icon" />
//         <input
//           type="checkbox"
//           className="toggle-checkbox"
//           id="darkModeToggle"
//           checked={isDarkMode}
//           onChange={toggleDarkMode}
//         />
//         <label className="toggle-label" htmlFor="darkModeToggle">
//           <span className="toggle-ball"></span>
//         </label>
//         <FaMoon className="toggle-icon moon-icon" />
//       </div>

//       {/* Remaining hero content */}
//       <div className="hero-background-circle"></div>
//       <div className="floating-shape shape1"></div>
//       <div className="floating-shape shape2"></div>
//       <div className="floating-shape shape3"></div>

//       <div className="hero-content">
//         <div className="hero-greeting">Hello!</div>
//         <h1 className="hero-title">
//           I’m <span className="highlight-name">Rajas Yardi</span>, <br />
//           <Typing
//             text={['Software Developer', 'Problem Solver', 'Creative Coder']}
//             speed={100}
//             eraseSpeed={50}
//             eraseDelay={2000}
//             typingDelay={500}
//           />
//         </h1>
//         <p className="hero-subtitle">
//           Crafting clean, efficient code to solve real-world problems.
//         </p>
//         <div className="hero-buttons">
//           <button className="hero-button primary">Resume</button>
//           <button
//             className="hero-button secondary"
//             onClick={() => setShowContactForm(!showContactForm)}
//           >
//             Contact Me
//           </button>
//         </div>
//         <div className="social-icons">
//           <a href="https://www.linkedin.com/in/rajas-yardi-6b3871217/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
//           <a href="https://github.com/Rajas55" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
//           <a href="https://twitter.com/rajasyardi" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
//         </div>
//       </div>
//       <div className="hero-image-container">
//         <img src={profileImage} alt="Your Profile" className="hero-image" />
//       </div>
//       <div className="scroll-down-indicator">&#8595;</div>

//       {/* Contact Form Modal */}
//       {showContactForm && (
//         <div className="contact-form-modal">
//           <div className="contact-form-overlay" onClick={() => setShowContactForm(false)}></div>
//           <ContactForm closeForm={() => setShowContactForm(false)} />
//         </div>
//       )}
//     </section>
//   );
// };

// export default Hero;

// import React, { useState } from 'react';
// import './Hero.css';
// import profileImage from '/Users/rajasyardi/my-portfolio-frontend/src/IMG_8896.JPG';
// import Typing from 'react-typing-effect';
// import { FaLinkedin, FaGithub, FaTwitter, FaSun, FaMoon } from 'react-icons/fa';
// import Modal from './Modal';
// import ContactForm from './ContactForm';

// const Hero = ({ toggleDarkMode, isDarkMode }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <section className={`hero ${isDarkMode ? 'dark-mode' : ''}`} id="home">
//       {/* Dark Mode Toggle */}
//       <div className="toggle-container">
//         <FaSun className="toggle-icon sun-icon" />
//         <input
//           type="checkbox"
//           className="toggle-checkbox"
//           id="darkModeToggle"
//           checked={isDarkMode}
//           onChange={toggleDarkMode}
//         />
//         <label className="toggle-label" htmlFor="darkModeToggle">
//           <span className="toggle-ball"></span>
//         </label>
//         <FaMoon className="toggle-icon moon-icon" />
//       </div>

//       {/* Hero Content */}
//       <div className="hero-background-circle"></div>
//       <div className="floating-shape shape1"></div>
//       <div className="floating-shape shape2"></div>
//       <div className="floating-shape shape3"></div>

//       <div className="hero-content">
//         <div className="hero-greeting">Hello!</div>
//         <h1 className="hero-title">
//           I’m <span className="highlight-name">Rajas Yardi</span>, <br />
//           <Typing
//             text={['Software Developer', 'Problem Solver', 'Creative Coder']}
//             speed={100}
//             eraseSpeed={50}
//             eraseDelay={2000}
//             typingDelay={500}
//           />
//         </h1>
//         <p className="hero-subtitle">
//           Crafting clean, efficient code to solve real-world problems.
//         </p>
//         <div className="hero-buttons">
//           <button className="hero-button primary">Resume</button>
//           <button
//             className="hero-button secondary"
//             onClick={() => setIsModalOpen(true)}
//           >
//             Contact Me
//           </button>
//         </div>
//         <div className="social-icons">
//           <a href="https://www.linkedin.com/in/rajas-yardi-6b3871217/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
//           <a href="https://github.com/Rajas55" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
//           <a href="https://twitter.com/rajasyardi" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
//         </div>
//       </div>
//       <div className="hero-image-container">
//         <img src={profileImage} alt="Your Profile" className="hero-image" />
//       </div>
//       <div className="scroll-down-indicator">&#8595;</div>

//       {/* Modal for Contact Form */}
//       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
//         <ContactForm />
//       </Modal>
//     </section>
//   );
// };

// export default Hero;

import React, { useState } from 'react'; // Make sure this line is not duplicated
import './Hero.css';
import profileImage from '/Users/rajasyardi/my-portfolio-frontend/src/IMG_8896.JPG';
import Typing from 'react-typing-effect';
import { FaLinkedin, FaGithub, FaTwitter, FaSun, FaMoon } from 'react-icons/fa';
import Modal from './Modal';
import ContactForm from './ContactForm';

const Hero = ({ toggleDarkMode, isDarkMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={`hero ${isDarkMode ? 'dark-mode' : ''}`} id="home">
      {/* Dark Mode Toggle */}
      <div className="toggle-container">
        <FaSun className="toggle-icon sun-icon" />
        <input
          type="checkbox"
          className="toggle-checkbox"
          id="darkModeToggle"
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />
        <label className="toggle-label" htmlFor="darkModeToggle">
          <span className="toggle-ball"></span>
        </label>
        <FaMoon className="toggle-icon moon-icon" />
      </div>

      {/* Hero Content */}
      <div className="hero-background-circle"></div>
      <div className="floating-shape shape1"></div>
      <div className="floating-shape shape2"></div>
      <div className="floating-shape shape3"></div>

      <div className="hero-content">
        <div className="hero-greeting">Hello!</div>
        <h1 className="hero-title">
          I’m <span className="highlight-name">Rajas Yardi</span>, <br />
          <Typing
            text={['Software Developer', 'Problem Solver', 'Creative Coder']}
            speed={100}
            eraseSpeed={50}
            eraseDelay={2000}
            typingDelay={500}
          />
        </h1>
        <p className="hero-subtitle">
          Crafting clean, efficient code to solve real-world problems.
        </p>
        <div className="hero-buttons">
          <button className="hero-button primary">Resume</button>
          <button
            className="hero-button secondary"
            onClick={() => setIsModalOpen(true)}
          >
            Contact Me
          </button>
        </div>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/rajas-yardi-6b3871217/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Rajas55"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/rajasyardi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
      <div className="hero-image-container">
        <img src={profileImage} alt="Your Profile" className="hero-image" />
      </div>
      <div className="scroll-down-indicator">&#8595;</div>

      {/* Modal for Contact Form */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ContactForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </Modal>
    </section>
  );
};

export default Hero;


