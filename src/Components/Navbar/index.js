import React, { Component } from 'react';
import './index.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <h2 className="logo">MyPortfolio</h2>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
