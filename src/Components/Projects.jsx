import React, { useEffect, useRef } from 'react';
import project1 from '../Images/1.png';
import project2 from '../Images/2.png';
import project3 from '../Images/3.png';
import project4 from '../Images/4.png';
import project5 from '../Images/5.png';
import project6 from '../Images/6.png';
import project7 from '../Images/7.png';
import citumove from '../Images/citumove.png';
import sakay from '../Images/sakay.png';
import logo1 from '../Images/1.png';
import logo2 from '../Images/2.png';
import '../CSS/Projects.css';

const Projects = () => {
    const ProjectRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            },
            { threshold: 0.5 }
        );

        if (ProjectRef.current) {
            observer.observe(ProjectRef.current);
        }

        return () => {
            if (ProjectRef.current) {
                observer.unobserve(ProjectRef.current);
            }
        };
    }, []);

    return (
        <div className="project-grid-container">
            <div className="slider">
                <div className="slide-track">
                    <div className="slide">
                        <img src={project1} alt="" />
                    </div>
                    <div className="slide">
                        <img src={project2} alt="" />
                    </div>
                    <div className="slide">
                        <img src={project3} alt="" />
                    </div>
                    <div className="slide">
                        <img src={project4} alt="" />
                    </div>
                    <div className="slide">
                        <img src={project5} alt="" />
                    </div>
                    <div className="slide">
                        <img src={project6} alt="" />
                    </div>
                    <div className="slide">
                        <img src={project7} alt="" />
                    </div>
                    <div className="slide">
                        <img src={project1} alt="" />
                    </div>
                    <div className="slide">
                        <img src={project2} alt="" />
                    </div>
                    <div className="slide">
                        <img src={project3} alt="" />
                    </div>
                    <div className="slide">
                        <img src={project4} alt="" />
                    </div>
                    <div className="slide">
                        <img src={project5} alt="" />
                    </div>
                    <div className="slide">
                        <img src={project6} alt="" />
                    </div>
                    <div className="slide">
                        <img src={project7} alt="" />
                    </div>
                </div>
            </div>
            <div ref={ProjectRef} className="project-grid-container">
            <div className="project-grid-item">
                <img src={citumove} alt="" />
                <div className="hover-content">
                <img src={logo1} alt="" />
                <div className="details">
                <div style={{fontWeight: "600"}}>CITUMove - Transportation Reservation Management System</div>
                <div style={{fontSize: "12px"}}>This System is a Reservation System for the University buses used by the school</div>
                <div className="tech-stack">
                <div style={{ border: "1px solid #0aa5ff", padding: "5px 20px", color: "#0aa5ff", borderRadius: "25px" }}>React</div>
                <div style={{ border: "1px solid #6DB33F", padding: "5px 20px", color: "#6DB33F", borderRadius: "25px" }}>Java Springboot</div>
                <div style={{ border: "1px solid orange", padding: "5px 20px", color: "orange", borderRadius: "25px" }}>MySQL</div>
                </div>
                </div>
                </div>
            </div>
            <div className="project-grid-item">
                <img src={sakay} alt="" />
                <div className="hover-content">
                <img src={logo2} alt="" />
                <div className="details">
                <div style={{fontWeight: "600"}}>SAKAY - PUJ Transportation Reservation Tracker</div>
                <div style={{fontSize: "12px"}}>This System is a Reservation System for the University buses used by the school</div>
                <div className="tech-stack">
                <div style={{ border: "1px solid #0aa5ff", padding: "5px 20px", color: "#0aa5ff", borderRadius: "25px" }}>Canva</div>
                <div style={{ border: "1px solid red", padding: "5px 20px", color: "red", borderRadius: "25px" }}>Java</div>
                <div style={{ border: "1px solid #ff66c4", padding: "5px 20px", color: "#ff66c4", borderRadius: "25px" }}>Figma</div>
                <div style={{ border: "1px solid orange", padding: "5px 20px", color: "orange", borderRadius: "25px" }}>MySQL</div>
                </div>
                </div>
                </div>
            </div>
            <div className="project-grid-item">
                <img src={sakay} alt="" />
                <div className="hover-content">Additional Info</div>
            </div>
            <div className="project-grid-item">
                FlightWay
                <div className="hover-content">Additional Info</div>
            </div>
            <div className="project-grid-item">
                Life++
                <div className="hover-content">Additional Info</div>
            </div>
            <div className="project-grid-item">
                SummaryMe
                <div className="hover-content">Additional Info</div>
            </div>
            <div className="project-grid-item">
                Boird
                <div className="hover-content">Additional Info</div>
            </div>
            </div>
        </div>
    );
};

export default Projects;
