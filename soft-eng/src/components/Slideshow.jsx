import React, { useState } from 'react';

// Mock data for the slides
const slides = [
  {
    title: "Lorem Ipsum One Page",
    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
    buttonText: "Show Case",
  },
  {
    title: "Lorem JELLO One Page",
    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
    buttonText: "Show Case",
  },

  // ... other slides
];

const Slideshow = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

  const { title, description, buttonText } = slides[current];

  return (
    <div className="flex items-center justify-center bg-gray-800 text-white p-6 space-x-4">
      <button onClick={prevSlide} className="text-white text-2xl">
        &#10094;
      </button>
      <div className="text-center">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="my-4">{description}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {buttonText}
        </button>
      </div>
      <button onClick={nextSlide} className="text-white text-2xl">
        &#10095;
      </button>
    </div>
  );
};

export default Slideshow;
