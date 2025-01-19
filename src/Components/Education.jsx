import { useEffect, useRef, useState } from 'react';
import CIT from '../Images/citlib.png';
import UC from '../Images/uc.jpg';
import citlogo from '../Images/citlogo.png';
import uclogo from '../Images/uclog.png';
import { BsGlobe } from "react-icons/bs";
import '../CSS/Education.css';
import { FaLocationDot } from "react-icons/fa6";

const Education = () => {
  const EducationRef = useRef(null);
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.5 }
    );

    if (EducationRef.current) {
      observer.observe(EducationRef.current);
    }

    return () => {
      if (EducationRef.current) {
        observer.unobserve(EducationRef.current);
      }
    };
  }, []);

  return (
    <div className='education-container' ref={EducationRef}>
      <div className="tabs-container">
        <div 
          className={`tab ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => setActiveTab(1)}
        >
          Cebu Institute of Technology - University
        </div>
        <div 
          className={`tab ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => setActiveTab(2)}
        >
          University of Cebu Main Campus Senior High
        </div>
      </div>
      {activeTab === 1 && (
      <div className="cit-u">
        <img className="school-bg" src={CIT} alt="Cebu Institute of Technology - University" />
        <div className="school-logo">
          <img src={citlogo} alt="CIT Logo" />
          <div className="school-info-container">
            <div className="school-info">
              <h1>Cebu Institute of Technology - University</h1>
              <p><FaLocationDot className='loc-icon' />N. Bacalso Avenue, Cebu City, Philippines</p>
            </div>
            <a href="https://cit.edu/" target="_blank" rel="noopener noreferrer">
              <button className="school-button">
                <BsGlobe style={{ marginRight: "5px", marginBottom: "-2px" }} /> Visit Website
              </button>
            </a>
          </div>
        </div>
        <div className="timeline">
            <div className="timeline-item">
        <div className="timeline-date">2021 - Present</div>
        <div className="timeline-content">
          <h3>Bachelor of Science in Information Technology</h3>
          <p>Graduated with honors, focusing on software development and data structures.</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-date">2021 - 2022</div>
        <div className="timeline-content">
          <h3>First Year College</h3>
          <p>Science, Technology, Engineering, and Mathematics (STEM) strand.</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-date">2022 - 2023</div>
        <div className="timeline-content">
          <h3>Second Year College</h3>
          <p>Science, Technology, Engineering, and Mathematics (STEM) strand.</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-date">2023 - 2024</div>
        <div className="timeline-content">
          <h3>Third Year College</h3>
          <p>Science, Technology, Engineering, and Mathematics (STEM) strand.</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-date">2024 - 2025</div>
        <div className="timeline-content">
          <h3>Fourth Year College</h3>
          <p>Science, Technology, Engineering, and Mathematics (STEM) strand.</p>
        </div>
      </div>
        </div>
      </div>
    )}
    {activeTab === 2 && (
      <div className="cit-u">
        <img className="school-bg" src={UC} alt="University of Cebu Main Campus" />
        <div className="school-logo">
          <img src={uclogo} alt="UC Logo" />
          <div className="school-info-container">
          <div className="school-info">
            <h1>University of Cebu Main Campus Senior High</h1>
            <p><FaLocationDot className='loc-icon' />Sanciangko Street, Cebu City, Philippines</p>
            </div>
            <a href="https://www.universityofcebu.net/" target="_blank" rel="noopener noreferrer">
              <button className="school-button">
                <BsGlobe style={{ marginRight: "5px", marginBottom: "-2px" }} /> Visit Website
              </button>
            </a>
          </div>
        </div>
        <div className="timeline">
            <div className="timeline-item">
        <div className="timeline-date">2021 - Present</div>
        <div className="timeline-content">
          <h3>Bachelor of Science in Information Technology</h3>
          <p>Graduated with honors, focusing on software development and data structures.</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-date">2021 - 2022</div>
        <div className="timeline-content">
          <h3>First Year College</h3>
          <p>Science, Technology, Engineering, and Mathematics (STEM) strand.</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-date">2022 - 2023</div>
        <div className="timeline-content">
          <h3>Second Year College</h3>
          <p>Science, Technology, Engineering, and Mathematics (STEM) strand.</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-date">2023 - 2024</div>
        <div className="timeline-content">
          <h3>Third Year College</h3>
          <p>Science, Technology, Engineering, and Mathematics (STEM) strand.</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-date">2024 - 2025</div>
        <div className="timeline-content">
          <h3>Fourth Year College</h3>
          <p>Science, Technology, Engineering, and Mathematics (STEM) strand.</p>
        </div>
      </div>
        </div>
      </div>
    )}
    </div>
  );
};

export default Education;
