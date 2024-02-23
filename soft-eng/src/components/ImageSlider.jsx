import React, { useState } from 'react';

const images = [
  // Add the URLs of your images here
  '/home1.jpg',
  '/home2.png',
  // etc.
];

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <img src={images[currentImageIndex]} alt="Scenery" className="w-full h-auto object-cover"/>
      <div className="absolute w-full flex justify-between items-center px-4 py-2">
        <button onClick={prevImage} className="bg-white rounded-full p-2">
          &#8592;
        </button>
        <button onClick={nextImage} className="bg-white rounded-full p-2">
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
