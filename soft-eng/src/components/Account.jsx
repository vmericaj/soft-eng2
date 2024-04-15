import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/se.png";
import { TfiDashboard } from "react-icons/tfi";
import { MdInventory2 } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { FaUser } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { useUser } from '../components/UserContext';

const Account = () => {
  
  const [email, setEmail] = useState('juandelacruz@example.com');
  const [mobile, setMobile] = useState('+63 916 303 3987');
  const [age, setAge] = useState(20);
  const [birthday, setBirthday] = useState('1990-01-01');
  
  const { name, setName, profilePic, updateUser } = useUser();
  const [street, setStreet] = useState('Street Address');
  const [city, setCity] = useState('City/Municipality');
  const [province, setProvince] = useState('Province');
  const [apt, setApt] = useState('Apt,Suite,Building');
  const [brgy, setBrgy] = useState('Barangay');
  const [postal, setPostal] = useState('Postal Code');
  
  
  const [isAddressEditing, setIsAddressEditing] = useState(false);

  // Toggle editing for address
  const toggleAddressEdit = () => {
    setIsAddressEditing(!isAddressEditing);
  };

  // Save function for address (if separate actions needed)
  const saveAddressChanges = () => {
    setIsAddressEditing(false);
    // Additional logic for saving address, if different from general save
    console.log('Address saved:', { bldghouse, city });
  };

  // State to track editing mode
  const [isEditing, setIsEditing] = useState(false);

  // Function to handle file input for profile pictures
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            updateUser({ profilePic: reader.result });
        };
        reader.readAsDataURL(file);
    }
};

const handleNameChange = (e) => {
  console.log("Changing name to:", e.target.value);
  setName(e.target.value);
};


  // Function to handle saving changes
  const saveChanges = () => {
    setIsEditing(false);
    // Here you would typically make an API call to update the user's account details
    console.log('Saved:', { name, email,mobile });
  };

  // Function to toggle editing mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleAgeChange = (newAge) => {
    const newBirthday = new Date();
    newBirthday.setFullYear(new Date().getFullYear() - newAge);
    newBirthday.setHours(0, 0, 0, 0); // Normalize the time part to avoid timezone issues
    setBirthday(newBirthday.toISOString().split('T')[0]);
    setAge(newAge);
  };
  
  const handleBirthdayChange = (newBirthday) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const birthDate = new Date(newBirthday);
    let newAge = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      newAge--;
    }
    setBirthday(newBirthday);
    setAge(newAge);
  };
  
  const provinces = [
    "Abra", "Agusan del Norte", "Agusan del Sur", "Aklan", "Albay",
    "Antique", "Apayao", "Aurora", "Basilan", "Bataan",
    "Batanes", "Batangas", "Benguet", "Biliran", "Bohol",
    "Bukidnon", "Bulacan", "Cagayan", "Camarines Norte", "Camarines Sur",
    "Camiguin", "Capiz", "Catanduanes", "Cavite", "Cebu",
    "Compostela Valley", "Cotabato", "Davao del Norte", "Davao del Sur", "Davao Oriental",
    "Dinagat Islands", "Eastern Samar", "Guimaras", "Ifugao", "Ilocos Norte",
    "Ilocos Sur", "Iloilo", "Isabela", "Kalinga", "La Union",
    "Laguna", "Lanao del Norte", "Lanao del Sur", "Leyte", "Maguindanao",
    "Marinduque", "Masbate", "Misamis Occidental", "Misamis Oriental", "Mountain Province",
    "Negros Occidental", "Negros Oriental", "Northern Samar", "Nueva Ecija", "Nueva Vizcaya",
    "Occidental Mindoro", "Oriental Mindoro", "Palawan", "Pampanga", "Pangasinan",
    "Quezon", "Quirino", "Rizal", "Romblon", "Samar",
    "Sarangani", "Siquijor", "Sorsogon", "South Cotabato", "Southern Leyte",
    "Sultan Kudarat", "Sulu", "Surigao del Norte", "Surigao del Sur", "Tarlac",
    "Tawi-Tawi", "Zambales", "Zamboanga del Norte", "Zamboanga del Sur", "Zamboanga Sibugay",
    "Metro Manila"
  ];

  const handleMobileChange = (e) => {
    let value = e.target.value;
    // Strip all non-numeric characters
    let numbers = value.replace(/\D/g, '');

    // Check if it starts correctly with the country code, if not, prepend
    if (!numbers.startsWith("63")) {
        numbers = "63" + numbers;
    }

    // Add spaces or any other separators as needed
    let formattedNumber = "+63 " + numbers.slice(2);
    setMobile(formattedNumber);
};

const handleEmailChange = (e) => {
  setEmail(e.target.value); // Just store the value as the user types
};

const handleEmailBlur = (e) => {
  let value = e.target.value.trim();
  // Check if there's text and no "@" symbol, then append "@gmail.com"
  if (value && !value.includes('@')) {
      value += "@gmail.com";
      setEmail(value);
  }
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
            {profilePic && (
              <img
                src={profilePic}
                alt="Profile"
                className="rounded-full h-8 w-8 object-cover"
              />
            )}
            <span>{name}</span>
          </div>
        </div>


        {/* Main Content */}
        <div className="flex-1 p-6 bg-white overflow-y-auto">
          <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-md">
            {/* Left Column for Profile Picture and Buttons */}
            <div className="flex flex-col items-center w-1/3 space-y-4">
              <div className="rounded-full bg-gray-200 overflow-hidden h-32 w-32">
                <img src={profilePic || '/path-to-default-avatar.png'} alt="upload" className="object-cover h-full w-full" />
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
                  <div className="flex flex-wrap -mx-2">
                  <div className="mb-6 px-2 w-1/2">
  <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="name">
    Name
  </label>
  {isEditing ? (
    <input
      id="name"
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}  // Directly updates the name in the UserContext
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  ) : (
    <span>{name}</span>
  )}
</div>


          <div className="mb-6 px-2 w-1/2">
          <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="age">Age</label>
            {isEditing ? (
              <select
                id="age"
                value={age}
                onChange={(e) => handleAgeChange(Number(e.target.value))}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                {/* Generate age options */}
                {Array.from({ length: 83 }, (_, i) => 18 + i).map((ageOption) => (
                  <option key={ageOption} value={ageOption}>
                    {ageOption}
                  </option>
                ))}
              </select>
            ) : (
              <span>{age}</span>
            )}
          </div>

          <div className="mb-6 px-2 w-1/2">
              <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                  Email Address
              </label>
              {isEditing ? (
                  <input
                      id="email"
                      type="text"
                      value={email}
                      onChange={handleEmailChange}
                      onBlur={handleEmailBlur}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
              ) : (
                  <span>{email}</span>
              )}
          </div>

          <div className="mb-6 px-2 w-1/2">
            <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="birthday">Birthday</label>
            {isEditing ? (
              <input
                type="date"
                id="birthday"
                value={birthday}
                onChange={(e) => handleBirthdayChange(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            ) : (
              <span>{new Date(birthday).toLocaleDateString()}</span>
            )}
          </div>
          <div className="mb-6 px-2 w-1/2">
              <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="mobile">
                  Mobile Number
              </label>
              {isEditing ? (
                  <input
                      id="mobile"
                      type="text"
                      value={mobile}
                      onChange={handleMobileChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
              ) : (
                  <span>{mobile}</span>
              )}
          </div>

          </div>      
            </div>
        </div>
        {/* Address Details Section */}
        <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-customBlue mb-6">Address</h1>
          {isAddressEditing ? (
            <button
              className="bg-green-600 text-white font-bold py-1 px-4 rounded mb-6"
              onClick={saveAddressChanges}
            >
              Save
            </button>
          ) : (
            <button
              className="bg-red-700 text-white font-bold py-1 px-4 rounded mb-6"
              onClick={toggleAddressEdit}
            >
              <BsPencilSquare /> 
            </button>
          )}
        </div>
        <div className="flex flex-wrap -mx-2">
          <div className="mb-6 px-2 w-1/2">
            <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="street">
              Street Address
            </label>
            {isAddressEditing ? (
              <input
                id="street"
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            ) : (
              <span>{street}</span>
            )}
          </div>
          <div className="mb-6 px-2 w-1/2">
            <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="apt">
              Apt, Suite, Building
            </label>
            {isAddressEditing ? (
              <input
                id="apt"
                type="text"
                value={apt}
                onChange={(e) => setApt(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            ) : (
              <span>{apt}</span>
            )}
          </div>
          <div className="mb-6 px-2 w-1/2">
              <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="province">
                Province
              </label>
              {isAddressEditing ? (
                <select
                  id="province"
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  {provinces.map((prov) => (
                    <option key={prov} value={prov}>
                      {prov}
                    </option>
                  ))}
                </select>
              ) : (
                <span>{province}</span>
              )}
            </div>
          <div className="mb-6 px-2 w-1/2">
            <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="city">
              City/Municipality 
            </label>
            {isAddressEditing ? (
              <input
                id="city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            ) : (
              <span>{city}</span>
            )}
          </div>
          <div className="mb-6 px-2 w-1/2">
            <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="brgy">
              Barangay 
            </label>
            {isAddressEditing ? (
              <input
                id="brgy"
                type="text"
                value={brgy}
                onChange={(e) => setBrgy(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            ) : (
              <span>{brgy}</span>
            )}
          </div>
          <div className="mb-6 px-2 w-1/2">
            <label className="block text-gray-700 text-xs font-bold mb-2" htmlFor="postal">
              Postal Code
            </label>
            {isAddressEditing ? (
              <input
                id="postal"
                type="text"
                value={postal}
                onChange={(e) => setPostal(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            ) : (
              <span>{postal}</span>
            )}
          </div>
          
        </div>
        
      </div>
        <div>

        </div>
        
        </div>
        
        </div>
        </div>
  );
};

export default Account;