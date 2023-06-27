import React from 'react';
import './SkillsectionStyle.css'

const SkillSection: React.FC = () => {
    return(
        <section className="skills">
            <h2 className='skill-header'>My top skills</h2>
            <div className="skill-container">
                <div className="firstThree">
                    <img 
                    alt='it should be something here'
                    src="https://via.placeholder.com/150"
                    loading='lazy'
                    className='icon icon-card'
                    />
                    <img 
                    alt=''
                    src="https://via.placeholder.com/150"
                    loading='lazy'
                    className='icon icon-card'
                    />
                    <img 
                    alt=''
                    src="https://via.placeholder.com/150"
                    loading='lazy'
                    className='icon icon-card'
                    />
                </div>
                <div className="firstThree">
                    <img 
                    alt=''
                    src="https://via.placeholder.com/150"
                    loading='lazy'
                    className='icon icon-card'
                    />
                    <img 
                    alt=''
                    src="https://via.placeholder.com/150"
                    loading='lazy'
                    className='icon icon-card'
                    />
                    <img 
                    alt=''
                    src="https://via.placeholder.com/150"
                    loading='lazy'
                    className='icon icon-card'
                    />
                </div>
            </div>
        </section>
    );
};

export default SkillSection;