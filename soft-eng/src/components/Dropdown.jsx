import React, { useState } from 'react';

const ResponsiveDropdown = () => {
  const [filter, setFilter] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center">
      {/* This is your filter select input */}
      <div className="md:ml-2">
        <select
          value={filter}
          onChange={handleFilterChange}
          className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
        >
          <option value="">All Categories</option>
          <option value="Condominium">Condominium</option>
          <option value="Office">Office</option>
          <option value="Retail">Retail</option>
          {/* Add more filter options as needed */}
        </select>
      </div>

      {/* This is your responsive dropdown */}
      <div className="relative mt-4 md:mt-0 md:ml-4">
        <button
          type="button"
          className="px-4 py-2 bg-orange-500 text-white rounded-md focus:outline-none"
          onClick={toggleDropdown}
        >
          Dropdown
        </button>

        {isDropdownOpen && (
          <div className="absolute left-0 right-0 z-10 mt-2 w-full md:w-auto bg-white shadow-lg rounded-md">
            {/* Dropdown content */}
            {/* ... */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResponsiveDropdown;
