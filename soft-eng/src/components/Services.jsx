import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/se.png';
import sercondo from '../assets/sercondo.jpg';
import serhomes from '../assets/serhomes.jpg';
import serpool from '../assets/2.png';
import serwater from '../assets/plazuela.jpg';
import landscapeImage from '../assets/landscape.png';
import palaceResidencesImage from '../assets/abs.png';
import poolImage from '../assets/pool.png';
import aboutHeader from "../assets/header.png";
import PopupChatWindow from './PopupChatWindow';


const Services = () => {
  // State to control the animation for each service row
  const [isVisible, setIsVisible] = useState({
      row1: false,
      row2: false,
      row3: false,
      // Add more rows if needed
    });

    // Refs for each row to check visibility
      const rowRefs = {
        row1: useRef(null),
        row2: useRef(null),
        row3: useRef(null),
        // ... add as many refs as needed
      };
     
      const checkVisibility = (id, ref) => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const isVis = rect.top < window.innerHeight && rect.bottom >= 0;
            // Update state only if row is visible and wasn't animated before
            if (isVis && !isVisible[id]) {
              setIsVisible((prev) => ({ ...prev, [id]: true }));
            }
          }
        };

      useEffect(() => {
          const handleScroll = () => {
            checkVisibility('row1', rowRefs.row1);
            checkVisibility('row2', rowRefs.row2);
            checkVisibility('row3', rowRefs.row3);
            // ... do this for as many rows as you have
          };
          
      window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
        }, []); // Empty array ensures this effect only runs on mount

  // Inline styles
  const getRowAnimationStyle = (id) => ({
      opacity: isVisible[id] ? 1 : 0,
      transform: isVisible[id] ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      transitionDelay: '0.3s',
    });

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    rowGap: '0rem',
    gap: '3rem',
    width: '95%',
    marginTop: '1rem', // This will add space between the header image and the grid
    margin: 'auto',
  };

  const boxStyle = {
    boxShadow: '0 10px 20px -5px rgba(0, 0, 0, 0.3), 0 6px 12px -2px rgba(0, 0, 0, 0.05)',
    borderRadius: '0.8rem',
    border: '4px solid transparent',
    margin: '2rem auto',
    overflow: 'hidden', // Ensures the image doesn't break the border radius
    transition: 'box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out',// Smooth transition for the shadow
    background: 'none', // Ensures the gradient is only on hover, not by default
  };

  const titleStyle = {
    fontWeight: 'bold', // Bold font weight for the title
    fontSize: '2rem', // Larger font size for the title
    marginBottom: '0.5rem', // Space between title and description
    opacity: '50%',
    justifyContent: 'center',
  };
  
  const descriptionStyle = {
    textAlign: 'justify', // Justify alignment for the description
    lineHeight: '1.6', // Line height for better readability
    fontSize: '20px',
    justifyContent: 'center',
  };

  const rowStyle = {
    display: 'flex',
    marginBottom: '20px',
    alignitems: 'flex-start',
    justifycontent: 'space-between',
  };

  const rowReverseStyle = {
      ...rowStyle, // This spreads the original row style
      flexDirection: 'row-reverse', // This will reverse the order of children elements
    };

  const textSectionStyle = {
    flex: '1',
    padding: '0 60px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: '20px',    
    paddingBottom: '20px',
  };

  const Line = () => <div style={lineStyle} />;

  const lineStyle = {
    height: '2px',
    width: '350px',
    backgroundColor: '#000',
    margin: '0 -20px 15px',
    opacity: '60%',
  }

  const imageSectionStyle = {
    flex: '1',
    position: 'relative',
  };


   const overlayTextStyle = {
      position: 'absolute',
      bottom: '15%',
      left: '0',
      width: '70%', // Overlay should cover the entire width of the image
      background: 'rgba(48, 36, 23, 0.8)', // Semi-transparent overlay
      color: 'white',
      padding: '20px',
      boxSizing: 'border-box', // Ensure padding does not add to the width
      display: 'flex',  
      flexDirection: 'column',  
      justifyContent: 'flex-end',  
      alignItems: 'flex-start',
      height: '40%',
      boxsizing: 'border-box',
    };

    const overlayTitleStyle = {
      fontWeight: 'bold', // Bold font weight for the overlay title
      fontSize: '1.5rem', // Font size for the overlay title
      marginBottom: '0.5rem', // Space between overlay title and description
      opacity: '80%',
    };
    
    const overlayDescriptionStyle = {
      fontSize: '1rem', // Smaller font size for the description
      marginBottom: '1rem', // Space between description and button
      opacity: '80%',
    };

  const readMoreButtonStyle = {
  background: '#EAE8D7', // Adjust button color to your preference
  border: 'none',
  padding: '10px 20px',
  color: 'black',
  textDecoration: 'none',
  display: 'inline-block',
  margin: '10px 0',
  cursor: 'pointer',
  borderRadius: '8px',
  fontweight: 'bolder',
  margintop: '1rem',
  alignself: 'flex-end',
  };

  // Inline style for the scale-up on hover animation
    const scaleUpOnHoverStyle = {
      transform: 'scale(1)',
      transition: 'transform 0.3s ease-in-out',
    };
  
    const scaleUpEffect = {
      transform: 'scale(1.05)',
    };


  return (
    <div>
      {/* Header Section */}
            <header className=" shadow-lg w-full rounded-s mt-4 mx-auto max-w-8xl">
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
          { name: 'sercondo', image: serwater, title: 'WATER FEATURES' },
          { name: 'sercondo', image: sercondo, title: 'LANDSCAPING AND HARDSCAPING' },
          { name: 'sercondo', image: sercondo, title: 'SPA AND SAUNA' },
          { name: 'sercondo', image: sercondo, title: 'PAINTING WORKS' },
        ].map(project => (
          <div
           key={project.name}
              style={{ ...boxStyle, ...scaleUpOnHoverStyle }}
              onMouseEnter={e => e.currentTarget.style.transform = scaleUpEffect.transform}
              onMouseLeave={e => e.currentTarget.style.transform = scaleUpOnHoverStyle.transform} 
          >
            <img src={project.image} alt={project.title} style={{ width: '100%', height: 'auto' }} />
            <h3 style={{ textAlign: 'center' }}>{project.title}</h3>
          </div>
        ))}
      </div>

      {/* Service Rows */}
      {/* First Row: Text Left, Image Right */}
      <div ref={rowRefs.row1} style={{ ...rowStyle, ...getRowAnimationStyle('row1') }}>
        <div style={textSectionStyle}>
           <Line /> {/* Add the line here */}
          <h2 style={titleStyle}>Elevate urban living with our condominium construction services.</h2>
          <p style={descriptionStyle}>The heart of our condominium construction services lies in the delivery of exceptional multi-unit residential spaces. We take immense pride in crafting environments that go beyond the ordinary, where each unit is a testament to our dedication to quality and attention to detail. From concept to completion, our team is driven to create living spaces that seamlessly integrate luxury, practicality, and aesthetic appeal.</p>
          {/* ... other text content ... */}
        </div>
        <div style={imageSectionStyle}>
          <img src={landscapeImage} alt="Luxury Design" style={{ width: '100%', height: 'auto' }} />
          {/* Overlay Text */}
          <div style={overlayTextStyle}>
            <h4 style={overlayTitleStyle}>The One Palace Residences</h4>
            <p style={overlayDescriptionStyle}>An architectural masterpiece, blending classic elegance with modern luxury to offer residents a lifestyle of sophistication and comfort.</p>
            <Link to="/projects" style={readMoreButtonStyle}>
              READ MORE</Link>
          </div>
        </div>
      </div>


      {/* Second Row: Image Left, Text Right */}
      <div ref={rowRefs.row2} style={{ ...rowReverseStyle, ...getRowAnimationStyle('row2') }}>
              <div style={imageSectionStyle}>
                <img src={palaceResidencesImage} alt="Palace Residences" style={{ width: '100%', height: 'auto' }} />
                {/* Overlay Text */}
                <div style={overlayTextStyle}>
                  <h4 style={overlayTitleStyle}>Your Project Title</h4>
                  <p>A short description of the project...</p>
                  <Link to="/projects" style={readMoreButtonStyle}>
                    READ MORE</Link>
                </div>
              </div>
              <div style={textSectionStyle}>
                <h2 style={titleStyle}>Dive into Luxury with Our Expertly Crafted Swimming Pools</h2>
                <p style={descriptionStyle}>Imagine stepping into your backyard and being greeted by a luxurious oasis...</p>
                {/* ... other text content ... */}
              </div>
            </div>  

      {/* Third Row: Text Left, Image Right */}
      <div ref={rowRefs.row3} style={{ ...rowStyle, ...getRowAnimationStyle('row3') }}>
              <div style={textSectionStyle}>
                <Line /> {/* Add the line here */}
                <h2 style={titleStyle}>Elevate urban living with our condominium construction services.</h2>
                <p style={descriptionStyle}>The heart of our condominium construction services lies in the delivery...</p>
                {/* ... other text content ... */}
              </div>
              <div style={imageSectionStyle}>
              <img src={poolImage} alt="Swimming Pools" style={{ width: '100%', height: 'auto' }} />
                {/* Overlay Text */}
                <div style={overlayTextStyle}>
                  <h4 style={overlayTitleStyle}>The One Palace Residences</h4>
                  <p>An architectural masterpiece, blending classic elegance with modern luxury to offer residents a lifestyle of sophistication and comfort.</p>
                  <Link to="/projects"  style={readMoreButtonStyle}>
                    READ MORE</Link>
                </div>
              </div>
            </div>
            <PopupChatWindow/>
        </div>
  );
};

export default Services;