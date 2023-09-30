import React from "react";
import "./ProjectsStyle.css"
import tauri from "./tauri.jpg"
import codeSnippet from "./image-1.png"
import arrow from "./arrow-up.svg"
import project0 from "./Angels_landing_project0.png"


const Projects: React.FC = () => {
    return (
        <section className="projects" id="projects">
            <h2 className="projects-title">Noen av mine nylige prosjekter</h2>
            <div className="projects-container">
                <a href="https://github.com/2bias123/first-tauri" target="_blank" className="project-container" rel="noreferrer">
                    <img 
                    src={tauri}
                    alt="project" 
                    loading="lazy" 
                    className="project-image"
                    />
                    <h3 className="project-title">Tauri Graftegner</h3>
                    <p className="project-description">Et enkelt graftegnerprogram med backend i Rust og frontend i React.ts.</p>
                    <a href="https://github.com/2bias123/first-tauri" target="_blank" className="project-link" rel="noreferrer">Ta en titt</a><img src={arrow} alt="arrow" className="arrow" />
                </a>
                <a href="https://github.com/SofTob/Project0" target="_blank" className="project-container" rel="noreferrer">                    
                    <img 
                    src={project0}
                    alt="project" 
                    loading="lazy" 
                    className="project-image"
                    />
                    <h3 className="project-title">Reiseapp</h3>
                    <p className="project-description">En mobilapplikasjon for lagring og deling av reiseopplevelser</p>
                    <a href="https://github.com/SofTob/Project0" target="_blank" className="project-link" rel="noreferrer">Ta en titt</a><img src={arrow} alt="arrow" className="arrow" />
                </a>
                <a href="https://github.com/2bias123/my-portfolio" target="_blank" className="project-container" rel="noreferrer">                    
                    <img 
                    src={codeSnippet}
                    alt="project" 
                    loading="lazy" 
                    className="project-image"
                    />
                    <h3 className="project-title">Portefølje nettside</h3>
                    <p className="project-description">Denne nettsiden.</p>
                    <a href="https://github.com/2bias123/my-portfolio" target="_blank" className="project-link" rel="noreferrer">Ta en titt</a><img src={arrow} alt="arrow" className="arrow" />
                </a>
            </div>
        </section>
    );
};

export default Projects;