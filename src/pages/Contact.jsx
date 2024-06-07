import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form name="contact" method="POST" data-netlify="true" enctype="multipart/form-data">
        <input type="hidden" name="form-name" value="contact" />
        <div className="contact-input">
          <input type="text" name="name" id="name" placeholder="Name" />
        </div>
        <div className="contact-input">
          <input type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div className="field">
          <textarea name="message" id="message" placeholder="Message" rows="7"></textarea>
        </div>
        <div className="field">
          <input type='file' name='myfile' id='myfile' placeholder='Upload File' rows='7' />
        </div>
        <div className="field">
          <div data-netlify-recaptcha="true"></div>
        </div>
        <ul className="actions">
          <li><input type="submit" value="Send Message" /></li>
        </ul>
      </form>
    </div>
  );
}
