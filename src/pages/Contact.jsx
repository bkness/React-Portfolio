import React from 'react';

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        console.log('Form successfully submitted');
        // optionally redirect user to a new page here 
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
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
          <div data-netlify-recaptcha='true'></div>
        </div>
        <ul className="actions">
          <li><input type="submit" value="Send Message" /></li>
        </ul>
      </form>
    </div>
  );
}
