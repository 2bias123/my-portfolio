import React from "react";
import "./ProjectsStyle.css"
import rust from "../SkillSection/assets/rust.svg"


const Projects: React.FC = () => {
    return (
        <section className="projects" id="projects">
            <h2 className="projects-title">Noen av mine nylige prosjekter</h2>
            <div className="projects-container">
                <div className="project-container project-card">
                    <img 
                    src={rust}
                    alt="project" 
                    loading="lazy" 
                    className="project-image"
                    />
                    <h3 className="project-title">Rust Train game</h3>
                    <p className="project-description">Et enkelt spill laget i Rust. Spillet er basert på et kjent tog inspiretrt brettspill.</p>
                    <a href="https://github.com/2bias123/train-game" className="project-link">Vis Prosjektet</a>
                </div>
                <div className="project-container project-card">
                    <img 
                    src="https://via.placeholder.com/150"
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