import React, { useState } from "react";
import "./NavBarStyle.css"
import { HashLink } from 'react-router-hash-link';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (): void => {
    setIsMenuOpen(prevState => !prevState);
  };

  const handleNavLinkClick = (): void => {
    setIsMenuOpen(false);
  };

  return (
    <div className="nav">
      <h1><HashLink to="#" smooth className="nav-links" onClick={handleNavLinkClick}>Tobias Meyer Innleggen</HashLink></h1>
      <ul className={`list ${isMenuOpen ? "show" : ""}`}>
        <li>
          <HashLink smooth to="#hero-text" className="nav-link" onClick={handleNavLinkClick}>Om meg</HashLink>
        </li>
        <li>
          <HashLink smooth to="#resume" className="nav-link" onClick={handleNavLinkClick}>CV</HashLink>
        </li>
        <li>
          <HashLink smooth to="#projects" className="nav-link" onClick={handleNavLinkClick}>Prosjekter</HashLink>
        </li>
      </ul>
      <button className="burger-menu" onClick={handleClick}>
        <span>&#9776;</span>
      </button> 
    </div>
  );
}

export default Navbar;
