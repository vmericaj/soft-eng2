import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from "../assets/BG.jpg";
import logoImage from "../assets/se.png";
import { motion } from 'framer-motion';
import poolIcon from "../assets/iconp.png";
import houseIcon from "../assets/iconh.png";
import condoIcon from "../assets/iconc.png";
import poolIconHover from "../assets/iconph.png";
import houseIconHover from "../assets/iconhh.png";
import condoIconHover from "../assets/iconch.png";
import yourImageSource from "../assets/BG.jpg";
import backgroundImage1 from "../assets/pool.png";// Path to your first image
import backgroundImage2 from "../assets/BG.jpg";// Path to your second image
import backgroundImage3 from "../assets/contact.png"; // Path to your third image

 const images = [backgroundImage1, backgroundImage2, backgroundImage3];

 const Home = () => {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const slides = [
    {
      title: "Lorem Ipsum One Page",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
      buttonText: "Show Case",
    },
    {
      title: "Lorem hell One Page",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
      buttonText: "Show Case",
    },
    // ... other slides
  ];
  
  const [current, setCurrent] = useState(0);
  
  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

  const { title, description, buttonText } = slides[current];
  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div>
      {/* Header Section */}
      <header className=" shadow-lg w-full rounded-lg mt-4 mx-auto max-w-8xl">
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

      {/* Main Content Section */}
      <div className="relative mt-6 mx-auto max-w-[92%]">
        <div className="rounded-2xl overflow-hidden" style={{ height: '700px' }}>
          <img src={images[currentImageIndex]} alt="Background" className="w-full h-full object-cover"/>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-center text-white rounded-2xl" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
          <div>
            <h1 className="text-5xl font-bold">FROM BLUEPRINT TO REALITY</h1>
            <p className="text-lg mt-4">3MV Construction stands as the unwavering name you can rely on to turn these aspirations into tangible achievements.</p>
            <div className="mt-8">
            <button className="text-white py-2 px-4 rounded-lg mr-4 transition-colors border-transparent duration-200 bg-black hover:bg-customBlue hover:text-white border hover:border-customBlue">
                READ MORE
            </button>
            <button className="text-white py-2 px-4 rounded-lg mr-4 transition-colors duration-200 bg-gradient-to-r from-gradientEnd to-gradientStart hover:bg-black hover:text-white hover:from-gradientStart hover:to-gradientEnd border hover:border-white">
              BOOK ONLINE NOW
            </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleImageChange(index)}
              className={`h-4 w-4 rounded-full ${currentImageIndex === index ? 'bg-white' : 'bg-gray-400'}`}
              aria-label={`Change to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <h2 className="text-2xl font-semibold text-[#FDA00A]">OUR SERVICES</h2>
        <p className="text-lg text-white">Explore our projects</p>
      </div>
      
      <div className="mt-8 mx-auto max-w-[92%] grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Container 1 */}
        <motion.div
          className={`p-4 rounded-xl cursor-pointer shadow-lg ${hover1 ? 'bg-[#FDA00A]' : 'bg-white'}`}
          onHoverStart={() => setHover1(true)}
          onHoverEnd={() => setHover1(false)}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          <img 
            src={hover1 ? houseIconHover : houseIcon} 
            alt="Logo" 
            className="h-18 w-16 mx-auto"
          />
          <p className={`text-lg mt-4 text-center ${hover1 ? 'text-white' : 'text-[#FDA00A]'}`}>
            Homes
          </p>
          <p className={`text-sm mt-4 text-center ${hover1 ? 'text-white' : 'text-[#A29D9D]'}`}>
          We stand ready to turn your vision into a living reality. Our home construction services 
          are crafted with the understanding that a home is more than just a structure
          </p>
        </motion.div>

        {/* Container 2 */}
        <motion.div
          className={`p-4 rounded-xl cursor-pointer shadow-lg ${hover2 ? 'bg-[#FDA00A]' : 'bg-white'}`}
          onHoverStart={() => setHover2(true)}
          onHoverEnd={() => setHover2(false)}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          <img 
            src={hover2 ? poolIconHover : poolIcon} 
            alt="Logo" 
            className="h-18 w-16 mx-auto"
          />
          <p className={`text-lg mt-4 text-center ${hover2 ? 'text-white' : 'text-[#FDA00A]'}`}>
            Swimming Pools
          </p>
          <p className={`text-sm mt-4 text-center ${hover2 ? 'text-white' : 'text-[#A29D9D]'}`}>
          We invite you to dive into a world of opulence with our expertly crafted swimming pools, 
          where each design is a masterpiece and every detail is thoughtfully considered.
          </p>
        </motion.div>

        {/* Container 3 */}
        <motion.div
          className={`p-4 rounded-xl cursor-pointer shadow-lg ${hover3 ? 'bg-[#FDA00A]' : 'bg-white'}`}
          onHoverStart={() => setHover3(true)}
          onHoverEnd={() => setHover3(false)}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          <img 
            src={hover3 ? condoIconHover : condoIcon} 
            alt="Logo" 
            className="h-10 w-12 mx-auto"
          />
          <p className={`text-lg mt-4 text-center ${hover3 ? 'text-white' : 'text-[#FDA00A]'}`}>
            Condominiums
          </p>
          <p className={`text-sm mt-4 text-center ${hover3 ? 'text-white' : 'text-[#A29D9D]'}`}>
          From concept to completion, our team is driven to create living spaces that seamlessly 
          integrate luxury, practicality, and aesthetic appeal.
          </p>
        </motion.div>
      </div>

      <div className="mt-8 mx-auto max-w-[92%] md:grid md:grid-cols-2 gap-10">
  {/* Image Container */}
  <div className="md:col-span-1">
    <img src={yourImageSource} alt="Descriptive Alt Text" className="w-full h-auto rounded-xl shadow-lg"/>
  </div>

  {/* Text Container */}
  <div className="md:col-span-1 space-y-4">
    <h2 className="text-2xl font-bold text-[#FDA00A]">Your Title Here</h2>
    <h3 className="text-xl font-semibold">Your Header Here</h3>
    <p className="text-md text-gray-700">
      Your detailed text goes here. This is the place for the extended description,
      information about your services, or any other content you wish to include here.
    </p>
  </div>
  </div>



      {/* Space between containers and slideshow */}
      <div className="mt-8" />

      {/* Slideshow */}
      <div>
        <Slideshow />
      </div>
    </div>
  );
};

const Slideshow = () => {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      title: "The One Palace Residences",
      description: "A luxurious condominium set to redefine modern living in the heart of Bulacan.",
      buttonText: "Show Case",
    },
    {
      title: "Serene Haven Homes",
      description: "Serene Haven Homes is a residential development project focused on creating a tranquil and sustainable living environment.",
      buttonText: "Show Case",
    },
    {
      title: "Crystal Lagoon Retreat",
      description: "The Crystal Lagoon Retreat will be strategically located in the scenic suburb of Antipolo, Rizal.",
      buttonText: "Show Case",
    },
    
  ];

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

  const { title, description, buttonText } = slides[current];

  return (
    <div className="flex items-center justify-center p-6 space-x-4 w-full rounded-2xl mt-6 mx-auto max-w-[92%]"
         style={{
           background: "linear-gradient(to right, #FDA00A, #0F076D)",
           color: "white"
         }}>
      <button onClick={prevSlide} className="text-white text-2xl">
        &#10094;
      </button>
      <div className="text-center">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="my-4">{description}</p>
        <button className="bg-[#FDA00A] hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
          {buttonText}
        </button>
      </div>
      <button onClick={nextSlide} className="text-white text-2xl">
        &#10095;
      </button>
    </div>
  );
};

export default Home;
