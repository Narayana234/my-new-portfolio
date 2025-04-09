import React, { Component } from 'react';
import './index.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
class Contact extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
  }

  sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_lem4c7e',
      'template_wbvgbyt',
      this.formRef.current,
      'e9uEw5dzX3jeL5CKu'
    )
    .then((result) => {
      alert('Message sent successfully!');
      this.formRef.current.reset();
    }, (error) => {
      alert('Failed to send message. Please try again.');
    });
  }

  render() {
    return (
      <section id="contact" className="contact-section">
        <h2 className="contact-title">Contact Me</h2>

        <form ref={this.formRef} onSubmit={this.sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        <div className="social-links fade-in">
          <a href="https://www.linkedin.com/in/lakshminarayana-59245a247/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Narayana234" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:amlnarayana7207@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </section>
    );
  }
}

export default Contact;
