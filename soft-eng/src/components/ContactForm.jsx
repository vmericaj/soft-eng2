import React from 'react';
import backgroundImage from "../assets/BG.jpg"; // Make sure to use the correct path to your image

const ContactForm = () => {
  return (
    <div className="flex flex-wrap bg-orange-100">
      <div className="w-full md:w-1/2 p-10">
        <h2 className="text-2xl font-bold mb-4">Got a question about 3MV Construction?</h2>
        <p className="mb-8">Are you interested in performing with us? Have some suggestions? Fill out the form and a member from our team will get back to you within 24 hours.</p>
        <form className="space-y-4">
          <input className="w-full p-2 border-2 border-orange-500" type="text" placeholder="Enter your name" />
          <input className="w-full p-2 border-2 border-orange-500" type="email" placeholder="Enter your email address" />
          <input className="w-full p-2 border-2 border-orange-500" type="tel" placeholder="Enter your phone number" />
          <textarea className="w-full p-2 border-2 border-orange-500" placeholder="Message" rows="4"></textarea>
          <button className="w-full p-2 bg-orange-500 text-white font-bold">SUBMIT</button>
        </form>
      </div>
      <div className="hidden md:block md:w-1/2" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}></div>
    </div>
  );
};

export default ContactForm;
