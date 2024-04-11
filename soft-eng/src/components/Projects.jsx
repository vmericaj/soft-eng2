import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logoImage from '../assets/se.png';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';
import aboutHeader from "../assets/header.png";
import './Projects.css'; 
import { IoIosArrowDropdownCircle } from "react-icons/io";
import PopupChatWindow from './PopupChatWindow';

const projectData = [
  {
    id: 1,
    name: 'THE ONE PALACE RESIDENCES',
    description: 'Introducing "The One Palace" – a luxurious condominium set to redefine modern living in the heart of Bulacan. The condominium also offers modern fitness facilities, a clubhouse for social gatherings, and a host of recreational options to enrich the lives of its esteemed residents.',
    image: image1,
    location: 'Embrace a life of luxury and comfort in the burgeoning province of Bulacan',
    startDate: 'February 23, 2019',
    endDate: 'November 10, 2022',
    budget: 'The estimated budget for The One Palace Residences project is PHP 1.2 billion.'
  },
  {
    id: 2,
    name: 'SERENE HAVEN HOMES',
    description: 'Short description about Project 2...',
    image: image2,
    location: 'Project Location 2',
    startDate: 'DD/MM/YYYY',
    endDate: 'DD/MM/YYYY',
    budget: 'XXX',
  },
  {
    id: 3,
    name: 'CRYSTAL LAGOON RETREAT',
    description: 'Short description about Project 3...',
    image: image3,
    location: 'Project Location 3',
    startDate: 'DD/MM/YYYY',
    endDate: 'DD/MM/YYYY',
    budget: 'XXX',
  },
  {
    id: 4,
    name: 'EMPIRE HOTEL RESIDENCE',
    description: 'Short description about Project 4...',
    image: image4,
    location: 'Project Location 4',
    startDate: 'DD/MM/YYYY',
    endDate: 'DD/MM/YYYY',
    budget: 'XXX',
  },
  {
    id: 5,
    name: 'HARMONY HEIGHTS RESIDENCES',
    description: 'Short description about Project 5...',
    image: image5,
    location: 'Project Location 5',
    startDate: 'DD/MM/YYYY',
    endDate: 'DD/MM/YYYY',
    budget: 'XXX',
  },
  {
    id: 6,
    name: 'AQUA OASIS POOL COMPLEX',
    description: 'Short description about Project 6...',
    image: image6,
    location: 'Project Location 6',
    startDate: 'DD/MM/YYYY',
    endDate: 'DD/MM/YYYY',
    budget: 'XXX',
  },
];

const ProjectCard = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);

   const handleToggleDetails = () => {
      setShowDetails(!showDetails);
    };

    return (
      <div className="project-card">
        <img src={project.image} alt={project.name} className="project-image"/>
        <div className="project-title-overlay">
        <h3 className="project-title">{project.name}</h3>
        <button className="toggle-details-button" onClick={handleToggleDetails}>
        <IoIosArrowDropdownCircle className={`${showDetails ? 'rotate' : ''}`} />
        </button>
      </div>
      <div className={`project-details-overlay ${showDetails ? 'project-details-visible' : ''}`}>
              {/* Content that you want to show/hide goes here */}
              <div className="project-details">
                {/* Your project details */}
                <p>{project.description}</p>
                        <p><span className="highlight">LOCATION:</span> {project.location}</p>
                        <p><span className="highlight">START DATE:</span> {project.startDate}</p>
                        <p><span className="highlight">END DATE:</span> {project.endDate}</p>
                        <p><span className="highlight">BUDGET:</span> {project.budget}</p>
              </div>
            </div>
        </div>
    );
  };

const Project = () => {
  return (
  <div>
    <header className=" shadow-lg w-full rounded-s mt-4 mx-auto max-w-8xl">
      <nav className="px-6 py-3 flex justify-between items-center w-full">
        <div className="flex items-center space-x-2">
          <img src={logoImage} alt="Logo" className="h-12 w-18" />
          <span className="text-xl font-semibold text-[#FDA00A] ">3MV Construction</span>
        </div>
        <div className="flex items-center">
          <div className="flex space-x-4">
            {/* Replace <a> with <Link> and remove href attribute */}
            <Link to="/" className="text-black hover:text-customOrange px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to="/about" className="text-black hover:text-customOrange px-3 py-2 rounded-md text-sm font-medium">About</Link>
            <Link to="/services" className="text-black hover:text-customOrange px-3 py-2 rounded-md text-sm font-medium">Services</Link>
            <Link to="/projects" className="text-black hover:text-customOrange px-3 py-2 rounded-md text-sm font-medium">Projects</Link>
            <Link to="/contact" className="text-black hover:text-customOrange px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
          </div>
                  
                  {/* Login Button - If it navigates to a login page, consider using Link */}
                  <Link to="/login">
              <button className="bg-[#FDA00A] hover:bg-blue-700 text-white font-bold py-2 px-4 ml-4 rounded transition duration-300">
                Login
              </button>
            </Link>
          </div>
        </nav>
      </header>
            

            <div className="mt-4 mx-auto max-w-[92%] relative">
        <div className="absolute z-10 w-full h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">PROJECTS</h1>
        </div>
        <img src={aboutHeader} alt="about" className="w-full h-auto rounded-xl shadow-lg"/>
      </div>

      <div className="project-container grid grid-cols-3 gap-4 py-10">
      {projectData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
        <PopupChatWindow/>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    budget: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // if budget is a number, change as needed
  }).isRequired,
};


  <div><PopupChatWindow/></div>
export default Project; 