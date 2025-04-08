import React, { Component } from 'react';
import './index.css';


class Projects extends Component {
  render() {
    const thumbnailProjects = [
      {
        title: 'YouTube Thumbnail Pack',
        image: '/thumb1.png',
        description: 'A colorful, high-converting thumbnail design set.',
        link: 'https://www.youtube.com/watch?v=N8IkK7FjCgw&t=60s'
      },
      {
        title: 'Vlog Thumbnails',
        image: '/thumb2.png',
        description: 'Designed for vlogs and explore new things.',
        link: 'https://www.youtube.com/watch?v=dYEYebUJ5Mw'
      },
      {
        title: 'Ai Thumbnails',
        image: '/thumb3.png',
        description: 'Creative and click-worthy designs for Ai content.',
        link: 'https://www.youtube.com/watch?v=nyFPYRJdwN0'
      }
    ];

    const devProjects = [
      {
        title: 'Hospital Management System',
        image: '/thumb4.jpeg',
        description: 'A full-stack MERN app to manage hospital records, appointments, and staff.',
        link: 'https://github.com/Pavan-Nerella/Ethnus_mern_project'
      },
      {
        title: 'Bus reservation system',
        image: '/thumb6.png',
        description: ' A cool website ,easily book buses here!',
        link: 'https://github.com/Narayana234/Busresevation'
      },

      {
        title: 'Messaging App',
        image: '/thum5.jpeg',
        description: 'Android messaging app built with Java, featuring real-time chat using Firebase.',
        link: 'https://github.com/yourusername/messaging-app'
      }
    ];

    return (
      <section id="projects" className="projects">
        <h2>My Projects</h2>

        <h3 className="project-subheading">Thumbnail Design Projects 🎨</h3>
        <div className="projects-container">
          {thumbnailProjects.map((project, index) => (
            <div
              className="project-card"
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img src={project.image} alt={project.title} />
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>

        <h3 className="project-subheading">Development Projects 💻</h3>
        <div className="projects-container">
          {devProjects.map((project, index) => (
            <div className="project-card float-up" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
            <img src={project.image} alt={project.title} />
            <div className="project-card-content">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
          
          ))}
        </div>
      </section>
    );
  }
}

export default Projects;
