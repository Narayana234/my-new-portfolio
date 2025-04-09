import React, { Component } from 'react';
import './index.css';

class Navbar extends Component {
  state = {
    isOpen: false,
  };

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isOpen } = this.state;

    return (
      <nav className="navbar">
        <div className="logo">LN Portfolio</div>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#home" onClick={this.toggleMenu}>Home</a>
          <a href="#about" onClick={this.toggleMenu}>About Me</a>
          <a href="#projects" onClick={this.toggleMenu}>Projects</a>
          <a href="#contact" onClick={this.toggleMenu}>Contact</a>
        </div>
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={this.toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    );
  }
}

export default Navbar;
