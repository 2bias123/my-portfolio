import React from "react";
import './SocialIconsStyle.css'
import github from './SocialIconsFiles/github.svg'
import linkedin from './SocialIconsFiles/linkedin.svg'

const SocialIcons: React.FC = () => {
    return (
        <div className="social-icons">
            <a href="https://github.com/2bias123" target="_blank">
                <img src={github} alt="github" className="sosialIcon"/>
            </a>
            <a href="https://linkedin.com/in/tobias-meyer-innleggen" target="_blank">
                <img src={linkedin} alt="linkedIn" className="sosialIcon"/>
            </a>
        </div>
    );
}

export default SocialIcons;