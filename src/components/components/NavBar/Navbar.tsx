import React from "react";
import "./NavBarStyle.css"

const Navbar: React.FC = () => {
    return(
        <div className="nav">
            <h1>Tobais Meyer Innleggen</h1>
            <ul>
                {/* These should be links to diffrent parts of the page*/}
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
            <button className="burger-menu">
                <span>&#9776;</span>
            </button> 
        </div>
    );
}    

export default Navbar;