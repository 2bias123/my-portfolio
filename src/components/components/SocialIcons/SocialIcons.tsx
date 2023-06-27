import React from "react";
import './SocialIconsStyle.css'

const SocialIcons: React.FC = () => {
    return (
        <div className="social-icons">
            <a href="#" target="_blank">
                <img src="https://via.placeholder.com/50" alt="github" className="sosialIcon"/>
            </a>
            <a href="#" target="_blank">
                <img src="https://via.placeholder.com/50" alt="linkedIn" className="sosialIcon"/>
            </a>
        </div>
    );
}

export default SocialIcons;