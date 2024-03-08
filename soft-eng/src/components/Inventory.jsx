import React from 'react';
import logo from "../assets/se.png";
import { TfiDashboard} from "react-icons/tfi";
import { MdInventory2 } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { IoPersonSharp } from "react-icons/io5";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";

const Inventory = () => {
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
            <a className="flex items-center px-4 py-2 text-white  dark:bg-gray-700 dark:text-gray-200" href="#">
            <TfiDashboard className="mr-2 group-hover:bg-customOrange" />
              <span className="flex items-center space-x-2 hover:text-customOrange">DASHBOARD</span>
            </a>
           
            <a className="flex items-center px-4 py-2 text-white  dark:bg-gray-700 dark:text-gray-200" href="#">
            <MdInventory2  className="mr-2 group-hover:bg-customOrange" />
              <span className="flex items-center space-x-2 hover:text-customOrange">PRODUCT INVENTORY</span>
            </a>

            <a className="flex items-center px-4 py-2 text-white  dark:bg-gray-700 dark:text-gray-200" href="#">
            <GrProjects className="mr-2 group-hover:bg-customOrange" />
              <span className="flex items-center space-x-2 hover:text-customOrange">PROJECTS</span>
            </a>
            
            <a className="flex items-center px-4 py-2 text-white  dark:bg-gray-700 dark:text-gray-200" href="#">
            <IoPersonSharp className="mr-2 group-hover:bg-customOrange" />
              <span className="flex items-center space-x-2 hover:text-customOrange">CUSTOMERS</span>
            </a>

            <a className="flex items-center px-4 py-2 text-white  dark:bg-gray-700 dark:text-gray-200" href="#">
            <FaPeopleCarryBox  className="mr-2 group-hover:bg-customOrange" />
              <span className="flex items-center space-x-2 hover:text-customOrange">SUPPLIERS</span>
            </a>

            <a className="flex items-center px-4 py-2 text-white  dark:bg-gray-700 dark:text-gray-200" href="#">
            <BsFillPersonVcardFill className="mr-2 group-hover:bg-customOrange" />
              <span className="flex items-center space-x-2 hover:text-customOrange">EMPLOYEES</span>
            </a>

            <a className="flex items-center px-4 py-2 text-white  dark:bg-gray-700 dark:text-gray-200" href="#">
            <VscAccount className="mr-2 group-hover:bg-customOrange" />
              <span className="flex items-center space-x-2 hover:text-customOrange">ACCOUNT</span>
            </a>

            {/* Repeat for other items */}
          </nav>

          <div className="flex items-center px-4 -mx-2">
            <button className="flex items-center justify-center w-full px-4 py-2 text-gray-600 bg-red-400 rounded-md hover:bg-red-300 hover:text-white">
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-center justify-between flex-shrink-0 px-8 py-4 bg-white border-b dark:bg-gray-800 dark:border-gray-600">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">DASHBOARD</h1>
          <div className="flex items-center space-x-2">
            {/* Search box */}
            <input className="border rounded px-3 py-1 " type="search" placeholder="Search" />
            <div className="rounded-full h-8 w-8 bg-blue-500 text-white flex items-center justify-center" style={{ backgroundColor: '#0F076D' }}>JD</div>
            <span>Juan Dela Cruz</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 bg-white overflow-hidden">
          {/* Main Content goes here */}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
