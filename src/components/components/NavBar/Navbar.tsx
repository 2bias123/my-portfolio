import React from "react";
import "./NavBarStyle.css"
import { HashLink } from 'react-router-hash-link';


const Navbar: React.FC = () => {
    return(
        <div className="nav">
            <h1><HashLink to="#" smooth className="nav-links">Tobais Meyer Innleggen</HashLink></h1>
            <ul>
                {/* These should be links to diffrent parts of the page*/}
                <li>
                    <HashLink smooth to="#about" className="nav-link">About</HashLink>
                </li>
                <li>
                    <HashLink smooth to="#resume" className="nav-link">Resume</HashLink>
                </li>
                <li>
                    <HashLink smooth to="#projects" className="nav-link">Projects</HashLink>
                </li>
                <li>Contact</li>
            </ul>
            <button className="burger-menu">
                <span>&#9776;</span>
            </button> 
        </div>
    );
}    

export default Navbar;