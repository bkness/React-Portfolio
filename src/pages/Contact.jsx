import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Optional: Handle form submission logic here
    console.log('Form submitted:', formData);

    // Reset form after submission
    setFormData({
      name: '',
      message: ''
    });

    // If using Netlify forms, this line will enable submission
    event.target.submit();
  };

  return (
    <div className="contact-container">
      <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <div className='input'>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className='input'>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="7"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit The Results</button>
      </form>
    </div>
  );
}
