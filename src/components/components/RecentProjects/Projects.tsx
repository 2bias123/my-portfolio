import React from "react";
import "./ProjectsStyle.css"


const Projects: React.FC = () => {
    return (
        <section className="projects">
            <h2 className="projects-title">Some Of My Recent Projects</h2>
            <div className="projects-container">
                <div className="project-container project-card">
                    <img 
                    src="https://via.placeholder.com/150"
                    alt="project" 
                    loading="lazy" 
                    className="project-image"
                    />
                    <h3 className="project-title">Rust Train game</h3>
                    <p className="project-description">A simple game made in rust</p>
                    <a href="#" className="project-link">View Project</a>
                </div>
                <div className="project-container project-card">
                    <img 
                    src="https://via.placeholder.com/150"
                    alt="project" 
                    loading="lazy" 
                    className="project-image"
                    />
                    <h3 className="project-title">Portfolio Website</h3>
                    <p className="project-description">This website</p>
                    <a href="#" className="project-link">View Project</a>
                </div>
            </div>
        </section>
    );
};

export default Projects;