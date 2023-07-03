import React from "react";
import "./ResumeStyle.css";

const Resume: React.FC = () => {
    return(
        <section className="text-container" id="resume">
            <h2>CV</h2>
            <div className="education-wrapper">
                <h2>Utdanning</h2>
                <div className="info-wrapper">
                    <h4>Bachelorgrad i Datateknologi ved UiB</h4>
                    <p>August 2021 - August 2024</p>                
                    <p>Bachelor i datateknologi. En informatikk grad med fokus på programutvikling og problemløsning.</p>
                </div>
            </div>
            <div className="education-wrapper">
                <h2>Arbeidserfaring</h2>
                <div className="info-wrapper">
                    <h4>Gruppeleder på University i Bergen</h4>
                    <p>August 2021 - Desember 2022</p>
                    <p>Veiledet studenter i faget "INF100 - Introduksjon til Programmering" ved å hjelpe dem med å programere i python og rettet deres obligatoriske oppgaver.</p>
                    <h4>Sommervikar hos ABB elctrification</h4>
                    <p>Sommere 2019 - 2023</p>
                    <p>Jobbet som tavlemontør der jeg monterte komponenter i elektriske anlegg.</p>
                    <h4>Midlertidig annsatt hos ABB elctrification</h4>
                    <p>Mai 2020 - August 2021</p>
                    <p>Jobbet som tavlemontør der jeg monterte komponenter i elektriske anlegg.</p>
                </div>
            </div>
            <div className="education-wrapper">
                <h2>Frivillig arbeid</h2>
                <div className="info-wrapper">
                    <h4>Styremedlem echo - hovedstyret</h4>
                    <p>Juli 2022 - Mars 2024</p>                
                    <p>Demokratisk valgt inn av medstudenter for å jobbe med å gjøre studiehverdagen til informatikkstudenter bedre.</p>
                    <h4>Styremedlem echo - Gnist</h4>
                    <p>September 2021 - Juni 2024</p>                
                    <p>Jobbet tett med instituttet for informatikk med frafallsproblematikk og rekruttering,</p>
                </div>
            </div>
        </section>
    );
}

export default Resume;