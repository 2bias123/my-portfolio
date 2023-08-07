import React from "react";
import "./ProjectsStyle.css"
import tauri from "./tauri.jpg"
import codeSnippet from "./image-1.png"


const Projects: React.FC = () => {
    return (
        <section className="projects" id="projects">
            <h2 className="projects-title">Noen av mine nylige prosjekter</h2>
            <div className="projects-container">
                <div className="project-container project-card">
                    <img 
                    src={tauri}
                    alt="project" 
                    loading="lazy" 
                    className="project-image"
                    />
                    <h3 className="project-title">Tauri Graftegner</h3>
                    <p className="project-description">Et enkelt graftegnerprogram med backend i Rust og frontend i React.ts.</p>
                    <a href="https://github.com/2bias123/first-tauri" className="project-link">Vis Prosjektet</a>
                </div>
                <div className="project-container project-card">
                    <img 
                    src={codeSnippet}
                    alt="project" 
                    loading="lazy" 
                    className="project-image"
                    />
                    <h3 className="project-title">Portefølje nettside</h3>
                    <p className="project-description">Denne nettsiden.</p>
                    <a href="#" className="project-link">Vis Prosjektet</a>
                </div>
            </div>
        </section>
    );
};

export default Projects;