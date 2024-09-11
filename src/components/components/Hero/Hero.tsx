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
            <h1 className="about">About me</h1>
            <p>
                My name is Tobias, and I am studying computer science at the Vrije Universiteit amsterdam and Universiteit van Amsterdam. Through my studies, I have gained strong knowledge in programming, algorithms, data structures, and problem-solving. I am eager to learn and constantly seeking new opportunities for growth. With this foundation, I feel ready to take on new challenges.
            </p>
        </div>
      </section>
    );
}    

export default Hero;