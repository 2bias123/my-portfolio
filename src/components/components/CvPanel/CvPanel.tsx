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
        <div>
            <div>{children}</div>
        </div> 
        : null}
        
    </section>
    )
};
   
export default CvPanel;