import React, { useState } from 'react';
import logo from "../assets/se.png"; // Ensure you have the logo image in the correct path

const SuppliersTable = () => {
  const suppliers = [
    { id: 'S01', pid: 'PCSI01', sName: 'Construction Suppliers Inc', cPerson: 'John Johnson', address: '123 Main Street, Cityville', emailAdd: 'const.jj@gmail.com', cNumber: '+63 917 233 2218'},
    { id: 'S02', pid: 'PSD05', sName: 'Steel Dynamics LLC', cPerson: 'Emma Davis', address: '456 Oak Avenue, Townsville', emailAdd: 'steel.ed@gmail.com', cNumber: '+63 917 765 4321'},
    { id: 'S03', pid: 'PRS03', sName: 'Roofing Solutions Ltd', cPerson: 'Robert Smith', address: 'BGC, Taguig', emailAdd: 'rfsolutions.rs@gmail.com', cNumber: '+63 917 233 4455'},
    { id: 'S04', pid: 'PMS04', sName: 'Masanory Safety Inc', cPerson: 'Alice Brown', address: 'Marilao, Bulacan', emailAdd: 'alice.brown@gmail.com', cNumber: '+63 917 887 76655'},
    { id: 'S05', pid: 'PTT02', sName: 'Timber Traders Inc.', cPerson: 'Michael Wang', address: 'Sampaloc, Manila', emailAdd: 'timber.mw@gmail.com', cNumber: '+63 917 788 9900'},
    
    // ... Add the other project rows here in the same format
  ];
  const [filter, setFilter] = useState(''); // State to hold the selected filter value
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // State to control the dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  }
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    // Implement filtering logic here based on the selected value
    // For demonstration, the filtering logic is not implemented in this snippet
  
    

};
  


  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 h-screen text-white" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', background: 'black' }}>
        <div className="flex items-center justify-center h-20 shadow-md">
          {/* Logo and title */}
          <div className="flex items-center space-x-2" >
            <img src={logo} alt="Logo" className="h-14 w-14" /> {/* Adjust the height and width as needed */}
            <h1 className="text-xl font-bold" style={{ color: '#EF9400' }}>3MV CONSTRUCTION</h1>
          </div>
        </div>
        <div className="p-6">
          {/* Sidebar content */}
          <div className="flex flex-col space-y-4">
            {/* Each menu item */}
            <a href="#dashboard" className="flex items-center space-x-2 hover:text-gray-300">
              <span>DASHBOARD</span>
            </a>
            <a href="#ProjectTable" className="flex items-center space-x-2 hover:text-gray-300">
              <span>PROJECTS</span>
            </a>
            <a href="#dashboard" className="flex items-center space-x-2 hover:text-gray-300">
              <span>CUSTOMERS</span>
            </a>
            <a href="#dashboard" className="flex items-center space-x-2 hover:text-gray-300">
              <span>SUPPLIERS</span>
            </a>
            <a href="#dashboard" className="flex items-center space-x-2 hover:text-gray-300">
              <span>EMPLOYEES</span>
            </a>
            <a href="#dashboard" className="flex items-center space-x-2 hover:text-gray-300">
              <span>ACCOUNT</span>
            </a>
            <a href="#dashboard" className="flex items-center space-x-2 hover:text-gray-300">
              <span>LOGOUT</span>
            </a>
            {/* Repeat for other links */}
          </div>
        </div>
      </div>
  
      {/* Main content */}
      <div className="flex-1 p-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold" style={{ color: '#0F076D' }}>SUPPLIERS</h2>
          <div className="flex items-center space-x-2">
            {/* Search box */}
            <input className="border rounded px-2 py-1" type="search" placeholder="Search" />
            {/* User widget */}
            <div className="rounded-full h-8 w-8 bg-blue-500 text-white flex items-center justify-center" style={{ backgroundColor: '#0F076D' }}>JD</div>
            <span>Juan Dela Cruz</span>
          </div>
        </div>
        
        {/* Project Table */}
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <div className="flex justify-between items-center py-4 bg-white">
        <div className="flex items-center">
          <div className="relative ml-4">
            <input type="text" id="table-search" 
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" 
              placeholder="Search" />
          </div>
          {/* Dropdown menu for filtering directly next to search input, with matching size */}
          
          {/* "+ PROJECTS" button with space from the filter dropdown, matching size */}
          <div className="relative">
          <button
            onClick={toggleDropdown}
            style={{ backgroundColor: '#E8E5E5', borderColor: '#C6C1C1', borderWidth: '1px', borderStyle: 'solid',fontWeight: 'normal',color: 'white',background: '#444242' }}
            className="inline-flex items-center hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg"

          >
          Filter
        </button>
        {isDropdownVisible && (
          <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <a href="#excel" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Condominium</a>
              <a href="#pdf" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">House</a>
              <a href="#csv" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Pool</a>
              {/* Add more export options as needed */}
            </div>
          </div>
        )}
      </div>
      <div className="ml-2">
            <button
                style={{ backgroundColor: '#0F076D' }}
                className="inline-flex items-center hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
                + SUPPLIER
            </button>
        </div>
        


        </div>
      </div>

          {/* Table */}
          <table className="w-full text-sm text-left text-gray-500">
          <thead style={{ boxShadow: '0 6px 8px rgba(0, 0, 0, 0.1)' }}>
        <tr>
        <th style={{ fontWeight: 'normal', padding: '12px', background: '#0F076D', color: 'white' }}>SID</th>
        <th style={{ fontWeight: 'normal', padding: '12px', background: '#0F076D', color: 'white' }}>PID</th>
        <th style={{ fontWeight: 'normal', padding: '12px', background: '#0F076D', color: 'white' }}>Supplier Name</th>
        <th style={{ fontWeight: 'normal', padding: '12px', background: '#0F076D', color: 'white' }}>Contact Person</th>
        <th style={{ fontWeight: 'normal', padding: '12px', background: '#0F076D', color: 'white' }}>Address</th>
        <th style={{ fontWeight: 'normal', padding: '12px', background: '#0F076D', color: 'white' }}>Email Address</th>
        <th style={{ fontWeight: 'normal', padding: '12px', background: '#0F076D', color: 'white' }}>Contact Number</th>
        <th style={{ fontWeight: 'normal', padding: '12px', background: '#0F076D', color: 'white' }}>Action</th>
    </tr>
    </thead>
    <tbody>
    {suppliers.map((sup) => (
        <tr key={sup.id}>
        <td style={{ padding: '12px' }}>{sup.id}</td>
        <td style={{ padding: '12px' }}>{sup.pid}</td>
        <td style={{ padding: '12px' }}>{sup.sName}</td>
        <td style={{ padding: '12px' }}>{sup.cPerson}</td>
        <td style={{ padding: '12px' }}>{sup.address}</td>
        <td style={{ padding: '12px' }}>{sup.emailAdd}</td>
        <td style={{ padding: '12px' }}>{sup.cNumber}</td>
        <td style={{ padding: '12px' }}>
            <button style={{ marginRight: '5px', padding: '5px 10px', background: '#0F076D', color: 'white', borderRadius: '5px' }}>
            Edit
            </button>
            <button style={{ padding: '5px 10px', background: '#C80007', color: 'white', borderRadius: '5px' }}>
            Remove
            </button>
        </td>
        </tr>
    ))}
    </tbody>
          </table>
        </div>
      </div>
    </div>
  )
};
export default SuppliersTable;
