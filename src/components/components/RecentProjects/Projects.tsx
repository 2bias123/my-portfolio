import React from "react";
import "./ProjectsStyle.css"
import tauri from "./tauri.jpg"
import codeSnippet from "./image-1.png"
import arrow from "./arrow-up.svg"
import project0 from "./Angels_landing_project0.png"


const Projects: React.FC = () => {
    return (
        <section className="projects" id="projects">
            <h2 className="projects-title">Some of my recent projects</h2>
            <div className="projects-container">
                <a href="https://github.com/2bias123/first-tauri" target="_blank" className="project-container" rel="noreferrer">
                    <img 
                    src={tauri}
                    alt="project" 
                    loading="lazy" 
                    className="project-image"
                    />
                    <h3 className="project-title">Tauri Graphdrawer</h3>
                    <p className="project-description">A simple graph drawing tool with a forontend in react TS and a backend in Rust.</p>
                    <a href="https://github.com/2bias123/first-tauri" target="_blank" className="project-link" rel="noreferrer">Take a look</a><img src={arrow} alt="arrow" className="arrow" />
                </a>
                <a href="https://github.com/SofTob/Project0" target="_blank" className="project-container" rel="noreferrer">                    
                    <img 
                    src={project0}
                    alt="project" 
                    loading="lazy" 
                    className="project-image"
                    />
                    <h3 className="project-title">Travel app</h3>
                    <p className="project-description">Ea mobile application for tracking and sharing travel experiences.</p>
                    <a href="https://github.com/SofTob/Project0" target="_blank" className="project-link" rel="noreferrer">Take a look</a><img src={arrow} alt="arrow" className="arrow" />
                </a>
                <a href="https://github.com/2bias123/my-portfolio" target="_blank" className="project-container" rel="noreferrer">                    
                    <img 
                    src={codeSnippet}
                    alt="project" 
                    loading="lazy" 
                    className="project-image"
                    />
                    <h3 className="project-title">Portfolio website</h3>
                    <p className="project-description">This webpage.</p>
                    <a href="https://github.com/2bias123/my-portfolio" target="_blank" className="project-link" rel="noreferrer">Take a look</a><img src={arrow} alt="arrow" className="arrow" />
                </a>
            </div>
        </section>
    );
};

export default Projects;