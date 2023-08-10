import React from "react";
import "./CvPanelStyle.css";

interface CvPanelProps {
    children: React.ReactNode;
    isActive: boolean;
}

const CvPanel: React.FC<CvPanelProps> = ({children,isActive}) => {
    return (
    <section className="cvPanel">
        {isActive ?
        <div className="children">
            {children}
        </div>
        : null}
        
    </section>
    )
};
   
export default CvPanel;