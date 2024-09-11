import React from "react";
import "./CvCarouselStyle.css";
import CvPanel from "../CvPanel/CvPanel";

const CvCarousel: React.FC = () => {
    const [active, setActive] = React.useState(0);

    const changeVisibleSection = (index: number) => {
        setActive(index);
        // Remove the 'active' class from all elements
        const cvLinks = document.querySelectorAll('.cv-links');
        cvLinks.forEach(link => link.classList.remove('active'));
        // Add the 'active' class to the clicked element
        cvLinks[index].classList.add('active');
    };


    return (
        <div className="cv-carousel" id="resume">
            <h2 className="cv-title">Résumé</h2>
            <div className="cv-titles">
                <h3 className="cv-links active" onClick={() => changeVisibleSection(0)}>Education</h3>
                <h3 className="cv-links" onClick={() => changeVisibleSection(1)}>Work Experience</h3>
                <h3 className="cv-links"  onClick={() => changeVisibleSection(2)}>Other Skills</h3>
                <h3 className="cv-links" onClick={() => changeVisibleSection(3)}>Volunteer Work</h3>
            </div>
            <div className="cv-content">
                <CvPanel isActive={active === 0}>
                    <div className="info-wrapper">
                        <h4>Master in Computer science at the Vrije Universiteit Amsterdam & Universiteit van Amsterdam</h4>
                        <p>September 2024 - June 2026</p>
                        <p>A masters degree in computer science, with a specialization in Computer systems & infrastructure.</p>
                    </div>
                    <div className="info-wrapper">
                        <h4>Bachelor in Computer Science at the University of Bergen</h4>
                        <p>August 2021 - June 2024</p>
                        <p>Bachelor in Computer science. An informatics degree with focus on programming and problem
                            solving.</p>
                    </div>
                </CvPanel>
                <CvPanel isActive={active === 1}>
                    <div className="info-wrapper">
                        <h4>Student Ambassador at JetBrains</h4>
                        <p>September 2024 - Present</p>
                        <p>
                            As a Student Ambassador at JetBrains, I organized student meetups, workshops, and Q&A sessions, giving presentations on innovative technologies that highlighted JetBrains tools. In addition to promoting internship opportunities, I facilitated the presentation of various internship projects. I also coordinated JetBrains' participation in campus career events, hackathons, and other related activities.                        </p>
                        <h4>Summer intern at the Norwegian National Broadcaster(NRK)</h4>
                        <p>June 2024 - August 2024</p>
                        <p>
                            As a summer intern at NRK, I built a sports scheduling component using SvelteKit, integrated
                            with NRK’s systems, and automated CI/CD with GitHub Actions and Docker on Kubernetes.As a
                            summer intern at NRK, I built a sports scheduling component using SvelteKit, integrated with
                            NRK’s systems, and automated CI/CD with GitHub Actions and Docker on Kubernetes.
                        </p>
                        <h4>Teaching Assistant at the University of Bergen</h4>
                        <p>January 2024 - May 2024</p>
                        <p>
                            Guided students in in the course INF112 - Introduction to Systems Development
                            by helping them understand and utilise an Agile style of project management, as well as
                            grading their
                            mandatory assignments.
                        </p>
                        <h4>Teaching Assistant at the University of Bergen</h4>
                        <p>August 2023 - December 2023</p>
                        <p>
                            Guided students in the course "INF102 - Algorithms, Data Structures, and Programming"
                            by helping them understand fundamental algorithm construction, as well as grading their
                            mandatory assignments.
                        </p>
                        <h4>Teaching Assistant at the University of Bergen</h4>
                        <p>August 2022 - December 2022</p>
                        <p>
                            Guided students in the course "INF100 - Introduction to Programming"
                            by helping them program in Python and grading their mandatory assignments.
                        </p>
                        <h4>Summer Intern at ABB Electrification</h4>
                        <p>Summers 2019 - 2023</p>
                        <p>Worked as a panel assembler, where I installed components in electrical systems.</p>
                        <h4>Temporary Employee at ABB Electrification</h4>
                        <p>May 2020 - August 2021</p>
                        <p>Worked as a panel assembler, where I installed components in electrical systems.</p>
                    </div>
                </CvPanel>
                <CvPanel isActive={active === 2}>
                    <div className="info-wrapper languages">
                        <h4>Languages</h4>
                        <p>Norwegian - Native</p>
                        <p>English - Fluent</p>
                        <h4>Programming Languages and Frameworks</h4>
                        <p>Java, Python, Rust, Haskell, Git, TypeScript, React, React Native,Docker, Kubernetes,
                            SvelteKit, SQL, HTML, CSS, Tauri, and PHP</p>
                    </div>
                </CvPanel>
                <CvPanel isActive={active === 3}>
                    <div className="info-wrapper">
                        <h4>Board Member echo - Main Board of the Informatics Student Association</h4>
                        <p>July 2022 - March 2024</p>
                        <p>Democratically elected by fellow students to work on improving the daily academic life of informatics students.</p>
                        <h4>Board Member echo - Gnist Subgroup of the Student Association</h4>
                        <p>September 2021 - June 2024</p>
                        <p>Worked closely with the Department of Informatics on dropout issues and recruitment.</p>
                        <h4>echo Company Trip Committee</h4>
                        <p>March 2023 - September 2023</p>
                        <p>Planned and organized a trip to Oslo to help echo students connect with professionals in the workforce.</p>
                    </div>
                </CvPanel>
            </div>
        </div>
    );
};

export default CvCarousel;