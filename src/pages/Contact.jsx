import React from 'react';
import './Contact.css'; // Ensure to use the provided Contact.css file

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>If you have any questions, feedback, or inquiries, feel free to get in touch with us by filling out the form below:</p>
      
      <form className="contact-form">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your full name"
          required
        />

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message here"
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <h3>Our Contact Details</h3>
        <p>Email: contact@yourwebsite.com</p>
        <p>Phone: +1 234 567 890</p>
        <p>Address: 123 Clean Street, Green City, Earth</p>
      </div>
    </div>
  );
}

export default Contact;
