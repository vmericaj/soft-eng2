import { useState , useEffect } from 'react';
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
import newImage1 from "../assets/newImage1.jpg";
import newImage2 from "../assets/newImage2.jpg";
import newImage3 from "../assets/newImage3.jpg";
import PopupChatWindow from './PopupChatWindow';
import livingRoom from "../assets/pic1.jpg"
import Footer from './Footer';

 const Home = () => {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);

  const images = [
      newImage1,
      newImage2,
      newImage3,
    ]; // Add the new images here

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
      }, 5000); // Change slide every 5 seconds
  
  return () => clearInterval(intervalId); // Clear interval on unmount
    }, []);

  return (
    <div className="page-container">
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

      {/* Main Content Section */}
      <div className="relative mt-6 mx-auto max-w-[92%]">
        <div className="rounded-2xl overflow-hidden" style={{ height: '700px' }}>
        <img
    src={newImage1}
    alt="Background 1"
    className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${currentImageIndex === 0 ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
  />

  {/* Image 2 */}
  <img
    src={newImage2}
    alt="Background 2"
    className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${currentImageIndex === 1 ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
  />

  {/* Image 3 */}
  <img
    src={newImage3}
    alt="Background 3"
    className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${currentImageIndex === 2 ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
  />

        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-center text-white rounded-2xl" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
          <div>
            <h1 className="text-5xl font-bold shadow-xl">FROM BLUEPRINT TO REALITY</h1>
            <p className="text-lg mt-4 shadow-xl">3MV Construction stands as the unwavering name you can rely on to turn these aspirations into tangible achievements.</p>
            <div className="mt-8">
            <button className="text-white py-2 px-4 rounded-lg mr-4 transition-colors border-transparent duration-200 bg-black hover:bg-customBlue hover:text-white border hover:border-customBlue hover:scale-110 active:scale-75 transition-transform">
                READ MORE
            </button>
            <button className="text-white py-2 px-4 rounded-lg mr-4 transition-colors duration-200 bg-gradient-to-r from-gradientEnd to-gradientStart hover:bg-black hover:text-white hover:from-gradientStart hover:to-gradientEnd border hover:border-white hover:scale-110 active:scale-75 transition-transform">
    BOOK ONLINE NOW
</button>



            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <h2 className="text-2xl font-semibold text-[#FDA00A]">OUR SERVICES</h2>
        <p className="text-lg text-white">Explore our projects</p>
      </div>
      
      <div className="mt-8 mx-auto max-w-[92%] grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Container 1 */}
        <motion.div
          className={`p-4 rounded-xl shadow-lg ${hover1 ? 'bg-[#FDA00A]' : 'bg-white'}`}
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
            Water Features
          </p>
          <p className={`text-sm mt-4 text-center ${hover1 ? 'text-white' : 'text-[#A29D9D]'}`}>
          We stand ready to turn your vision into a living reality. Our home construction services 
          are crafted with the understanding that a home is more than just a structure
          </p>
        </motion.div>

        {/* Container 2 */}
        <motion.div
          className={`p-4 rounded-xl shadow-lg ${hover2 ? 'bg-[#FDA00A]' : 'bg-white'}`}
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
          className={`p-4 rounded-xl shadow-lg ${hover3 ? 'bg-[#FDA00A]' : 'bg-white'}`}
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
            Construction
          </p>
          <p className={`text-sm mt-4 text-center ${hover3 ? 'text-white' : 'text-[#A29D9D]'}`}>
          From concept to completion, our team is driven to create living spaces that seamlessly 
          integrate luxury, practicality, and aesthetic appeal.
          </p>
        </motion.div>
      </div>

      <div className="mt-8 mx-auto max-w-[92%] md:grid md:grid-cols-2 gap-10">
  {/* Image Container */}
  <div className="md:col-span-1 mt-3">
    <img src={livingRoom} alt="Descriptive Alt Text" className="w-full h-auto rounded-xl shadow-lg"/>
  </div>

  {/* Text Container */}
  <div className="md:col-span-1 space-y-4">
    <h2 className="text-4xl font-bold text-[#FDA00A] mt-4">Elevating Lifestyles with Precision and Elegance</h2>
    <h3 className="text-xl font-semibold">Transforming Spaces into Sanctuaries</h3>
    <p className="text-md text-gray-700">
  At <span style={{ fontWeight: 'bold' }}>3MV Construction</span>, we<span>'</span>re more than just builders; we are architects of comfort and style. Our services go beyond mere construction—we create environments that enhance your quality of life. Specializing in elegant water features and sophisticated outdoor spaces, we ensure every project reflects our commitment to excellence and precision.
  <br /><br />
  <span style={{ fontWeight: 'bold' }}>Elegant Water Features:</span> From serene ponds to dynamic fountains, our designs bring a sense of tranquility and sophistication to your doorstep.
  <br /><br />
  <span style={{ fontWeight: 'bold' }}>Outdoor Mastery:</span> We create outdoor living spaces that become your private retreat for relaxation and entertainment.
  <br /><br/>
  <span style={{ fontWeight: 'bold' }}>Quality Craftsmanship:</span> Using only premium materials and the finest craftsmanship, we ensure that every detail contributes to a lasting and beautiful finish.
  <br /><br />
  Discover the difference attention to detail makes in every layer of our work. Connect with us to start crafting your personalized oasis.
  <br /><br />
  <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#FDA00A' }}>Experience the 3MV Standard.</span>
</p>

  </div>
  </div>
      <PopupChatWindow/>
      <Footer/>
      </div>
    
  );
};

export default Home;
