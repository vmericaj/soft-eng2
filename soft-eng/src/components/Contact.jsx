import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import backgroundImage from "../assets/29a.png"; // Make sure to replace with the path to your actual image
import logoImage from "../assets/se.png";
import { motion } from 'framer-motion';
import poolIcon from "../assets/iconp.png";
import houseIcon from "../assets/iconh.png";
import condoIcon from "../assets/iconc.png";
import poolIconHover from "../assets/iconph.png";
import houseIconHover from "../assets/iconhh.png";
import condoIconHover from "../assets/iconch.png";
import alarmIcon from "../assets/alarm.png";
import phoneIcon from "../assets/phone.png";
import emailIcon from "../assets/email.png";
import locationIcon from "../assets/location.png";


const Contact = () => {
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
              <Link to="/" className="text-black hover:text-customOrange px-3 py-2 rounded-md text-sm font-medium hover:scale-110 active:scale-75 transition-transform">Home</Link>
              <Link to="/about" className="text-black hover:text-customOrange px-3 py-2 rounded-md text-sm font-medium hover:scale-110 active:scale-75 transition-transform">About</Link>
              <Link to="/services" className="text-black hover:text-customOrange px-3 py-2 rounded-md text-sm font-medium hover:scale-110 active:scale-75 transition-transform">Services</Link>
              <Link to="/projects" className="text-black hover:text-customOrange px-3 py-2 rounded-md text-sm font-medium hover:scale-110 active:scale-75 transition-transform">Projects</Link>
              <Link to="/contact" className="text-black hover:text-customOrange px-3 py-2 rounded-md text-sm font-medium hover:scale-110 active:scale-75 transition-transform">Contact</Link>
            </div>
            
            {/* Login Button - If it navigates to a login page, consider using Link */}
            <Link to="/login">
              <button className="bg-[#FDA00A] hover:bg-blue-700 text-white font-bold py-2 px-4 ml-4 rounded transition duration-300 hover:scale-110 active:scale-75 transition-transform">
                Login
              </button>
            </Link>
          </div>
        </nav>
      </header>
      <div className="mt-8 mx-auto max-w-[92%] grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl cursor-pointer shadow-lg bg-white flex flex-col justify-center items-center">
            <img src={alarmIcon} alt="Image 1" className="h-30 w-28 object-cover rounded-md mb-4" />
            <div className="text-center">
                <h1 className="text-m font-bold text-black mb-2">HOURS OF OPERATION </h1>
                <p className="text-sm text-[#A29D9D]">8:00 AM to 5:00 PM , MONDAY - FRIDAY</p>
            </div>
            </div>

            {/* Container 2 */}
            <div className="p-4 rounded-xl cursor-pointer shadow-lg bg-white flex flex-col justify-center items-center">
            <img src={phoneIcon} alt="Image 1" className="h-30 w-28 object-cover rounded-md mb-4" />
            <div className="text-center">
                <h1 className="text-m font-bold text-black mb-2">PHONE</h1>
                <p className="text-sm text-[#A29D9D]">+63 917 103 3281 | +63 915 941 7307</p>
            </div>
            </div>

            {/* Container 3 */}
            <div className="p-4 rounded-xl cursor-pointer shadow-lg bg-white flex flex-col justify-center items-center">
            <img src={emailIcon} alt="Image 1" className="h-30 w-28 object-cover rounded-md mb-4" />
            <div className="text-center">
                <h1 className="text-m font-bold text-black mb-2">GENERAL INQUIRIES </h1>
                <p className="text-sm text-[#A29D9D]">threemvconstruction @gmail.com</p>
            </div>
            </div>

            {/* Container 4 */}
            <div className="p-4 rounded-xl cursor-pointer shadow-lg bg-white flex flex-col justify-center items-center">
            <img src={locationIcon} alt="Image 1" className="h-30 w-28 object-cover rounded-md mb-4" />
            <div className="text-center">
                <h1 className="text-m font-bold text-black mb-2">LOCATION</h1>
                <p className="text-sm text-[#A29D9D]">163 Flamengco ST. Panghulo, Obando,Bulacan</p>
            </div>
            </div>
        </div>

        {/* Form */}

        <div className="flex flex-wrap bg-[#EBE4D1-90] mt-8 mx-auto max-w-[92%] rounded-lg shadow-lg">
      <div className="w-full md:w-1/2 p-10">
        <h2 className="text-xl font-bold mb-4">Got a question about 3MV Construction?</h2>
        <p className="mb-8">Are you interested in performing with us? Have some suggestions? Fill out the form and a member from our team will get back to you within 24 hours.</p>
        <form className="space-y-4">
          <input className="w-full p-2 border-2 border-[#EF9400] rounded-lg" type="text" placeholder="Enter your name" />
          <input className="w-full p-2 border-2 border-[#EF9400] rounded-lg" type="email" placeholder="Enter your email address" />
          <input className="w-full p-2 border-2 border-[#EF9400] rounded-lg" type="tel" placeholder="Enter your phone number" />
          <textarea className="w-full p-2 border-2 border-[#EF9400] rounded-lg" placeholder="Message" rows="4"></textarea>
          <button className="w-full p-2 bg-[#EF9400] text-white font-bold rounded-lg">SUBMIT</button>
        </form>
      </div>
      <div className="hidden md:block md:w-1/2 rounded-lg" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}></div>

    </div>
        
    </div>
  );
};

export default Contact;
   