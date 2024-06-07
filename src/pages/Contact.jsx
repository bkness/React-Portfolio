import React from 'react';
import './Contact.css';

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form name='contact v1' method='POST' data-netlify='true' onSubmit={handleSubmit}>
        <input type="hidden" name='form-name' value='contact v1' />
        <div>
          <label>First Name
            <input type="text" name="first-name" />
          </label>
        </div>
        <div>
          <label htmlFor='email'>Email</label> <br />
          <input id='email' type="email" name="email" />
        </div>
        <div>
          <label>Message
            <textarea name="message" rows='7'></textarea>
          </label>
        </div>
        <button type='submit'>Submit The Results</button>
      </form>
    </div>
  );
}



