import React, { useState } from 'react';
import logo from "../assets/se.png"; // Ensure you have the logo image in the correct path

const CustomersTable = () => {
  const customers = [
    { id: '401', fullName: 'Erica Moulice', contactNumber: '+63 917 203 2878', emailAdd: 'em@gmail.com', project: 'C101', total: 'Php 500,000', paid: 'Php 450,000', balance: 'Php 50,000'},
    { id: '402', fullName: 'Krizzia Fronda', contactNumber: '+63 917 203 2878', emailAdd: 'kf@gmail.com', project: 'P101', total: 'Php 200,000', paid: 'Php 200,000', balance: '0' },
    { id: '403', fullName: 'Earl Odiamar', contactNumber: '+63 917 203 2878', emailAdd: 'eo@gmail.com', project: 'C102', total: 'Php 999,999', paid: 'Php 900,000', balance: 'Php 99,999' },
    { id: '404', fullName: 'Kie Apacible', contactNumber: '+63 917 203 2878', emailAdd: 'ka@gmail.com', project: 'H101', total: 'Php 500,000', paid: 'Php 400,000', balance: 'Php 100,000' },
    { id: '405', fullName: 'Nina Vetus', contactNumber: '+63 917 203 2878', emailAdd: 'nv@gmail.com', project: 'P102', total: 'Php 134,240' , paid: 'Php 130,000', balance: 'Php 4,240'},
    { id: '406', fullName: 'Stef James', contactNumber: '+63 917 203 2878', emailAdd: 'sj@gmail.com', project: 'H102', total: 'Php 30,000', paid: 'Php 30,000', balance: '0' },
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
          <h2 className="text-2xl font-bold" style={{ color: '#0F076D' }}>CUSTOMERS</h2>
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
                + CUSTOMER
            </button>
            
        </div>
        


        </div>
      </div>

          {/* Table */}
          <table className="w-full text-sm text-left text-gray-500">
          <thead style={{ boxShadow: '0 6px 8px rgba(0, 0, 0, 0.1)' }}>
        <tr>
        <th style={{ fontWeight: 'normal', padding: '12px', background: '#0F076D', color: 'white' }}>CID</th>
        <th style={{ fontWeight: 'normal', padding: '12px', background: '#0F076D', color: 'white' }}>Full Name</th>
        <th style={{ fontWeight: 'normal', padding: '12px', background: '#0F076D', color: 'white' }}>Contact Number</th>
        <th style={{ fontWeight: 'normal', padding: '12px', background: '#0F076D', color: 'white' }}>Email Address</th>
        <th style={{ fontWeight: 'normal', padding: '12px', background: '#0F076D', color: 'white' }}>Project</th>
        <th style={{ fontWeight: 'normal', padding: '12px', background: '#0F076D', color: 'white' }}>Total</th>
        <th style={{ fontWeight: 'normal', padding: '12px', background: '#0F076D', color: 'white' }}>Paid</th>
        <th style={{ fontWeight: 'normal', padding: '12px', background: '#0F076D', color: 'white' }}>Balance</th>
        <th style={{ fontWeight: 'normal', padding: '12px', background: '#0F076D', color: 'white' }}>Action</th>
    </tr>
    </thead>
    <tbody>
    {customers.map((cus) => (
        <tr key={cus.id}>
        <td style={{ padding: '12px' }}>{cus.id}</td>
        <td style={{ padding: '12px' }}>{cus.fullName}</td>
        <td style={{ padding: '12px' }}>{cus.contactNumber}</td>
        <td style={{ padding: '12px' }}>{cus.emailAdd}</td>
        <td style={{ padding: '12px' }}>{cus.project}</td>
        <td style={{ padding: '12px' }}>{cus.total}</td>
        <td style={{ padding: '12px' }}>{cus.paid}</td>
        <td style={{ padding: '12px' }}>{cus.balance}</td>
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
export default CustomersTable;
