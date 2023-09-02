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
            <h2 className="cv-title">CV</h2>
            <div className="cv-titles">
                <h3 className="cv-links active" onClick={() => changeVisibleSection(0)}>Utdanning</h3>
                <h3 className="cv-links" onClick={() => changeVisibleSection(1)}>Arbeidserfaring</h3>
                <h3 className="cv-links"  onClick={() => changeVisibleSection(2)}>Andre Ferdigheter</h3>
                <h3 className="cv-links" onClick={() => changeVisibleSection(3)}>Frivillig Verv</h3>
            </div>
            <div className="cv-content">
                <CvPanel isActive={active === 0}>
                    <div className="info-wrapper">
                        <h4>Bachelorgrad i Datateknologi ved Universitetet i Bergen</h4>
                        <p>August 2021 - Juni 2024</p>                
                        <p>Bachelor i datateknologi. En informatikk grad med fokus på programutvikling og problemløsning.</p>
                    </div>
                </CvPanel>
                <CvPanel isActive={active === 1}>
                <div className="info-wrapper">
                    <h4>Gruppeleder på Universitet i Bergen</h4>
                    <p>August 2023 - Desember 2023</p>
                    <p>
                        Veiledet studenter i faget “INF102 - Algoritmer, datastrukturer og programmering” 
                        ved å hjelpe dem å forstå grunnleggende algoritmekonstruksjon, samt å rette deres 
                        obligatoriske oppgaver.
                    </p>
                    <h4>Gruppeleder på Universitet i Bergen</h4>
                    <p>August 2022 - Desember 2022</p>
                    <p>
                        Veiledet studenter i faget "INF100 - Introduksjon til Programmering" 
                        ved å hjelpe dem med å programmere i python og rette deres obligatoriske oppgaver.
                    </p>
                    <h4>Sommervikar hos ABB electrification</h4>
                    <p>Somre 2019 - 2023</p>
                    <p>Jobbet som tavlemontør der jeg monterte komponenter i elektriske anlegg.</p>
                    <h4>Midlertidig ansatt hos ABB electrification</h4>
                    <p>Mai 2020 - August 2021</p>
                    <p>Jobbet som tavlemontør der jeg monterte komponenter i elektriske anlegg.</p>
                </div>
                </CvPanel>
                <CvPanel isActive={active === 2}>
                    <div className="info-wrapper languages">
                        <h4>Språk</h4>
                        <p>Norsk - Morsmål</p>
                        <p>Engelsk - Flytende</p>
                        <h4>Programmeringsspråk og rammeverk</h4>
                        <p>Java, Python, Rust, Haskell, Git, TypeScript, React, React Native, SQL, HTML, CSS, Tauri, og PHP</p>
                    </div>
                </CvPanel>
                <CvPanel isActive={active === 3}>
                <div className="info-wrapper">
                    <h4>Styremedlem echo - Hovedstyret linjeforeningen for informatikk</h4>
                    <p>Juli 2022 - Mars 2024</p>                
                    <p>Demokratisk valgt inn av medstudenter for å jobbe med å gjøre studiehverdagen til informatikkstudenter bedre.</p>
                    <h4>Styremedlem echo - Gnist undergruppe av linjeforeningen</h4>
                    <p>September 2021 - Juni 2024</p>                
                    <p>Jobbet tett med instituttet for informatikk med frafallsproblematikk og rekruttering.</p>
                    <h4>echo bediftstur komitee</h4>
                    <p>Mars 2023 - September 2023</p>
                    <p>Planla og arrangerte reise til Oslo for å hjelpe echo-studenter med å knyttet kontakter i arbeidslivet.</p>
                </div>
                </CvPanel>
            </div>
        </div>
    );
};

export default CvCarousel;