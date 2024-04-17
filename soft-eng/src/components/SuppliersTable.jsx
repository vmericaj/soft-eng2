import React, { useState } from 'react';
import logo from "../assets/se.png";
import { TfiDashboard} from "react-icons/tfi";
import { MdInventory2 } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { Link } from 'react-router-dom';



// ... other imports ...

const SuppliersTable = () => {
    
    const [suppliers, setSuppliers] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newSupplier, setNewSupplier] = useState({
      pid: '',
      projectName: '',
      category: '',
      location: '',
      startDate: '',
      endDate: '',
      status: ''
    });
    
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(-1);

    // ... other functions ...
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewSupplier({ ...newSupplier, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
          const updatedSuppliers = suppliers.map((item, index) => 
            index === editIndex ? newSupplier : item
          );
          setSuppliers(updatedSuppliers);
          setIsEditing(false);
        } else {
          setSuppliers([...suppliers, newSupplier]);
        }
        // Reset form and hide it
        setNewSupplier({
          pid: '',
          projectName: '',
          category: '',
          location: '',
          startDate: '',
          endDate: '',
          status: ''
        });
        setShowForm(false);
        setEditIndex(-1); // Reset the edit index
      };
      const handleAddSupplierClick = () => {
        setShowForm(true);
      };

  const handleEditClick = (supplier, index) => {
    setNewSupplier(supplier);
    setShowForm(true);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    let updatedSuppliers = [...suppliers];
    updatedSuppliers[editIndex] = newSupplier;
    setSuppliers(updatedSuppliers);
    setShowForm(false);
    setNewSupplier({
      pid: '',
      projectName: '',
      category: '',
      location: '',
      startDate: '',
      endDate: '',
      status: ''
    });
    setIsEditing(false);
  };

  const handleRemoveClick = (index) => {
    // Filter out the project at the specific index
    const updatedSuppliers = suppliers.filter((_, supplierIndex) => supplierIndex !== index);
    setSuppliers(updatedSuppliers);
  };
  const handleCancel = () => {
    // Reset form and hide it
    setNewSupplier({
      pid: '',
      projectName: '',
      category: '',
      location: '',
      startDate: '',
      endDate: '',
      status: ''
    });
    setShowForm(false);
    setIsEditing(false);
    setEditIndex(-1); // Reset the edit index
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      {/* ... sidebar content ... */}
      <div className="flex flex-col w-64 h-full px-4 py-8 bg-black dark:bg-gray-800 dark:border-gray-600">
        {/* Logo and title */}
          <div className="flex items-center space-x-2" >
            <img src={logo} alt="Logo" className="h-14 w-14" /> {/* Adjust the height and width as needed */}
            <h1 className="text-xl font-bold" style={{ color: '#EF9400' }}>3MV CONSTRUCTION</h1>
          </div>
        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>
          <Link to="/" className="flex items-center px-4 py-2 text-white hover:text-customOrange">
            <TfiDashboard className="mr-2" /> {/* Placing the icon before the text */}
            DASHBOARD
          </Link>
          <Link to="/ projects" className="flex items-center px-4 py-2 text-white hover:text-customOrange">
            <MdInventory2 className="mr-2" /> 
            PROJECTS
          </Link>
          
          <Link to="/customers" className="flex items-center px-4 py-2 text-white hover:text-customOrange">
            <IoPersonSharp className="mr-2" /> 
            CUSTOMERS
            </Link>
          <Link to="/suppliers" className="flex items-center px-4 py-2 text-white hover:text-customOrange">
            <FaPeopleCarryBox className="mr-2" /> 
            SUPPLIERS
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
            <button className="flex items-center justify-center w-full px-4 py-2 text-gray-600 bg-red-400 rounded-md hover:bg-red-300 hover:text-white">
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        {/* ... header content ... */}
        <div className="flex items-center justify-between flex-shrink-0 px-8 py-4 bg-white border-b dark:bg-gray-800 dark:border-gray-600">
        <div className="flex items-center"> {/* Added a div to hold both the icon and the text */}
          <FaPeopleCarryBox className="mr-2 w-6 h-6 text-customBlue" /> {/* Icon */}
          <h1 className="text-xl font-bold text-customBlue dark:text-white">SUPPLIERS</h1> {/* Text */}
        </div>
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
          <div className="mb-4">
            <button
              onClick={() => { 
                handleAddSupplierClick(); 
                setIsEditing(false); 
                setEditIndex(-1); // Reset edit index when adding a new project
              }}
              className="bg-customBlue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              + SUPPLIER
            </button>
          </div>

          {showForm && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center z-10">
                <div className="bg-white p-8 rounded shadow-xl">
                    
                <form onSubmit={handleSubmit} className="space-y-4">
  <div className="flex items-center space-x-4">
   
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pid">
        SUPPLIER ID
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="pid"
        type="text"
        placeholder="Enter PID"
        name="pid"
        value={newSupplier.pid}
        onChange={handleChange}
        required
      />
    </div>
    <div className="flex items-center space-x-4">
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">
                  Save
                </button>
                <button type="button" onClick={handleCancel} className="bg-red-500 text-white px-4 py-2 rounded-md">
                  Cancel
                </button>
              </div>

  </div>
</form>

                </div>
            </div>
          )}

          {/* Table to display the projects */}
          {/* ... table ... */}
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-white uppercase bg-customBlue">
                    <tr>
                    <th scope="col" className="px-6 py-3">PID</th>
                    <th scope="col" className="px-6 py-3">Project Name</th>
                    <th scope="col" className="px-6 py-3">Category</th>
                    <th scope="col" className="px-6 py-3">Location</th>
                    <th scope="col" className="px-6 py-3">Start Date</th>
                    <th scope="col" className="px-6 py-3">End Date</th>
                    <th scope="col" className="px-6 py-3">Action</th>

                    </tr>
                    </thead>
                    <tbody>
                        {suppliers.map((supplier, index) => (
                        <tr key={index} className="bg-white border-b">
                            <td className="px-6 py-4">{supplier.pid}</td>
                            <td className="px-6 py-4">{supplier.projectName}</td>
                            <td className="px-6 py-4">{supplier.category}</td>
                            <td className="px-6 py-4">{supplier.location}</td>
                            <td className="px-6 py-4">{supplier.startDate}</td>
                            <td className="px-6 py-4">{supplier.endDate}</td>
                            <td style={{ padding: '12px' }}>
                            <button
                            style={{ marginRight: '5px', padding: '5px 10px', background: '#0F076D', color: 'white', borderRadius: '5px' }}
                            onClick={() => handleEditClick(supplier, index)}
                            >
                            Edit
                            </button>
                            <button
                            style={{ padding: '5px 10px', background: '#C80007', color: 'white', borderRadius: '5px' }}
                            onClick={() => handleRemoveClick(index)}
                            >
                            Remove
                            </button>
                            </td>
                            
                            {/* ... other columns ... */}
                          

                        </tr>
                        ))}
                    </tbody>
                </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuppliersTable;
