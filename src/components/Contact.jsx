import React from 'react';
import { FaEnvelope, FaLinkedin, FaMobile } from 'react-icons/fa';
import '../css/contact.css';


 
const Contact = () => {
  return (
    <div className="contact-wrapper">
      <h2 className="contact-header">Contact Me</h2>
      <ul className="contact-details">
        <li className="contact-detail">
          <FaLinkedin className="icon" />
          <a className="link" href="https://www.linkedin.com/in/jaykaravadra/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li className="contact-detail">
          <FaEnvelope className="icon" />
          <a className="link" href="mailto:jaykaravadra77@gmail.com">
            jaykaravadra77@gmail.com
          </a>
        </li>
        <li className="contact-detail">
          <FaMobile className="icon" />
          <a className="link" href="tel:7046410074">7046410074</a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;

 