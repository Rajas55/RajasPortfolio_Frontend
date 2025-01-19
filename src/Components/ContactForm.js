import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [feedback, setFeedback] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL || 'https://rajasportfolio-backend.onrender.com'}/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setFeedback('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setFeedback('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null; // Prevent rendering if modal is not open

  return (
    <div className="contact-form-modal">
      <button className="contact-form-close" onClick={onClose}>
        &times;
      </button>
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </form>
      {feedback && (
        <div
          className={`contact-form-feedback ${
            feedback.includes('successfully') ? '' : 'error'
          }`}
        >
          {feedback}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
