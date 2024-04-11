import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/se.png";
import { TfiDashboard } from "react-icons/tfi";
import { MdInventory2 } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";

const EditableField = ({ label, type, value, onSave }) => {
  const [editMode, setEditMode] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    onSave(inputValue);
    setEditMode(false);
  };

  return (
    <div className="flex items-center mb-4">
      <label className="mr-4">{label}:</label>
      <div className="flex items-center">
        {editMode ? (
          <div className="flex flex-col">
            <input
              className="border px-2 py-1 rounded mb-2"
              type={type}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
              onClick={handleSave}
            >
              Done
            </button>
          </div>
        ) : (
          <div className="flex items-center">
            <span>{value}</span>
            <button
              className="ml-2 p-1 rounded border flex items-center justify-center"
              onClick={handleEdit}
            >
              🖉 {/* Minimalistic pencil icon */}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const Account = () => {
  // State for account details
  const [profilePic, setProfilePic] = useState(null);
  const [email, setEmail] = useState('juandelacruz@gmail.com');
  const [mobile, setMobile] = useState('123456789');
  const [birthday, setBirthday] = useState('01-02-1234');
  const [address, setAddress] = useState({
    building: '123',
    street: 'Main Street',
    barangay: 'San Juan',
    province: 'Metro Manila',
    postalCode: '123',
  });
  const [age, setAge] = useState(25);

  // File change handler for profile picture upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Submit handler for saving changes
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to save changes
    console.log('Changes saved');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="flex flex-col w-64 h-full px-4 py-8 bg-black dark:bg-gray-800 dark:border-gray-600">
        {/* Logo and title */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-14 w-14" />
          <h1 className="text-xl font-bold" style={{ color: '#EF9400' }}>3MV CONSTRUCTION</h1>
        </div>
        {/* Sidebar navigation */}
        <nav>
          <Link to="/" className="flex items-center px-4 py-2 text-white hover:text-customOrange">
            <TfiDashboard className="mr-2" />
            DASHBOARD
          </Link>
          <Link to="/projects" className="flex items-center px-4 py-2 text-white hover:text-customOrange">
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
        {/* Logout button */}
        <div className="flex items-center px-4 -mx-2">
          <button className="flex items-center font-bold justify-center w-full px-4 py-2 text-black bg-customOrange rounded-md hover:bg-customBlue hover:text-white">
            <span>LOGOUT</span>
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-center justify-between flex-shrink-0 px-8 py-4 bg-white border-b dark:bg-gray-800 dark:border-gray-600">
          <div className="flex items-center">
            <VscAccount className="mr-2 w-6 h-6 text-customBlue" />
            <h1 className="text-xl font-bold text-customBlue dark:text-white">ACCOUNT</h1>
          </div>
          <div className="flex items-center space-x-2">
            <input className="border rounded px-3 py-1 " type="search" placeholder="Search" />
            <div className="rounded-full h-8 w-8 bg-blue-500 text-white flex items-center justify-center" style={{ backgroundColor: '#0F076D' }}>JD</div>
            <span>Juan Dela Cruz</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 bg-white overflow-hidden">
          {/* Account Details */}
          <div className="h-screen bg-gray-100 flex justify-center items-center">
            <div className="bg-white shadow p-8 rounded-lg flex gap-8">
              {/* Left column */}
              <div className="w-1/2 pr-4">
                <h2 className="text-xl font-bold mb-6">Manage Account</h2>
                {/* Profile picture upload section */}
                <div className="flex flex-col items-center">
                  {/* Profile picture */}
                  <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
                    {profilePic ? (
                      <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                      <div className="flex justify-center items-center h-full">
                        Your photo
                      </div>
                    )}
                  </div>
                  {/* Upload button */}
                  <label htmlFor="file-upload" className="mt-4 cursor-pointer border border-gray-300 px-4 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100">
                    Choose Photo
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>
                {/* Editable fields */}
                <EditableField label="Email Address" type="email" value={email} onSave={setEmail} />
                <EditableField label="Mobile" type="text" value={mobile} onSave={setMobile} />
                <EditableField label="Birthday" type="date" value={birthday} onSave={setBirthday} />
                <EditableField label="Age" type="number" value={age} onSave={setAge} />
                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                  onClick={handleSubmit}
                >
                  Save Changes
                </button>
              </div>
              {/* Right column */}
              <div className="w-1/2 pl-4">
                <h2 className="text-xl font-bold mb-6">Address Details</h2>
                {/* Editable fields for address */}
                <EditableField label="Building/House No." type="text" value={address.building} onSave={(value) => setAddress({ ...address, building: value })} />
                <EditableField label="Street Name" type="text" value={address.street} onSave={(value) => setAddress({ ...address, street: value })} />
                <EditableField label="Barangay" type="text" value={address.barangay} onSave={(value) => setAddress({ ...address, barangay: value })} />
                <EditableField label="Province" type="text" value={address.province} onSave={(value) => setAddress({ ...address, province: value })} />
                <EditableField label="Postal Code" type="text" value={address.postalCode} onSave={(value) => setAddress({ ...address, postalCode: value })} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
