import React, { useState } from 'react';
import backgroundImage1 from "../assets/pool.png";// Path to your first image
import backgroundImage2 from "../assets/BG.jpg";// Path to your second image
import backgroundImage3 from "../assets/contact.png"; // Path to your third image

const images = [backgroundImage1, backgroundImage2, backgroundImage3];

const GolfClubBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative">
      {/* Background image */}
      <div className="h-[300px] w-full max-w-[92%] mx-auto rounded-2xl overflow-hidden mt-6">
        <img src={images[currentImageIndex]} alt="Background" className="h-full w-full object-cover"/>
      </div>

      {/* Overlayed Text content */}
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-center text-white rounded-2xl" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
        <div>
          <h1 className="text-5xl font-bold">Welcome to Our Golf Club</h1>
          <p className="text-xl mt-4">Enjoy the advantages of the most popular and well-received sport</p>
          {/* Buttons */}
          <div className="mt-8">
            <button className="bg-white text-gray-800 font-bold py-2 px-4 rounded-lg mr-4">BOOK ONLINE NOW</button>
            <button className="bg-white text-gray-800 font-bold py-2 px-4 rounded-lg">MORE DETAILS</button>
          </div>
        </div>
      </div>

      {/* Circle indicators */}
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
  );
};

export default GolfClubBanner;