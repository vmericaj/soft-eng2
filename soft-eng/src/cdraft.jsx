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

const CustomersTable = () => {
    
    const [customers, setCustomers] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newCustomer, setNewCustomer] = useState({
      cid: '',
      name: '',
      number: '',
      email: '',
      project: '',
      total: '',
      paid: '',
      balance: '',
      action: ''
    });
    
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(-1);
  

    // ... other functions ...
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewCustomer({ ...newCustomer, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
          const updatedCustomer = customers.map((item, index) => 
            index === editIndex ? newCustomer : item
          );
          setCustomers(updatedCustomer);
          setIsEditing(false);
        } else {
          setCustomers([...customers, newCustomer]);
        }
        // Reset form and hide it
        setNewCustomer({
          cid: '',
          name: '',
          number: '',
          email: '',
          project: '',
          total: '',
          paid: '',
          balance: '',
          action: ''
        });
        setShowForm(false);
        setEditIndex(-1); // Reset the edit index
      };
      const handleAddCustomerClick = () => {
        setShowForm(true);
      };

      const handleEditClick = (customer, index) => {
        setNewCustomer(customer); // Changed from 'customers' to 'customer'
        setShowForm(true);
        setIsEditing(true);
        setEditIndex(index);
    };

  const handleUpdate = (e) => {
    e.preventDefault();
    let updatedCustomer = [...customers];
    updatedCustomer[editIndex] = newCustomer;
    setCustomers(updatedCustomer);
    setShowForm(false);
    setNewCustomer({
      cid: '',
      name: '',
      number: '',
      email: '',
      project: '',
      total: '',
      paid: '',
      balance: '',
      action: ''
    });
    setIsEditing(false);
  };

  const handleRemoveClick = (index) => {
    // Filter out the project at the specific index
    const updatedCustomer = customers.filter((_, customersIndex) => customersIndex !== index);
    setCustomers(updatedCustomer);
  };
  const handleCancel = () => {
    setShowForm(false);
    setIsEditing(false);
    setEditIndex(-1);
    setNewCustomer({ // Changed from 'setNewProject' to 'setNewCustomer'
        cid: '',
        name: '',
        number: '',
        email: '',
        project: '',
        total: '',
        paid: '',
        balance: '',
        action: ''
    });
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
          <Link to="/projects" className="flex items-center px-4 py-2 text-white hover:text-customOrange">
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
          <IoPersonSharp className="mr-2 w-6 h-6 text-customBlue" /> {/* Icon */}
          <h1 className="text-xl font-bold text-customBlue dark:text-white">CUSTOMERS</h1> {/* Text */}
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
            {/* Search box */}
           
            <button
              onClick={() => { 
                handleAddCustomerClick(); 
                setIsEditing(false); 
                setEditIndex(-1); // Reset edit index when adding a new project
              }}
              className="bg-customBlue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              + CUSTOMER
            </button>
          </div>

          {showForm && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center z-10">
                <div className="bg-white p-8 rounded shadow-xl">
                    
                <form onSubmit={handleSubmit} className="space-y-4">
  <div className="flex items-center space-x-4">
   
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cid">
        CUSTOMER ID
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="cid"
        type="text"
        placeholder="Enter CID"
        name="cid"
        value={newCustomer.cid}
        onChange={handleChange}
        required
      />
    </div>
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cid">
        FULL NAME
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="name"
        type="text"
        placeholder="Enter Name"
        name="name"
        value={newCustomer.name}
        onChange={handleChange}
        required
      />
    </div>

    
  </div>


  

  

  <div className="flex items-center space-x-4">
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">
                  Save
                </button>
                <button type="button" onClick={handleCancel} className="bg-red-500 text-white px-4 py-2 rounded-md">
                  Cancel
                </button>
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
                    <th scope="col" className="px-6 py-3">CID</th>
                    <th scope="col" className="px-6 py-3">Full Name</th>
                    <th scope="col" className="px-6 py-3">Contact Number</th>
                    <th scope="col" className="px-6 py-3">Email Address</th>
                    <th scope="col" className="px-6 py-3">Project</th>
                    <th scope="col" className="px-6 py-3">Total</th>
                    <th scope="col" className="px-6 py-3">Paid</th>
                    <th scope="col" className="px-6 py-3">Balance</th>
                    <th scope="col" className="px-6 py-3">Action</th>

                    </tr>
                    </thead>
                    <tbody>
                    {customers.map((customer, index) => (
                        <tr key={index} className="bg-white border-b">
                                        <td className="px-6 py-4">{customer.cid}</td>
                            <td className="px-6 py-4">{customer.name}</td>
                            <td className="px-6 py-4">{customer.email}</td>
                            <td className="px-6 py-4">{customer.project}</td>
                            <td className="px-6 py-4">{customer.total}</td>
                            <td className="px-6 py-4">{customer.paid}</td>
                            <td className="px-6 py-4">{customer.balance}</td>
                            <td className="px-6 py-4">{customer.action}</td>
                            <td style={{ padding: '12px' }}>
                            <button
                            style={{ marginRight: '5px', padding: '5px 10px', background: '#0F076D', color: 'white', borderRadius: '5px' }}
                            onClick={() => handleEditClick(customer, index)}
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

export default CustomersTable;
