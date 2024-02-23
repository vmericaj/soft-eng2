import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/se.png";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-black text-white" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
      {/* ... Rest of the top part of your sidebar */}
      
      <div className="p-6">
        <div className="flex flex-col space-y-4">
          {/* Using NavLink for navigation and active styles */}
          <NavLink exact to="/dashboard" activeClassName="text-orange-500" className="flex items-center space-x-2 hover:text-gray-300">
            <span>DASHBOARD</span>
          </NavLink>
          <NavLink to="/projects" activeClassName="text-orange-500" className="flex items-center space-x-2 hover:text-gray-300">
            <span>PROJECTS</span>
          </NavLink>
          {/* ... other NavLink items ... */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
