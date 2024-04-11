import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from "../assets/se.png";
import { motion } from 'framer-motion';
import sercondo from '../assets/1.png';
import serhomes from '../assets/7.png';
import serpool from '../assets/3.png';
import aboutHeader from "../assets/arista.png";
import PopupChatWindow from './PopupChatWindow';


const AboutUs = () => {
  const containerShadowStyle = {
    boxShadow: '0 10px 20px -5px rgba(0, 0, 0, 0.1), 0 6px 12px -2px rgba(0, 0, 0, 0.05)',
  };
  const missionVisionContainerStyle = {
    backgroundColor: '#FFFFF', // Updated background color
    padding: '2rem',
    margin: '2rem auto', // This centers the section and adds margin
    maxWidth: '92%', // Match the width of the About section
    boxShadow: '0 10px 20px -5px rgba(0, 0, 0, 0.1), 0 6px 12px -2px rgba(0, 0, 0, 0.05)', // Use the same shadow style
    borderRadius: '0.5rem', // Rounded corners
  };
  const titleStyle = {
    fontWeight: 'bold',
    fontSize: '24px', // Adjust font size as needed
    textTransform: 'uppercase', // Capitalize letters
    paddingBottom: '0.25rem', // Spacing below the title
    borderBottom: '3px solid black', // Title underline
    marginBottom: '1rem', // Space between title and text
  };
  const textStyle = {
    marginBottom: '2rem', // Spacing between text and next section or bottom of the container
  };
  const verticalLineStyle = {
    borderLeft: '2px solid #000', // Line color
    height: '100%',
    margin: '0 2rem', // Space around the line
  };

  const [showMission, setShowMission] = useState(false);
  const [showVision, setShowVision] = useState(false);

  const handleMissionHover = () => {
    setShowMission(true);
  };

  const handleVisionHover = () => {
    setShowVision(true);
  };

  const handleMissionLeave = () => {
    setShowMission(true);
  };

  const handleVisionLeave = () => {
    setShowVision(true);
  };

  // New hover state declarations for each section
  const [hoverCondo, setHoverCondo] = useState(false);
  const [hoverHomes, setHoverHomes] = useState(false);
  const [hoverPool, setHoverPool] = useState(false);

  // Inline styles for hover effects
  const hoverContainerStyle = {
    backgroundImage: 'linear-gradient(#E6D4A5 0%, #A9CBD0 50%)', // Smooth blend with more of #E6D4A5
  };
  


  const hoverTextStyle = {
    color: 'black', // Change text color to orange on hover
  };
  const imageStyle = {
    maxWidth: '95%', // Maintain the max width as before
    marginTop: '20px', // Adjust this value as needed to create the desired space at the top
  };
  
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
          <h1 className="text-4xl font-bold text-white">ABOUT US</h1>
        </div>
        <img src={aboutHeader} alt="about" className="w-full h-auto rounded-xl shadow-lg"/>
      </div>
      
      {/* containers */}
      <div className="mt-8 mx-auto max-w-[92%] grid grid-cols-1 md:grid-cols-3 gap-10">
        <div
          className="shadow-lg rounded-lg overflow-hidden"
          style={hoverCondo ? hoverContainerStyle : containerShadowStyle}
          onMouseEnter={() => setHoverCondo(true)}
          onMouseLeave={() => setHoverCondo(false)}
        >
          <img src={sercondo} alt="Condo" className="max-w-full h-auto rounded-lg mx-auto" style={imageStyle} />
          <div className="p-4">
            <p className="text-xs transition-all duration-300" style={hoverCondo ? hoverTextStyle : null}>
            3MV Construction is a company in the Philippines that
            specializes in designing and building different types of Swimming Pools and water
            features such as fountains, ponds, artificial waterfalls, spa and the likes. We also
            design, build and renovate quality and sustainable yet affordable houses, offices,
            and condominium units. We also accept land development projects such as
            resorts, commercial spaces, townhouses, subdivisions and farms.
            </p>
          </div>
        </div>
        <div
          className="shadow-lg rounded-lg overflow-hidden"
          style={hoverHomes ? hoverContainerStyle : containerShadowStyle}
          onMouseEnter={() => setHoverHomes(true)}
          onMouseLeave={() => setHoverHomes(false)}
        >
          <img src={serhomes} alt="Homes" className="max-w-full h-auto rounded-lg mx-auto" style={imageStyle} />
          <div className="p-4">
            <p className="text-xs transition-all duration-300" style={hoverHomes ? hoverTextStyle : null}>
            Our expanded products adapt to a bigger market and meets the standards and
            qualifications of different kinds of establishments like hotels, malls, offices, resorts,
            residences to name a few. We develop and improve Water Technology in order to
            incorporate recreational, relaxation and health beneficial technologies. We also
            cater House construction and renovation and other architectural masonry works—
            landscaping, hardscaping and softscaping.
            </p>
          </div>
        </div>
        <div
          className="shadow-lg rounded-lg overflow-hidden"
          style={hoverPool ? hoverContainerStyle : containerShadowStyle}
          onMouseEnter={() => setHoverPool(true)}
          onMouseLeave={() => setHoverPool(false)}
        >
          <img src={serpool} alt="Pool" className="max-w-full h-auto rounded-lg mx-auto" style={imageStyle} />
          <div className="p-4">
            <p className="text-xs transition-all duration-300" style={hoverPool ? hoverTextStyle : null}>
            Quality, creativeness, comfort and value for money are the key inspirations and
            goals of 3MV Construction. We work attentively with our clients’ perspective and
            we meticulously apply our concept in order to come up with the agreed design.
            </p>
          </div>
        </div>
      </div>

      <div style={missionVisionContainerStyle} className="flex flex-col md:flex-row justify-center md:justify-between items-center">
        {/* Mission */}
        <div className="md:w-1/2 text-center" onMouseEnter={handleMissionHover} onMouseLeave={handleMissionLeave}>
          <div style={{ margin: 'auto', width: 'fit-content' }}>
            <h2 style={titleStyle}>M I S S I O N</h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showMission ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <p style={textStyle}c>
              At 3MV Construction, our mission is to be the beacon of excellence in the construction industry, dedicated to transforming dreams into enduring structures. We are committed to delivering innovative, sustainable, and high-quality solutions, driven by a passion for precision and an unwavering commitment to client satisfaction. Through a fusion of expertise, integrity, and cutting-edge practices, we aim to build not just structures but legacies that stand the test of time.
            </p>
          </motion.div>
        </div>

        {/* Vertical Line */}
        <div style={verticalLineStyle} className="hidden md:block mx-8"></div>

        {/* Vision */}
        <div className="md:w-1/2 mt-8 md:mt-0 text-center" onMouseEnter={handleVisionHover} onMouseLeave={handleVisionLeave}>
          <div style={{ margin: 'auto', width: 'fit-content' }}>
            <h2 style={titleStyle}>V I S I O N </h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showVision ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <p style={textStyle}>
              Our vision at 3MV Construction is to redefine the landscape of construction by pioneering groundbreaking solutions that elevate the industry. We envision a future where our commitment to innovation, sustainable practices, and client-centric approaches sets the standard for excellence. Guided by a relentless pursuit of quality, we aspire to be the preferred partner for those who seek to turn their visions into architectural masterpieces, leaving an indelible mark on the skylines we shape.
            </p>
          </motion.div>
        </div>
      </div>
      <PopupChatWindow/>
    </div>
  );
};

export default AboutUs;