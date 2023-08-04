import React from "react";
import "./HeroStyle.css"


const Hero: React.FC = () => {
    return(
      <section className="hero" id="hero">
          <div className = "image-container">
          <img className="w-full"
              src={require('./tobias_2.jpeg')}
              alt="me"
          />
        </div>
        <div className="hero-text" id="hero-text">
            <h1 className="about">Om meg</h1>
            <p>
              Mitt navn er Tobias og jeg studerer datateknologi på Universitetet i Bergen.
              Gjennom studiene mine har jeg opparbeidet meg gode kunnskaper innenfor programmering, algoritmer, 
              datastrukturer og problemløsning. Jeg er lærevillig og er stadig på jakt etter nye muligheter for å lære. 
              Med dette som grunnlag føler jeg meg klar for nye utfordringer.
            </p>
        </div>
      </section>
    );
}    

export default Hero;