import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logoImage from '../assets/se.png';
import image1 from '../assets/1a.png';
import image2 from '../assets/2a.png';
import image3 from '../assets/3a.png';
import image4 from '../assets/4a.png';
import image5 from '../assets/5a.png';
import image6 from '../assets/6a.png';
import image7 from '../assets/7a.png';
import image8 from '../assets/8a.png';
import image9 from '../assets/9a.png';
import image10 from '../assets/10a.png';
import image11 from '../assets/11a.png';
import image12 from '../assets/12a.png';
import image13 from '../assets/13a.png';
import image14 from '../assets/14a.png';
import image15 from '../assets/15a.png';
import image16 from '../assets/16a.png';
import image17 from '../assets/17a.png';
import image18 from '../assets/18a.png';
import image19 from '../assets/19a.png';
import image20 from '../assets/20a.png';
import image21 from '../assets/21a.png';
import image22 from '../assets/22a.png';
import image23 from '../assets/23a.png';
import image24 from '../assets/24a.png';
import aboutHeader from "../assets/arista.png";
import './Projects.css'; 
import { IoIosArrowDropdownCircle } from "react-icons/io";
import PopupChatWindow from './PopupChatWindow';

const projectData = [
  {
    id: 1,
    name: 'PRIVATE RESIDENCE',
    image: image1,
    location: 'Pasig City',
    scope: 'Residential House Renovation',
  },
  {
    id: 2,
    name: 'PLAZUELA DE-ILO-ILO',
    image: image2,
    location:'Ilo-Ilo City', 
    scope: 'Design and Build of Fountain',
  },

  {
    id: 3,
    name: 'FILINVEST-MIMOSA',
    image: image3,
    location:'Clark, Pampanga', 
    scope: 'Design and Build of Gazebo, Landscaping and Hardscaping',
  },

  {
    id: 4,
    name: 'PRIVATE CONDOMINIUM UNIT',
    image: image4,
    location:'Skyline Premier One Balete, Balete Drive, Quezon City', 
    scope: 'Condominium Renovation and Retrofitting',
  },

  {
    id: 5,
    name: 'VINTAGE RESTAURANT',
    image: image5,
    location:'Mandaluyong City', 
    scope: 'Restaurant Renovation and Retrofitting',
  },

  {
    id: 6,
    name: 'MOLDEX REALTY INC',
    image: image6,
    location:'Golden Empire Tower, 1322 Roxas Blvd. Ermita, Manila', 
    scope: 'Modern Condominium Unit Renovation',
  },

  {
    id: 7,
    name: 'DEWI SRI FRM AND RESORT',
    image: image7,
    location: 'Pila, Laguna',
    scope: 'Design and Build of Swimming Pool with Bubbler',
  },

  {
    id: 8,
    name: 'ADAPON-SAJO RESIDENCE',
    image: image8,
    location: 'Muntinlupa, City ',
    scope: 'Design and Build of Infinity Pool with Water Feature',
  },

  {
    id: 9,
    name: 'PRIVATE RESORT',
    image: image9,
    location: 'Morong, Bataan',
    scope: 'Design and Build of Swimming Pool with Jacuzzi',
  },

  {
    id: 10,
    name: 'LASAM RESIDENCE',
    image: image10,
    location: 'Xavierville Village, Quezon City',
    scope: 'Design and Build of Swimming Pool with Water Feature',
  },

  {
    id: 11,
    name: 'MANILA MARRIOTT HOTEL',
    image: image11,
    location: 'Pasay City',
    scope: 'Supply and Installation of Jacuzzi and Spa',
  },

  {
    id: 12,
    name: 'CHUA RESIDENCE',
    image: image12,
    location: 'Mei Ling Village, Quezon City',
    scope: 'Design and Build of Swimming Pool with Water Feature and Pool Heater',
  },
  
  {
    id: 13,
    name: 'PAJARILLA RESIDENCE',
    image: image13,
    location: 'Xavierville, Quezon City',
    scope: 'Waterproofing and Plumbing Works',
  },

  {
    id: 14,
    name: 'ADAPON-SAJO RESIDENCE',
    image: image14,
    location: 'Muntinlupa City',
    scope: 'Design and Build of Infinity Pool with Water Feature',
  },

  {
    id: 15,
    name: 'THOMSPON RESIDENCE',
    image: image15,
    location: 'Paranaque City ',
    scope: 'Design and Build of Swimming Pool with Water Feature',
  },

  {
    id: 16,
    name: 'ALEJANDRINO RESIDENCES',
    image: image16,
    location: 'Valenzuela City',
    scope: 'Ancestral House Renovation Construction of 4-Storey House Extension with Guest House',
  },

  {
    id: 17,
    name: 'DE GUZMAN RESIDENCE',
    image: image17,
    location: 'Quezon City',
    scope: 'Residential House Renovation',
  },

  {
    id: 18,
    name: 'REYES RESIDENCE',
    image: image18,
    location: 'Quezon City',
    scope: 'Design and Build of Residential House',
  },

  {
    id: 19,
    name: 'PELESCO RESIDENCE',
    image: image19,
    location: 'Antipolo, City',
    scope: 'House Renovation',
  },

  {
    id: 20,
    name: 'LAIZ RESIDENCES',
    image: image20,
    location: 'Panghulo, Obando, Bulacan',
    scope: 'Two-Storey Four Bedrooms House Renovation',
  },

  {
    id: 21,
    name: 'SALUMBIDES RESIDENCE',
    image: image21,
    location: 'Quezon City',
    scope: 'Design and Build of Residential House',
  },

  {
    id: 22,
    name: 'RHAPSODY RESIDENCES',
    image: image22,
    location: 'Paranaque City',
    scope: 'Supply and Installation of Water Feature',
  },

  {
    id: 23,
    name: 'PRIVATE RESIDENCE',
    image: image23,
    location: 'PASIG CITY',
    scope: 'Supply and Installation of Wood Cladding',
  },

  {
    id: 24,
    name: 'RIZAL PARK AMPHITHEATER',
    image: image24,
    location: 'Manila',
    scope: 'Installation of Tencil Membrane',
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
        <h3 className="project-title"style={{ marginTop: '0'}}>{project.name}</h3>
        <button className="toggle-details-button" onClick={handleToggleDetails}>
        <IoIosArrowDropdownCircle className={`${showDetails ? 'rotate' : ''}`} />
        </button>
      </div>
      <div className={`project-details-overlay ${showDetails ? 'project-details-visible' : ''}`}>
              {/* Content that you want to show/hide goes here */}
              <div className="project-details"style={{ marginTop: '0'}}>
                {/* Your project details */}
                        <p><span className="highlight">LOCATION:</span> {project.location}</p>
                        <p><span className="highlight">SCOPE OF WORKS:</span> {project.scope}</p>
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

      <div className="project-container grid grid-cols-3 gap-0 py-10 ">
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