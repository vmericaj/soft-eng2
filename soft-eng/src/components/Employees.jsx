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

const Employees = () => {
    
    const [projects, setProjects] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newProject, setNewProject] = useState({
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
        setNewProject({ ...newProject, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
          const updatedProjects = projects.map((item, index) => 
            index === editIndex ? newProject : item
          );
          setProjects(updatedProjects);
          setIsEditing(false);
        } else {
          setProjects([...projects, newProject]);
        }
        // Reset form and hide it
        setNewProject({
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
      const handleAddProjectClick = () => {
        setShowForm(true);
      };

  const handleEditClick = (project, index) => {
    setNewProject(project);
    setShowForm(true);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    let updatedProjects = [...projects];
    updatedProjects[editIndex] = newProject;
    setProjects(updatedProjects);
    setShowForm(false);
    setNewProject({
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
    const updatedProjects = projects.filter((_, projectIndex) => projectIndex !== index);
    setProjects(updatedProjects);
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
        {/* ... header content ... */}
        <div className="flex items-center justify-between flex-shrink-0 px-8 py-4 bg-white border-b dark:bg-gray-800 dark:border-gray-600">
        <div className="flex items-center"> {/* Added a div to hold both the icon and the text */}
          <BsFillPersonVcardFill className="mr-2 w-6 h-6 text-customBlue" /> {/* Icon */}
          <h1 className="text-xl font-bold text-customBlue dark:text-white">EMPLOYEES</h1> {/* Text */}
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
          




  
        </div>
      </div>
    </div>
  );
};

export default Employees;
