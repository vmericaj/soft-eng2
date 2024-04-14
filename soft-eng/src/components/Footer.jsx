import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer bg-teal-600 text-white py-6 px-80 w-full mt-4">
      <div className="max-w-8xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* Social Media Icons */}
          <div className="mr-8">
            <span>FOLLOW OUR FACEBOOK PAGE</span>
          </div>
          <div className="flex space-x-4">
            {/* You'll replace these '#' with your actual social media links */}
            <a href="https://www.facebook.com/threemvconstruction" className="hover:text-gray-300 text-xl"> <FaFacebook /> </a>
          </div>
        </div>
        <div className="flex-grow">
          {/* Navigation Links */}
          <div className="flex justify-center space-x-6">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/about" className="hover:text-gray-300">About</Link>
            <Link to="/services" className="hover:text-gray-300">Services</Link>
            <Link to="/projects" className="hover:text-gray-300">Projects</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          </div>
        </div>
        <div>
          {/* Newsletter Subscription Form */}
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Email Address"
              className="mr-2 py-2 px-4 rounded text-black"
            />
            <button type="submit" className="bg-gray-800 hover:bg-gray-700 py-2 px-4 rounded">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
