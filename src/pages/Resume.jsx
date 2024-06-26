import React from "react";
import './Resume.css';

export default function Resume() {
  return (
    <div className="resume-container">
      <h1 className="title">Brandon Michael Kelly</h1>
      <div className="contact-info">
        <div>
          Cottonwood, AZ 86326 | Phone: 928-274-6725<br /></div>
        <a href="mailto:kbrandon863@gmail.com">Email</a> | <a href="https://www.linkedin.com/in/brandon-kelly-367b3730b/" target="_blank">LinkedIn</a> | <a href="https://github.com/bkness" target="_blank">GitHub</a>
      </div>


      <h2 className="section-title">Summary</h2>
      <p className="summary">
        Dedicated and detail orientated Web Developer with a diverse background in bartending, and botany. Skilled in HTML, CSS, JavaScript, and React, with a focus on creating user-friendly and visually appealing web applications. Experienced in multitasking, high-volume environments, inventory management, and customer service from bartending. Proficient in sustainable agricultural practices, composting, and maximizing yield from botany studies. Passionate about leveraging technology to improve lives and seeking a fulfilling career in the dynamic field of web development.      </p>

      <h2 className="section-title">Technical Skills</h2>
      <p className="skills">
        <strong>Languages:</strong> HTML, CSS, JavaScript, React<br />
        <strong>Frameworks & Libraries:</strong> Bootstrap, jQuery, Redux, Handlebars.js, Node.js<br />
        <strong>Tools & Platforms:</strong> Git, GitHub, VS Code, Heroku, MongoDB, Netlify, Render<br />
        <strong>Other:</strong> Responsive Design, RESTful APIs, Agile Methodologies
      </p>

      <h2 className="section-title">Related Experiences</h2>

      <div className="project">
        <strong>Tech Blog</strong> | <a href="https://github.com/bkness/MVC-Tech-Blog" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://mvc--tech-blog-715ec89956fb.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live</a><br />
        Developed a full-stack application for users to post and comment on tech articles.<br />
        <strong>Responsibilities:</strong> Created front-end interface with Handlebars.js, implemented user authentication, and set up RESTful API routes.<br />
        <strong>Technologies:</strong> Node.js, Express, MySQL, Handlebars.js
      </div>

      <div className="project">
        <strong>Random Cocktail Generator</strong> | <a href="https://github.com/bkness/Random-Cocktail-API" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://bkness.github.io/Random-Cocktail-API" target="_blank" rel="noopener noreferrer">Live</a><br />
        Built a web application to generate random cocktail recipes using an external API.<br />
        <strong>Responsibilities:</strong> Designed UI with HTML and CSS, integrated API with JavaScript, and ensured responsive design.<br />
        <strong>Technologies:</strong> HTML, CSS, JavaScript, REST API
      </div>

      <div className="project">
        <strong>Open Weather Database</strong> | <a href="https://github.com/bkness/open-weather-api" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://bkness.github.io/open-weather-api" target="_blank" rel="noopener noreferrer">Live</a><br />
        Created a weather application that fetches and displays weather data for user-selected cities.<br />
        <strong>Responsibilities:</strong> Developed front-end with HTML, CSS, and JavaScript, implemented API calls, and handled data presentation.<br />
        <strong>Technologies:</strong> HTML, CSS, JavaScript, OpenWeatherAPI
      </div>

      <h2 className="section-title">Experience</h2>

      <div className="experience">
        <strong>Creekside American Bistro, Bartender</strong> | March 2019 – January 2021<br />
        Cottonwood, AZ<br />
        Crafted and served signature cocktails, maintained bar inventory, and ensured exceptional customer service.<br />
        <strong>Key Accomplishments:</strong> Recognized for exceptional customer service, led a team during high-volume events.
      </div>

      <div className="experience">
        <strong>Main Stage, Bartender</strong> | June 2015 – November 2023<br />
        Cottonwood, AZ<br />
        On call bartender when they are short staffed. Swiftly making and serving cocktails to patrons on busy nights. Keeping awareness of intoxicated customers to ensure a safe environment for staff and customers.
      </div>

      <div className="experience">
        <strong>Enchantment Resort, Bartender</strong> | March 2018 – March 2019<br />
        Sedona, AZ<br />
        Responsible for serving drinks to the restaurant, Tii Gavo and the entire wine bar. Other responsibilities include stocking, balancing cash drawers, upselling tickets, keeping a clean bar, preparing juices and ingredients for seasonal drinks.
      </div>

      <div className="experience">
        <strong>The Tavern Grill, Server and Bartender</strong> | April 2013 – December 2016<br />
        Cottonwood, AZ<br />
        Expediting food and drinks to servers, taking to-go orders, checking guests into The Tavern Hotel.
      </div>

      <h2 className="section-title">Education</h2>

      <div className="education">
        <strong>Full Stack Web Development Boot Camp Certificate</strong> | February 2024<br />
        Arizona State University, Phoenix, AZ<br />
        Completed an intensive program focused on full-stack development, covering HTML, CSS, JavaScript, React, Node.js, MongoDB, and more. Developed and deployed multiple web applications, gaining hands-on experience in agile development methodologies and project management.
      </div>

      <div className="education">
        <strong>Yavapai Community College</strong> | April 2009<br />
        Cottonwood, AZ
      </div>

      <h2 className="section-title">References</h2>

      <div className="references">
        <p>
          <strong>Jeff Hughes</strong><br />
          General Manager, Che-Ah-Chi<br />
          Phone: 623-882-4842
        </p>
        <p>
          <strong>Tori Kersh</strong><br />
          Food and Beverage Manager, Enchantment<br />
          Phone: 480-993-8357
        </p>
        <p>
          <strong>Rebecca Riffel</strong><br />
          Owner, Main Stage<br />
          Phone: 808-269-3831
        </p>
      </div>
    </div>
  );
}
