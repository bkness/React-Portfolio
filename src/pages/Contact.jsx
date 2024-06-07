import React from 'react';
import ContactForm from './ContactForm.jsx'; // Import the ContactForm component
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <ContactForm /> {/* Use the ContactForm component here */}
    </div>
  );
}
