import React, { useState } from 'react';
import { Calendar, Code, Briefcase, GitBranch, X, ChevronRight } from 'lucide-react';
import '../css/project.css';

const projects = [
  {
    title: 'eCommerce Site',
    company: 'Final Year Project',
    date: '2022',
    description: [
     `Developed a full-stack e-commerce platform using Node.js (backend) and React.js (frontend) to gain practical experience with modern web technologies. This project covered key concepts including database basics, single-page applications, virtual DOM, component-based architecture, and Mongoose schema creation.`
    ],
    techStack: ['Node.js', 'React.js', 'MongoDB'],
    githubLinks: {
      backend: 'https://github.com/Jaykaravadra77/E-Mall_Backend',
      frontend: 'https://github.com/Jaykaravadra77/E-Mall_frontend'
    },
  },
  {
    title: 'Blogging Site',
    company: 'Yudiz Solutions',
    date: '2022',
    description: [
      'Worked on a blogging platform with real-time cricket data updates.',
      'Optimized existing code for better performance. Implemented new features like liveBlog, SEO management, SiteMap and RSS feed.',
      'Implemented third party APIs integration for keeping data up to date.'
    ],
    techStack: ['Node.js', 'GraphQL(Apollo-federation)', 'Redis', 'MongoDB', 'Express.js'],
  },
  {
    title: 'Form Management System',
    company: 'Yudiz Solutions',
    date: '2023',
    description: [
      'Built a system for creating and managing customized online forms.',
      'Implemented dynamic fields for pre-filling common data.',
    ],
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'Redis'],
  },
  {
    title: 'Booking System',
    company: 'Yudiz Solutions',
    date: '2024',
    description: [
      'Developed a court booking platform.',
      'Integrated Stripe for secure payment processing and Implemented OneSignal for push notifications.',
    ],
    techStack: ['Node.js', 'Fastify', 'MongoDB', 'Redis'],
  },
  {
    title: 'Navratri Pass Booking System',
    company: 'Yudiz Solutions',
    date: '2023',
    description: [
      'Developed a Booking Platform for Navratri pass.',
      'Emphasize the seamless integration of QR code generation and scanning for ticket validation.',
    ],
    techStack: ['Node.js', 'express.js', 'MongoDB', 'Redis'],
  },
  {
    title: 'Portfolio',
    company: 'Personal',
    date: '2024',
    description: [
      'Developed a comprehensive personal portfolio by utilizing AI tools such as ChatGPT and Claude AI.',
    ],
    techStack: ['React.js', 'CSS'],
  }
];

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-container">
      <div className="projects-content">
        <h2 className="projects-title">My Projects</h2>
        <p className="projects-instruction">Click on a project to view details</p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card" onClick={() => openProjectDetails(project)}>
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-company">{project.company}</p>
              <p className="project-card-date">{project.date}</p>
              <ChevronRight className="project-card-icon" size={20} />
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeProjectDetails}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeProjectDetails}>
              <X size={24} />
            </button>
            <h3 className="project-title">{selectedProject.title}</h3>
            <div className="project-meta">
              <span className="project-company">
                <Briefcase size={16} />
                {selectedProject.company}
              </span>
              <span className="project-date">
                <Calendar size={16} />
                {selectedProject.date}
              </span>
            </div>
            <ul className="project-description">
              {selectedProject.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <div className="project-footer">
              <div className="project-tech-stack">
                <h4><Code size={16} /> Tech Stack:</h4>
                <ul>
                  {selectedProject.techStack.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
              {selectedProject.githubLinks && (
                <div className="project-links">
                  <h4><GitBranch size={16} /> GitHub Links:</h4>
                  <a href={selectedProject.githubLinks.backend} target="_blank" rel="noopener noreferrer">Backend</a>
                  <a href={selectedProject.githubLinks.frontend} target="_blank" rel="noopener noreferrer">Frontend</a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;