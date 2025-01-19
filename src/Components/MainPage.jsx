import { useState, useEffect, useRef } from 'react';
import '../CSS/MainPage.css';
import Header from './Header.jsx';
import Education from './Education.jsx';
import Projects from './Projects.jsx';
import Me from '../Images/me.jpg';
import post1 from '../Images/post1.jpg';
import love from '../Images/love.jpg';
import beach from '../Images/beach.jpg';
import food from '../Images/food.jpg';
import tofu from '../Images/tofu.png';
import caps from '../Images/caps.jpg';
import pointer from '../Images/pointer.gif';
import sparkle from '../Images/sparkle.png';
import vector from '../Images/vector.png';
import { FaUpRightFromSquare } from "react-icons/fa6";
import { IoHomeSharp, IoPerson } from "react-icons/io5";
import { MdCake } from "react-icons/md";
import { FaGraduationCap, FaPhoneAlt, FaCode, FaFileAlt } from "react-icons/fa";
import { IoMdBasketball } from "react-icons/io";



function MainPage() {
  const [isDayMode, setIsDayMode] = useState(true);
  const [modalImage, setModalImage] = useState(null);
  const [modalCaption, setModalCaption] = useState('');
  const [modalCaption2, setModalCaption2] = useState('');
  const [resumeModalOpen, setResumaModalOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const containerRef = useRef(null);
  const aboutMeRef = useRef(null);
  const EducationRef = useRef(null);
  const ProjectRef = useRef(null);

  const toggleTheme = () => {
    setIsDayMode(!isDayMode);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const openModal = (image, caption, caption2) => {
    setModalImage(image);
    setModalCaption(caption);
    setModalCaption2(caption2);
  };

  const closeModal = () => {
    setModalImage(null);
    setModalCaption('');
    setModalCaption2('');
  };

  const openResumeModal = () => setResumaModalOpen(true);
  const closeResumeModal = () => setResumaModalOpen(false);

  useEffect(() => {
    const scrollLine = document.getElementById('scroll-line');
    const updateScrollLine = () => {
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrolled = window.scrollY;
  
      const scrollPercentage = (scrolled / (documentHeight - windowHeight)) * 100;
  
      scrollLine.style.width = `${scrollPercentage}%`;
    };
  
    window.addEventListener('scroll', updateScrollLine);
  
    return () => {
      window.removeEventListener('scroll', updateScrollLine);
    };
  }, []);
  


  return (
    <div>
      <div id="scroll-line"></div>
      <Header
        isDayMode={isDayMode}
        toggleTheme={toggleTheme}
        aboutMeRef={aboutMeRef}
        EducationRef={EducationRef}
        ProjectRef={ProjectRef}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
      />
      <div className="flex-container-pointer">
        <img src={pointer} alt="Profile" />
      </div>
      <div className="flex-container">
        <div className="image-section">
          <img src={Me} alt="Profile" />
        </div>
        <div className="text-section">
          <h1>
            Hello,<img src={sparkle} alt="Icon" className="sparkle-icon" />
          </h1>
          <h3>my name is</h3>
          <h3 style={{ color: "#0aa5ff" }}>Jeff Francis D. Conson</h3>
          <img src={vector} alt="Icon" className="vector-icon" />
        </div>
      </div>
      <div className="hr" ref={aboutMeRef}>
        <h1><span style={{ color: "#0aa5ff" }}>🧑🏻 About Me</span></h1>
        <hr className="divider" />
      </div>
      <div className="flex-container-intro">
        <div className="intro">
          <h2>Introduction</h2>
          <div className="bio">
            <button className='view-res' onClick={openResumeModal}>
              <FaFileAlt className='file-icon'/>View Resume
            </button>
          </div>
          <hr className="divider" />
          <p><IoHomeSharp className='home-icon'/>Lives in Buenahills Guadalupe Cebu City</p>
          <p><MdCake className='cake-icon'/>December 14, 2002</p>
          <p><FaGraduationCap className='cap-icon'/>Cebu Institue of Technology University</p>
          <p><IoPerson className='person-icon'/>Male</p>
          <p><FaPhoneAlt className='phone-icon'/>+63 9085916093</p>
          <div className="hobbies">
            <h2>Hobbies</h2>
            <hr className="divider" />
            <p><IoMdBasketball className='phone-icon'/>Basketball & Any Ball games</p>
            <p><FaCode className='phone-icon'/>Coding</p>
          </div>
        </div>
        <div className="intro2">
          <div className="profile-post">
          <img className="intro-profile" src={Me} alt="Profile" /> 
          <h3>Jeff Francis D. Conson</h3>
          </div>
          <div className="pinned-post">
          <img src={post1} alt="post" /> 
          </div>
        </div>
      </div>
      <p>Click the images to view the captions and more information about the picture.</p>
      <div className="flex-post-container">
              {[{ image: love, caption: "This is My girlfriend kimverly bacalso and we were together for 3 years already and counting", caption2: "#Motivated #InLove" }, 
          { image: beach, caption: "Beach", caption2: "" }, 
          { image: food, caption: "Food", caption2: "" }, 
          { image: tofu, caption: "Tofu", caption2: "" }, 
          { image: Me, caption: "Myself", caption2: "" },
          { image: caps, caption: "caps", caption2: "" },
        ].map((item, index) => (
            <div className="post-section" key={index} onClick={() => openModal(item.image, item.caption, item.caption2)}>
              <img src={item.image} alt="Post" />
              <div className="overlay"><FaUpRightFromSquare style={{ marginRight: "5px" }} />Click to view more</div>
            </div>
        ))}
      </div>

          {modalImage && (
      <div className="modal">
        <div className="modal-content">
          <span className="close-button" onClick={closeModal}>&times;</span>
          <div className="modal-body">
            <img src={modalImage} alt="Modal Content" className="modal-image" />
            <div className="modal-info">
              <div className="user">
                <img className="modal-profile" src={Me} alt="Profile" />
                <p>Jeff Francis D. Conson</p>
              </div>
              <div className="modal-caption">
                <p>{modalCaption}</p>
              </div>
              <div className="modal-caption">
                <p style={{color:"#0aa5ff"}}>{modalCaption2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}

      {resumeModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close-button" onClick={closeResumeModal}>&times;</span>
              <h2>Resume Preview</h2>
              <div className="pdf-container">
                
              </div>
            </div>
          </div>
        )}

      <div className="hr" ref={EducationRef}>
        <h1><span style={{ color: "#0aa5ff" }}>🎓 Education</span></h1>
        <hr className="divider" />
      </div>
      <Education />
      <div className="hr" ref={ProjectRef}>
        <h1><span style={{ color: "#0aa5ff" }}>Projects</span></h1>
        <hr className="divider" />
      </div>
      <Projects />
    </div>
  );
}

export default MainPage;
