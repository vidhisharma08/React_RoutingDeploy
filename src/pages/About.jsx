import React from 'react';
import './About.css'; // Importing the CSS for styling

function About() {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p className="about-intro">
        Welcome to our platform! We are passionate about bringing the latest technology and innovative solutions to enhance your entertainment experience.
      </p>

      <div className="about-details">
        <div className="about-card">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Our Mission"
            className="about-image"
          />
          <h3>Our Mission</h3>
          <p>
            To deliver the most advanced and user-friendly television technology to homes worldwide, ensuring top-notch quality and accessibility.
          </p>
        </div>
        <div className="about-card">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Our Vision"
            className="about-image"
          />
          <h3>Our Vision</h3>
          <p>
            To redefine entertainment by blending cutting-edge technology with exceptional customer service to create an unforgettable experience.
          </p>
        </div>
        <div className="about-card">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Our Values"
            className="about-image"
          />
          <h3>Our Values</h3>
          <p>
            Innovation, integrity, and customer-centricity drive everything we do. We believe in pushing boundaries to meet your expectations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
