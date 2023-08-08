import React from "react";
import "./CvCarouselStyle.css";
import CvPanel from "../CvPanel/CvPanel";

const CvCarousel: React.FC = () => {
    const [active, setActive] = React.useState(0);


    return (
        <div className="cv-carousel">
            <div className="cv-titles">
                <h3 className="cv-links" onClick={() => setActive(0)}>Utdanning</h3>
                <h3 className="cv-links" onClick={() => setActive(1)}>Arbeidserfaring</h3>
                <h3 className="cv-links"  onClick={() => setActive(2)}>Andre Ferdigheter</h3>
                <h3 className="cv-links" onClick={() => setActive(3)}>Frivillig værv</h3>
            </div>
            <div className="cv-content">
                <CvPanel isActive={active === 0}>
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
                <CvPanel isActive={active === 1}>
                    <p>Arbeidserfaring</p>
                </CvPanel>
                <CvPanel isActive={active === 2}>
                    <p>Andre Ferdigheter</p>
                </CvPanel>
                <CvPanel isActive={active === 3}>
                    <p>Frivillig værv</p>
                </CvPanel>
            </div>
        </div>
    );
};

export default CvCarousel;