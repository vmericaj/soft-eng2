import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/se.png';
import sercondo from '../assets/ser-condo.jpg';
import serhomes from '../assets/ser-homes.jpg';
import serpool from '../assets/ser-pool.jpg';
import landscapeImage from '../assets/landscape.png';
import palaceResidencesImage from '../assets/abs.png';
import poolImage from '../assets/poola.png';
import aboutHeader from "../assets/header.png";

const Services = () => {
  // Inline styles
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '3rem',
    marginTop: '1rem', // This will add space between the header image and the grid
  };

  const boxStyle = {
    boxShadow: '0 10px 20px -5px rgba(0, 0, 0, 0.3), 0 6px 12px -2px rgba(0, 0, 0, 0.05)',
    borderRadius: '0.8rem',
    border: '4px solid transparent',
    margin: '3.5rem auto',
    overflow: 'hidden', // Ensures the image doesn't break the border radius
    transition: 'box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out',// Smooth transition for the shadow
    background: 'none', // Ensures the gradient is only on hover, not by default
  };

  const boxHoverStyle = {
    boxShadow: '0 0 15px 5px rgba(0, 123, 255, 0.5), 0 6px 12px 5px rgba(255, 165, 0, 0.5), inset 0 0 15px 5px rgba(0, 123, 255, 0.5), inset 0 0 15px 5px rgba(255, 165, 0, 0.5)', // Glow effect on hover
    background: 'linear-gradient(135deg, rgba(0, 123, 255, 0.75) 0%, rgba(255, 165, 0, 0.75) 100%)', // Gradient effect on hover
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '0.5rem',
    objectfit: 'cover',
  };

  const sectionHeaderStyle = {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '1rem',
    textAlign: 'center',
  };

  const rowStyle = {
    display: 'flex',
    marginBottom: '20px',
    flexdirection: 'column',
  };

  const textSectionStyle = {
    flex: '50%',
    padding: '60px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const paragraphStyle = {
    textAlign: 'justify',
    lineHeight: '1.58',
    marginBottom: '1em',
  };

  const lineStyle = {
    height: '2px',
    width: '350px',
    backgroundColor: '#000',
    margin: '0 auto 20px',
    opacity: '60%',
  };

  const verticalLineStyle = {
    borderLeft: '2px solid black',
    height: '100px',
    opacity: '60%',
  };

  const imageSectionStyle = {
    flex: '50%',
    position: 'relative',
  };

  const overlayStyle = {
    position: 'absolute',
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.5)', // Adjust color and opacity to your preference
    color: 'white',
    width: '100%',
    padding: '20px',
    boxSizing: 'border-box',
    transition: 'background 0.3s ease-in-out',
  };

  const readMoreButtonStyle = {
  background: '#FDA00A', // Adjust button color to your preference
  border: 'none',
  padding: '10px 20px',
  color: 'white',
  textDecoration: 'none',
  display: 'inline-block',
  margin: '10px 0',
  cursor: 'pointer',
  };

  const mergeStyles = (style, isHovered) => {
      return isHovered ? {...style, ...boxHoverStyle} : style;
    };

   const [hoverState, setHoverState] = React.useState({ serpool: false, serhomes: false, sercondo: false });
  
  return (
    <div>
      {/* Header Section */}
            <header className=" shadow-sm w-full rounded-s mt-4 mx-auto max-w-8xl">
              <nav className="px-6 py-3 flex justify-between items-center w-full">
                {/* Left side - Logo placeholder */}
                <div className="flex items-center space-x-2">
                  <img src={logoImage} alt="Logo" className="h-12 w-18" /> {/* Adjust size as needed */}
                  <span className="text-xl font-semibold text-[#FDA00A] ">3MV Construction</span>
                  
                </div>
                {/* Right side - Menu items and Login button */}
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
                  <button className="bg-[#FDA00A] hover:bg-blue-700 text-white font-bold py-2 px-4 ml-4 rounded transition duration-300">
                    Login
                  </button>
                </div>
              </nav>
            </header>
          
            <div className="mt-4 mx-auto max-w-[92%] relative">
        <div className="absolute z-10 w-full h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">SERVICES</h1>
        </div>
        <img src={aboutHeader} alt="about" className="w-full h-auto rounded-xl shadow-lg"/>
      </div>

      {/* Projects Grid */}
    <div style={containerStyle}>
        {[
          { name: 'serpool', image: serpool, title: 'SWIMMING POOLS' },
          { name: 'serhomes', image: serhomes, title: 'HOMES' },
          { name: 'sercondo', image: sercondo, title: 'CONDOMINIUMS' },
        ].map(project => (
          <div
            style={mergeStyles(boxStyle, hoverState[project.name])}
            onMouseEnter={() => setHoverState({...hoverState, [project.name]: true})}
            onMouseLeave={() => setHoverState({...hoverState, [project.name]: false})}
            key={project.name}
          >
            <img src={project.image} alt={project.title} style={{ width: '100%', height: 'auto' }} />
            <h3 style={{ textAlign: 'center' }}>{project.title}</h3>
          </div>
        ))}
      </div>

      {/* Service Rows */}
      {/* First Row: Text Left, Image Right */}
      <div style={rowStyle}>
        <div style={textSectionStyle}>
          <div style={lineStyle}></div>
          <h2 style={sectionHeaderStyle}>Elevate urban living with our condominium construction services.</h2>
          <p style={paragraphStyle}>
            The heart of our condominium construction services lies in the delivery...
          </p>
        </div>
        <div style={imageSectionStyle}>
          <img src={landscapeImage} alt="Luxury Design" style={imageStyle} />
          {/* Overlay content to be added here if needed */}
          <div style={overlayStyle}>
              {/* Text content */}
              <h4>Your Project Title</h4>
              <p>A short description of the project...</p>
              {/* "Read More" button */}
              <Link to="/projects" style={readMoreButtonStyle}>
                Read More
                </Link>
        </div>
      </div>

      {/* Second Row: Image Left, Text Right */}
      <div style={rowStyle}>
        <div style={imageSectionStyle}>
          <img src={palaceResidencesImage} alt="Palace Residences" style={imageStyle} />
          {/* Overlay content to be added here if needed */}
          <div style={overlayStyle}>
              {/* Text content */}
              <h2>Your Project Title</h2>
              <p>A short description of the project...</p>
              {/* "Read More" button */}
              <Link to="/projects" style={readMoreButtonStyle}>
                Read More
                </Link>
        </div>
        <div style={textSectionStyle}>
          <div style={verticalLineStyle}></div>
          <h2 style={sectionHeaderStyle}>Dive into Luxury with Our Expertly Crafted Swimming Pools</h2>
          <p style={paragraphStyle}>
            Imagine stepping into your backyard and being greeted by a luxurious oasis...
          </p>
        </div>
      </div>

      {/* Third Row: Text Left, Image Right */}
      <div style={rowStyle}>
        <div style={textSectionStyle}>
          <div style={lineStyle}></div>
          <h2 style={sectionHeaderStyle}>Dive into Luxury with Our Expertly Crafted Swimming Pools</h2>
          <p style={paragraphStyle}>
            Imagine stepping into your backyard and being greeted by...
          </p>
        </div>
        <div style={imageSectionStyle}>
          <img src={poolImage} alt="Swimming Pools" style={imageStyle} />
          {/* Overlay content to be added here if needed */}
          <div style={overlayStyle}>
              {/* Text content */}
              <h2>Your Project Title</h2>
              <p>A short description of the project...</p>
              {/* "Read More" button */}
              <Link to="/projects" style={readMoreButtonStyle}>
                Read More
                </Link>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Services;