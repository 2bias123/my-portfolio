import React from "react";
import "./ResumeStyle.css";

const Resume: React.FC = () => {
    return(
        <section className="text-container" id="resume">
            <h2>Resume</h2>
            <div className="education-wrapper">
                <h2>Education</h2>
                <div className="info-wrapper">
                    <h4>Bachelors degree in Datatechnology</h4>
                    <p>August 2021 - August 2024</p>                
                    <p>A Bachelors degree in computer sience, with focus on programing, problemsolving and systemdevelopment.</p>
                </div>
            </div>
            <div className="education-wrapper">
                <h2>Work excperience</h2>
                <div className="info-wrapper">
                    <h4>Teacher assistent at University of Bergen</h4>
                    <p>August 2021 - December 2022</p>
                    <p>Guided students in the subject "INF100 - Introduction to programming" by helping them program in Python and correct their mandatory assignments.</p>
                    <h4>Summer intern at ABB elctrification</h4>
                    <p>Summers 2019 - 2023</p>
                    <p>Worked as a summer intern where i installed components in electrical instalations.</p>
                    <h4>Temporary employee atABB elctrification</h4>
                    <p>May 2020 - August 2021</p>
                    <p>Worked as a temporary employee where i installed components in electrical instalations.</p>
                </div>
            </div>
            <div className="education-wrapper">
                <h2>Volenteer work</h2>
                <div className="info-wrapper">
                    <h4>Board member echo - main board</h4>
                    <p>July 2022 - March 2024</p>                
                    <p>Democraticly voted in by fellow students to work on making the study life of computer science students better.</p>
                    <h4>Board member echo -Gnist</h4>
                    <p>September 2021 - June 2024</p>                
                    <p>Worked closely with the department of informatics with issues such as drop-out rates and recruting new students.</p>
                </div>
            </div>
        </section>
    );
}

export default Resume;