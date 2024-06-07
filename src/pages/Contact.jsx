import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="subject" value="New lead from %{formName} (%{submissionId})" />
        <div>
          <label>Your Name: <input type="text" name="name" /></label>
        </div>
        <div>
          <label>Your Email: <input type="email" name="email" /></label>
        </div>
        <div>
          <label>Message: <textarea name="message"></textarea></label>
        </div>
        <button type='submit'>Send</button>
      </form>
    </div>
  );
}
