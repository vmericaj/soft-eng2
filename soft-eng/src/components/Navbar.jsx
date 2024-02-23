import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link
import logoImage from "../assets/se.png"; // Adjust the path as necessary

const Navbar = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="shadow-sm w-full rounded-sm mt-4 mx-auto max-w-8xl"> {/* Use rounded-sm or another appropriate class */}
        <nav className="px-6 py-3 flex justify-between items-center w-full">
          {/* Left side - Logo placeholder */}
          <div className="flex items-center space-x-2">
            <img src={logoImage} alt="Logo" className="h-12 w-18" /> {/* Adjust size as needed */}
            <span className="text-xl font-semibold text-[#FDA00A]">3MV Construction</span>
          </div>
          {/* Right side - Menu items and Login button */}
          <div className="flex items-center">
            <div className="flex space-x-4">
              <Link to="/" className="text-black hover:text-customOrange px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/about" className="text-black hover:text-customOrange px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link to="/services" className="text-black hover:text-customOrange px-3 py-2 rounded-md text-sm font-medium">Services</Link>
              <Link to="/portfolio" className="text-black hover:text-customOrange px-3 py-2 rounded-md text-sm font-medium">Portfolio</Link>
              <Link to="/contact" className="text-black hover:text-customOrange px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            </div>
            
            <button className="bg-[#FDA00A] hover:bg-blue-700 text-white font-bold py-2 px-4 ml-4 rounded transition duration-300">
              Login
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
