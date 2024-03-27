import React from 'react';
import backgroundImage from "../assets/BG.jpg"; // replace with your actual image path
import someImage from "../assets/Facebook.png";
import logo from "../assets/se.png";
import someImage1 from "../assets/Google.png";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div 
      className="flex justify-center items-center h-screen bg-no-repeat bg-cover" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Left column for text */}
      <div className="w-1/2 pl-20 pr-12 pt-12 pb-12 text-white">
        <h2 className="text-4xl font-bold mb-6">WELCOME</h2>
        <h2 className="text-4xl font-bold mb-6">BACK!</h2>
        <p className="mb-4">
          Whether you're envisioning your ideal home, expanding your business, 
          or embarking on a community-enhancing project,
          3MV Construction is the name you can trust to make it happen.
        </p>
        <p>
            FOLLOW US:
        </p>
        <div className="flex items-center  text-white p-4 rounded">
            <img src={someImage} alt="Facebook" className="mr-4 w-12 h-12" /> {/* Facebook logo */}
            <p className="flex-1">
            Be the first on your block to get product updates, announcements, news and lots of really good content, like us on Facebook today!
            </p>
        </div>
      </div>

      {/* Right column for the form */}
      <div className="w-1/2 mx-auto rounded p-12">
        <form className="space-y-6 mx-auto w-96">
        <div className="flex justify-center mb-6">
              {/* Make logo clickable by wrapping with Link */}
              <Link to="/"> {/* Replace with your destination path */}
                <img src={logo} alt="Logo" className="w-24 h-auto" /> {/* Logo */}
              </Link>
            </div>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="appearance-none rounded italic relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email Address"
          />
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="password"
            required
            className="appearance-none relative block italic rounded w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
          />
          <div className="flex items-center justify-between">
                <label className="flex items-center">
                <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-white">
                    Remember me
                </span>
                </label>
                <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot Password?
                </a>
                </div>
          </div>
          
          {/* Include other form elements here */}
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-[#EF9400] bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            LOG IN
          </button>
          {/* Include other buttons or links here */}
          <div className="flex flex-col items-center space-y-6 mx-auto w-96">
                {/* Separator with text */}
                <div className="relative flex items-center w-full">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="px-4 bg-transparent text-sm text-gray-700 relative -top-0.5">
                    or
                    </span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>
                <button className="flex items-center justify-center px-4 mx-auto w-96 py-2 rounded shadow-md text-white bg-black bg-opacity-40">
                    <img src={someImage} alt="Facebook" className="w-6 h-6 mr-2" /> {/* Replace with your Facebook icon path */}
                    Continue with Facebook
                </button>
                <button className="flex items-center justify-center px-4 py-2 mx-auto w-96 rounded shadow-md text-white bg-black bg-opacity-40">
                    <img src={someImage1} alt="Google" className="w-6 h-6 mr-2" /> {/* Replace with your Google icon path */}
                    Continue with Google
                </button>
                
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Link to="/signup" className="text-white hover:text-indigo-500 text-center mt-4">
                Don't have an account? Sign Up
              </Link>
            </div>  
        </form>
      </div>
    </div>
  );
};

export default Login;
