import React, { Component } from 'react';
import './index.css';

class Home extends Component {
  render() {
    return (
      <section id="home" className="home fade-in">
        <div className="home-content">
          <h1>Hello, I'm <span>Lakshmi Narayana</span></h1>
          <p className="subtitle">A passionate Web Developer & Thumbnail Designer 🎨</p>
          <p className="description">
            I craft interactive and responsive web experiences using <strong>React.js</strong> and clean UI principles. <br />
            As a creative designer, I also produce eye-catching YouTube thumbnails and banners to boost engagement. <br />
            I'm constantly learning, building, and sharing with the world through my <a href="#about"><strong>projects</strong></a>and my <a href="https://www.youtube.com/@Lakshminarayana-wh1rr" target="_blank" rel="noopener noreferrer"><strong>YouTube channel</strong></a>.
          </p>
          
        </div>
      </section>
    );
  }
}

export default Home;
