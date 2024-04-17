import React, { useState } from 'react';
import logo from "../assets/se.png"; // Ensure you have the logo image in the correct path

const ProjectTable1 = () => {
  const projects = [
    { id: 'PR01', name: 'The One Palace', category: 'Condominium', location: 'Bulacan', startDate: '02-23-2019', endDate: '11-10-22' },
    { id: 'PR02', name: 'Serene Haven Homes', category: 'House', location: 'Tagaytay', startDate: '03-01-2023', endDate: '12-25-2024' },
    { id: 'PR03', name: 'Crystal Lagoon Retreat', category: 'Pool', location: 'Antipolo', startDate: '03-01-2024', endDate: '12-31-2024' },
    { id: 'PR04', name: 'Empire Hotel Residence', category: 'Condominium', location: 'Taguig', startDate: '01-09-2017', endDate: '12-28-2023' },
    { id: 'PR05', name: 'Harmony Heights Residence', category: 'House', location: 'Laguna', startDate: '09-15-2023', endDate: '09-15-2023' },
    { id: 'PR06', name: 'Aqua Oasis Pool Complex', category: 'Pool', location: 'Quezon', startDate: '07-01-2023', endDate: '04-30-2024' },
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
  
    const [isFormVisible, setFormVisible] = useState(false);

    // Function to toggle form visibility
    const toggleForm = () => {
      setFormVisible(!isFormVisible);
    };

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
          <h2 className="text-2xl font-bold" style={{ color: '#0F076D' }}>PROJECTS</h2>
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
          className="inline-flex items-center hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
          onClick={toggleForm} // Corrected click handler
        >
          + PROJECT
        </button>
        {isFormVisible && ( // Conditionally render the form
          <div className="mt-4">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              {/* Form fields */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="projectName">
                  Project Name
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="projectName" type="text" placeholder="Project Name" />
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
        


        </div>
      </div>

          {/* Table */}
          <table className="w-full text-sm text-left text-gray-500">
          <thead style={{ boxShadow: '0 6px 8px rgba(0, 0, 0, 0.1)' }}>
        <tr>
        <th style={{ fontWeight: 'normal', padding: '12px', background: '#0F076D', color: 'white' }}>PRID</th>
        <th style={{ fontWeight: 'normal', padding: '12px', background: '#0F076D', color: 'white' }}>Project Name</th>
        <th style={{ fontWeight: 'normal', padding: '12px', background: '#0F076D', color: 'white' }}>Project Category</th>
        <th style={{ fontWeight: 'normal', padding: '12px', background: '#0F076D', color: 'white' }}>Location</th>
        <th style={{ fontWeight: 'normal', padding: '12px', background: '#0F076D', color: 'white' }}>Start Date</th>
        <th style={{ fontWeight: 'normal', padding: '12px', background: '#0F076D', color: 'white' }}>End Date</th>
        <th style={{ fontWeight: 'normal', padding: '12px', background: '#0F076D', color: 'white' }}>Action</th>
    </tr>
    </thead>
    <tbody>
    {projects.map((project) => (
        <tr key={project.id}>
        <td style={{ padding: '12px' }}>{project.id}</td>
        <td style={{ padding: '12px' }}>{project.name}</td>
        <td style={{ padding: '12px' }}>{project.category}</td>
        <td style={{ padding: '12px' }}>{project.location}</td>
        <td style={{ padding: '12px' }}>{project.startDate}</td>
        <td style={{ padding: '12px' }}>{project.endDate}</td>
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
export default ProjectTable1;
