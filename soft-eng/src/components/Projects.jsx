import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import backgroundImage from "../assets/BG.jpg"; // Make sure to replace with the path to your actual image
import logoImage from "../assets/se.png";
import { motion } from 'framer-motion';
import poolIcon from "../assets/iconp.png";
import houseIcon from "../assets/iconh.png";
import condoIcon from "../assets/iconc.png";
import poolIconHover from "../assets/iconph.png";
import houseIconHover from "../assets/iconhh.png";
import condoIconHover from "../assets/iconch.png";



const Projects = () => {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
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
            <Link to="/login">
              <button className="bg-[#FDA00A] hover:bg-blue-700 text-white font-bold py-2 px-4 ml-4 rounded transition duration-300">
                Login
              </button>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Projects;
