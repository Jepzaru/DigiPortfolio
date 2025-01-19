import React, { useState, useEffect, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import headerlogo from '../Images/headerlogo.png';
import '../CSS/Header.css';
import Me from '../Images/me.jpg';

function Header({ aboutMeRef, EducationRef, ProjectRef, experiencesRef, skillsRef }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const sections = {
    aboutMe: aboutMeRef,
    Education: EducationRef,
    Projects: ProjectRef,
    experiences: experiencesRef,
    skills: skillsRef,
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (ref, section) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(section);
    }
  };

  const handleScroll = () => {
    for (const [section, ref] of Object.entries(sections)) {
      if (ref?.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          console.log('Active section:', section);
          setActiveLink(section);
          break;
        }
      }
    }
  };
  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <a href="#" className="brand">
        <img src={headerlogo} alt="Logo" className="head-logo" />
        My <span style={{ color: "#0aa5ff" }}>Portfolio</span>
      </a>

      <nav className="navbar">
        <div className="burger-menu" onClick={toggleMenu}>
          <FaBars />
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a
              href="#about-me"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(aboutMeRef, 'aboutMe');
              }}
              className={activeLink === 'aboutMe' ? 'active' : ''}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#education"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(EducationRef, 'Education');
              }}
              className={activeLink === 'Education' ? 'active' : ''}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(ProjectRef, 'Projects');
              }}
              className={activeLink === 'Projects' ? 'active' : ''}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#experiences"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(experiencesRef, 'experiences');
              }}
              className={activeLink === 'experiences' ? 'active' : ''}
            >
              Experiences
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(skillsRef, 'skills');
              }}
              className={activeLink === 'skills' ? 'active' : ''}
            >
              Skills
            </a>
          </li>
          <li>
            <button className="contact-me">Contact Me</button>
          </li>
          <li>
            <img src={Me} alt="Logo" className="profile-logo" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
