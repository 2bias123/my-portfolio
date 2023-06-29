import React from "react";
import "./HeroStyle.css"


const Hero: React.FC = () => {
    return(
      <section className="hero" id="hero">
        <img className="w-full"
            src={require('./tobias.jpg')}
            alt="me"
        />
        <div className="hero-text">
            <h1 className="about">Tobias</h1>
            <p>Som datateknologistudent er jeg begeistret for å dykke ned i verdenen av datavitenskap og teknologi. Gjennom mine studier har jeg opparbeidet en dyp forståelse for programmeringsspråk, algoritmer og databaser. Jeg er alltid klar til å takle komplekse problemer og utvikle innovative løsninger ved hjelp av koding og datamaskiner. Med en stadig skiftende teknologiverden er jeg ivrig etter å være en del av fremtiden og bidra til å forme den.</p>
        </div>
      </section>
    );
}    

export default Hero;