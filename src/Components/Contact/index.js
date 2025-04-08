import React, { Component } from 'react';
import './index.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      submitted: false
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      name: '',
      email: '',
      message: '',
      submitted: true
    });

    // Optionally: set timeout to remove thank you message
    setTimeout(() => {
      this.setState({ submitted: false });
    }, 4000);
  };

  render() {
    const { name, email, message, submitted } = this.state;

    return (
      <section id="contact" className="contact">
        <h2>Contact Me</h2>

        {submitted && <p className="thank-you">Thanks for reaching out! 💌</p>}

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={this.handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={this.handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={message}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Send</button>
        </form>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/lakshminarayana-59245a247/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/Narayana234" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:amlnarayana7207@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </section>
    );
  }
}

export default Contact;
