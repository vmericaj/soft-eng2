import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import logo from "../assets/se.png";
import backgroundImage from "../assets/BG.jpg"; // Import the background image

const HomePage = () => {
    return (
        <div>
            <header className="bg-white shadow-sm w-full rounded-2xl mt-8 mx-auto max-w-7xl">
                <div className="logo flex items-center gap-2">
                    <img src={logo} alt="Logo" className="h-14 w-14" />
                    <div className="flex flex-col">
                        {/* Use Link for internal navigation */}
                        <Link to="/" className="text-l font-bold" style={{ color: '#EF9400' }}>3MV</Link>
                        <span className="text-xll font-bold" style={{color:'#EF9400' }}>Construction</span>
                    </div>
                </div>
                <div className="menu-items flex gap-10">
                    {/* Update href to to, and change <a> to <Link> */}
                    <Link to="/" className="hover:text-gray-300">Home</Link>
                    <Link to="/about" className="hover:text-customOrange">About Us</Link>
                    <Link to="/projects" className="hover:text-customOrange">Projects</Link>
                    <Link to="/services" className="hover:text-customOrange">Services</Link>
                    <Link to="/contact" className="hover:text-customOrange">Contact Us</Link>
                    <Link to="/login" className="pl-4">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg" ><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx={8.5} cy={7} r={4} /><path strokeLinecap="round" 
                    strokeLinejoin="round" strokeWidth={2} d="M17 11l2 2 4-4" /></svg>
                    </Link>
                </div>
            </header>
            {/* Image Section */}
            <div className="image-section">
                <img src={backgroundImage} alt="Background" className="w-full h-auto" />
                {/* Optionally, you can add a title, description, and a button on top of the picture */}
                <div className="text-center py-8">
                    <h1 className="text-4xl font-bold text-gray-800">Welcome to Our Site</h1>
                    <p className="text-xl text-gray-600 mt-4 mb-8">Discover our projects and services.</p>
                    <Link to="/contact" className="inline-block bg-customOrange text-white font-bold py-2 px-4 rounded hover:bg-orange-600 transition-colors duration-300">
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
