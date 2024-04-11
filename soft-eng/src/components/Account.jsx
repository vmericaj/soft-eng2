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
              style={{ backgroundColor: '#0F076D' }}
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
  const [profilePic, setProfilePic] = useState(null);
  const [name, setName] = useState('Juan Dela Cruz');
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
  const [age, setAge] = useState(30);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Changes saved');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="flex flex-col w-64 h-full px-4 py-8 bg-black dark:bg-gray-800 dark:border-gray-600">
        {/* Logo and title */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-14 w-14" />
          <h1 className="text-xl font-bold text-customOrange">3MV CONSTRUCTION</h1>
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
        <div className="flex items-center px-4 -mx-2 mt-auto"> {/* Added mt-auto to push the button to the bottom */}
          <button className="flex items-center font-bold justify-center w-full px-4 py-2 text-black bg-customOrange rounded-md hover:bg-customBlue hover:text-white">
            <span>LOGOUT</span>
          </button>
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
            <input className="border rounded px-3 py-1 " type="search" placeholder="Search" />
            <div className="rounded-full h-8 w-8 bg-blue-500 text-white flex items-center justify-center" style={{ backgroundColor: '#0F076D' }}>JD</div>
            <span>{name}</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 bg-white overflow-y-auto">
          {/* Account Details */}
          <div className="h-screen bg-gray-100 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#0F076D' }}>Manage Account</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-48 h-48 bg-gray-200 rounded-full overflow-hidden">
                    {profilePic ? (
                      <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                      <div className="flex justify-center items-center h-full text-gray-400">
                        No photo
                      </div>
                    )}
                  </div>
                  <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label htmlFor="file-upload" className="mt-4 cursor-pointer bg-gray-200 text-gray-800 px-3 py-1 rounded-lg hover:bg-gray-300">
                    Upload Photo
                  </label>
                </div>
                <div>
                  <form onSubmit={handleSubmit}>
                    <EditableField label="Name" type="text" value={name} onSave={setName} />
                    <EditableField label="Email Address" type="email" value={email} onSave={setEmail} />
                    <EditableField label="Mobile" type="text" value={mobile} onSave={setMobile} />
                    <EditableField label="Birthday" type="date" value={birthday} onSave={setBirthday} />
                    <EditableField label="Age" type="number" value={age} onSave={setAge} />
                    <div className="mt-4">
                      <h3 className="text-lg font-bold mb-2" style={{ color: '#0F076D' }}>Address</h3>
                      <EditableField label="Building/House No." type="text" value={address.building} onSave={(value) => setAddress({ ...address, building: value })} />
                      <EditableField label="Street Name" type="text" value={address.street} onSave={(value) => setAddress({ ...address, street: value })} />
                      <EditableField label="Barangay" type="text" value={address.barangay} onSave={(value) => setAddress({ ...address, barangay: value })} />
                      <EditableField label="Province" type="text" value={address.province} onSave={(value) => setAddress({ ...address, province: value })} />
                      <EditableField label="Postal Code" type="text" value={address.postalCode} onSave={(value) => setAddress({ ...address, postalCode: value })} />
                    </div>
                    <button
                      type="submit"
                      className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      style={{ backgroundColor: '#0F076D' }}
                    >
                      Save Changes
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
