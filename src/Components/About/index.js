import React, { Component } from 'react';
import './index.css';

class About extends Component {
  render() {
    return (
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-img">
            <img src="/me.png" alt="Myself" />
          </div>
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              I'm a <strong>Web Developer</strong> skilled in <strong>React.js</strong>, passionate about building clean, responsive, and interactive web applications.
            </p>
            <p>
              I'm also a <strong>Thumbnail Designer</strong> 🖌️ with experience in crafting eye-catching visuals for YouTube videos and digital media. My designs are optimized to grab attention and increase engagement.
            </p>
            <p>
              Additionally, I'm a <strong>YouTuber</strong> 🎥 and the creator of <strong>LN Skill Squad</strong> — a growing online learning community. We create quality educational content across a variety of tech topics to help learners grow.
            </p>
            <p>
              Whether you're a student, professional, or lifelong learner, there's always something new to discover with us.
            </p>
            <a
              href="https://www.youtube.com/@Lakshminarayana-wh1rr"
              target="_blank"
              rel="noopener noreferrer"
              className="youtube-btn"
            >
              Visit My YouTube Channel
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
