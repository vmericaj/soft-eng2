import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/se.png";
import { TfiDashboard } from "react-icons/tfi";
import { MdInventory2 } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { FaUser } from "react-icons/fa";

const Account = () => {
  const [name, setName] = useState('Juan Dela Cruz');
  const [email, setEmail] = useState('juandelacruz@example.com');
  const [profilePic, setProfilePic] = useState(null);
  const [age, setAge] = useState(20);
  const [birthday, setBirthday] = useState('1990-01-01');


  useEffect(() => {
    const birthdayFromAge = new Date(new Date().setFullYear(new Date().getFullYear() - age));
    setBirthday(birthdayFromAge.toISOString().split('T')[0]);
  }, [age]);

  // When birthday changes, update the age
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const birthYear = new Date(birthday).getFullYear();
    setAge(currentYear - birthYear);
  }, [birthday]);

  // State to track editing mode
  const [isEditing, setIsEditing] = useState(false);

  // Function to handle file input for profile pictures
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Update the profilePic state and the header image simultaneously
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to handle saving changes
  const saveChanges = () => {
    setIsEditing(false);
    // Here you would typically make an API call to update the user's account details
    console.log('Saved:', { name, email });
  };

  // Function to toggle editing mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="flex flex-col w-64 h-full px-4 py-8 bg-black dark:bg-gray-800 dark:border-gray-600">
        {/* Logo and title */}
          <div className="flex items-center space-x-2" >
            <img src={logo} alt="Logo" className="h-14 w-14" /> {/* Adjust the height and width as needed */}
            <h1 className="text-xl font-bold" style={{ color: '#EF9400' }}>3MV CONSTRUCTION</h1>
          </div>
        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>
          <Link to="/inventory" className="flex items-center px-4 py-2 text-white hover:text-customOrange">
            <TfiDashboard className="mr-2" /> {/* Placing the icon before the text */}
            DASHBOARD
          </Link>
          <Link to="/projecttable" className="flex items-center px-4 py-2 text-white hover:text-customOrange">
            <MdInventory2 className="mr-2" /> 
            PROJECTS
          </Link>
          
          <Link to="/customers" className="flex items-center px-4 py-2 text-white hover:text-customOrange">
            <IoPersonSharp className="mr-2" /> 
            CUSTOMERS
            </Link>

          <Link to="/employees" className="flex items-center px-4 py-2 text-white hover:text-customOrange">
            <BsFillPersonVcardFill className="mr-2" /> 
            EMPLOYEES
            </Link>
          <Link to="/account" className="flex items-center px-4 py-2 text-white hover:text-customOrange">
            <VscAccount className="mr-2" /> 
            ACCOUNT
            </Link>
          
          </nav>

          <div className="flex items-center px-4 -mx-2">
          <Link
            to="/"  // Change "/logout" to your desired path
            className="flex items-center font-bold justify-center w-full px-4 py-2 text-black bg-customOrange rounded-md hover:bg-customBlue hover:text-white"
          >
            <span>LOGOUT</span>
          </Link>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-1 h-full overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between flex-shrink-0 px-8 py-4 bg-white border-b dark:bg-gray-800 dark:border-gray-600">
          <div className="flex items-center">
            <VscAccount className="mr-2 w-6 h-6 text-customBlue" />
            <h1 className="text-xl font-bold text-customBlue dark:text-white">ACCOUNT</h1>
          </div>
          <div className="flex items-center space-x-2">
            {/* Display the uploaded image here */}
            {profilePic && <img src={profilePic} alt="Profile" className="rounded-full h-8 w-8 object-cover" />}
            <span>{name}</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 bg-white overflow-y-auto">
          <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-md">
            {/* Left Column for Profile Picture and Buttons */}
            <div className="flex flex-col items-center w-1/3 space-y-4">
              <div className="rounded-full bg-gray-200 overflow-hidden h-32 w-32">
                <img src={profilePic || '/path-to-default-avatar.png'} alt="" className="object-cover h-full w-full" />
              </div>
              <div className={`flex flex-col space-y-2 ${isEditing ? 'space-y-2' : 'space-y-4'}`}>
                <label className="cursor-pointer bg-customBlue text-white text-sm font-bold py-2 px-4 rounded inline-block text-center">
                  Upload Picture
                  <input type="file" className="hidden" onChange={handleFileChange} accept="image/*" />
                </label>
                <button
                  className={`bg-green-600 text-white font-bold py-1 px-4 rounded ${isEditing ? 'block' : 'hidden'}`}
                  onClick={saveChanges}
                >
                  Save
                </button>
                <button
                  className={`bg-red-700  text-white font-bold py-1 px-4 rounded ${isEditing ? 'hidden' : 'block'}`}
                  onClick={toggleEdit}
                >
                  Edit
                </button>
              </div>
            </div>


        {/* Account Details Section */}
        <div className="w-2/3">
              <h1 className="text-2xl font-semibold text-customBlue mb-6">Account Details</h1>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                {isEditing ? (
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                ) : (
                  <span>{name}</span>
                )}
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                {isEditing ? (
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                ) : (
                  <span>{email}</span>
                )}
              </div>
          
        </div>
        </div>
        
      </div>
    </div>
        </div>
  );
};

export default Account;