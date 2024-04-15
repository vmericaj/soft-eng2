import React, { useState } from 'react';
import logo from "../assets/se.png";
import { TfiDashboard} from "react-icons/tfi";
import { MdInventory2 } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import { MdNotificationsActive } from "react-icons/md";
import moment from 'moment';
import { BsPencilSquare } from "react-icons/bs";
import { FaRegTrashCan } from "react-icons/fa6";
import { useUser } from '../components/UserContext';


const ProjectTable = () => {
    
  const alertStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.5rem 1rem',
    marginLeft: '3rem', // Add a little space between the button and alert
    borderRadius: '0.375rem', // Tailwind rounded-md equivalent
    backgroundColor: '#C6F6D5', // Tailwind bg-green-200 equivalent
    borderColor: '#9AE6B4', // Tailwind border-green-300 equivalent
    borderWidth: '2px',
    fontSize: '0.875rem', // Tailwind text-sm equivalent
    fontWeight: '600', // Tailwind font-semibold equivalent
    flexGrow: 1, // Grow to use available space
    height: '100%', // Match the height of the buttons
  };
  
  
  
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
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
    const [password, setPassword] = useState('');
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState(null);
    const [currentAction, setCurrentAction] = useState('');
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [alertColor, setAlertColor] = useState('green'); // Default to green for add operations
    const { name, setName, profilePic, updateUser } = useUser();


    const [showNotifications, setShowNotifications] = useState(false);
    // Example notifications data
    const [notifications, setNotifications] = useState([
      // ... your initial notifications ...
    ]);
    const createNotification = (message) => {
      const newNotification = {
          id: Date.now(),
          message: message,
          time: moment().fromNow()
      };
      setNotifications(prevNotifications => [newNotification, ...prevNotifications]);
  };
    


    





    // ... other functions ...
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProject({ ...newProject, [name]: value });
    };

    const addNotification = (newProject) => {
      const newNotification = {
        id: notifications.length + 1, // or a more sophisticated ID logic
        message: `New project added: ${newProject.projectName}`,
        time: moment().fromNow()
      };
      setNotifications([...notifications, newNotification]);
    };
    

    const handleSubmit = (e) => {
      e.preventDefault();
      const isUpdate = isEditing;
      const updatedProjects = isUpdate ? projects.map((item, index) => 
          index === editIndex ? newProject : item
      ) : [...projects, newProject];
  
      setProjects(updatedProjects);
      const actionMessage = isUpdate ? `Successfully updated the project '${newProject.projectName}'.` : `Successfully added the project '${newProject.projectName}'.`;
      setSuccessMessage(actionMessage);
      setShowSuccessAlert(true);
      setAlertColor(isUpdate ? 'orange' : 'green');
      setTimeout(() => setShowSuccessAlert(false), 3000);
  
      // Adding notification for add/update
      createNotification(actionMessage);
  
      // Resetting form state and hiding the form
      resetFormState();
      setShowForm(false);
  };
  
  
      const handleAddProjectClick = () => {
        setShowPasswordPrompt(true);
        setCurrentAction('add');
        
    };
    
    

    const handleEditClick = (project, index) => {
      setNewProject(project);
      setEditIndex(index);
      setShowPasswordPrompt(true);
      setCurrentAction('edit');
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
    setDeleteIndex(index);
    setShowDeleteConfirmation(true);
};
  
const handleCancel = () => {
  setShowForm(false);
  resetFormState();
};
  const confirmDelete = () => {
    setShowDeleteConfirmation(false);
    setShowPasswordPrompt(true);
    setCurrentAction('delete');
};

const cancelDelete = () => {
  setShowDeleteConfirmation(false);
};
const deleteProject = () => {
  if (deleteIndex != null) {
      const projectToDelete = projects[deleteIndex];
      const updatedProjects = projects.filter((_, index) => index !== deleteIndex);
      setProjects(updatedProjects);
      const deleteMessage = `Successfully deleted the project '${projectToDelete.projectName}'.`;
      setSuccessMessage(deleteMessage);
      setShowSuccessAlert(true);
      setAlertColor('red');
      setTimeout(() => setShowSuccessAlert(false), 3000);

      // Adding notification for delete
      createNotification(deleteMessage);

      // Resetting form state and closing all dialogs
      resetFormState();
      setShowDeleteConfirmation(false);
  }
  setShowPasswordPrompt(false);
};


  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
};

const getFilteredProjects = () => {
  let filtered = projects;

  if (searchTerm) {
      const searchLowerCase = searchTerm.toLowerCase();
      filtered = filtered.filter(project =>
          Object.values(project).some(attribute =>
              String(attribute).toLowerCase().includes(searchLowerCase)
          )
      );
  }

  if (selectedCategory) {
      filtered = filtered.filter(project => project.category === selectedCategory);
  }

  return filtered;
};

const handlePasswordSubmit = (e) => {
  e.preventDefault();
  if (password === '12345') { // assuming '12345' is your test password
    if (currentAction === 'delete') {
      deleteProject(); // Call delete function only if password is correct and action is delete
    } else if (currentAction === 'edit') {
      setShowForm(true);
      setIsEditing(true);
    } else if (currentAction === 'add') {
      setShowForm(true);
      setIsEditing(false);
      // reset the newProject state or other related states if necessary
    }
    setShowPasswordPrompt(false); // Hide password prompt after action
  } else {
    alert('Wrong password!');
  }
  setPassword(''); // Clear the password field
  setCurrentAction(''); // Reset the action after handling
};


const filteredProjects = getFilteredProjects();


const resetFormState = () => {
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
  setEditIndex(-1);
};

const clearNotifications = () => {
  if (notifications.length > 0) {
      setNotifications([]);  // Clear the list of notifications
      if (showNotifications) {
          toggleNotifications();  // Hide the notification panel
      }
  }
};

const toggleNotifications = () => {
  setShowNotifications(prevState => !prevState);
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
          <Link to="/inventory" className="flex items-center px-4 py-2 text-white hover:text-customOrange">
            <TfiDashboard className="mr-2" /> {/* Placing the icon before the text */}
            DASHBOARD
          </Link>
          <Link to="/projecttable" className="flex items-center px-4 py-2 text-white hover:text-customOrange">
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

          <div className="flex items-center px-4 -mx-2">
          <Link
            to="/"  // Change "/logout" to your desired path
            className="flex items-center font-bold justify-center w-full px-4 py-2 text-black bg-customOrange rounded-md hover:bg-customBlue hover:text-white"
          >
            <span>LOGOUT</span>
          </Link>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        {/* ... header content ... */}
        <div className="flex items-center justify-between flex-shrink-0 px-8 py-4 bg-white border-b dark:bg-gray-800 dark:border-gray-600 relative">
        <div className="flex items-center"> {/* Added a div to hold both the icon and the text */}
          <MdInventory2 className="mr-2 w-6 h-6 text-customBlue" /> {/* Icon */}
          <h1 className="text-xl font-bold text-customBlue dark:text-white">PROJECTS</h1> {/* Text */}
          <button className="ml-4 relative" onClick={toggleNotifications}>
  <MdNotificationsActive className="w-6 h-6 text-customOrange" />
  {notifications.length > 0 && (
    <span className="absolute top-0 right-0 inline-flex items-center justify-center w-3 h-3 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
      {notifications.length}
    </span>
  )}
</button>
{showNotifications && (
            <div style={{
                position: 'absolute',
                top: '100%', // positions the top edge of the panel at the bottom edge of the toggle button
                right: '800px',
                width: '300px', // adjust as necessary
                backgroundColor: 'white',
                boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
                zIndex: 1000, // make sure it's on top of other elements
            }}>
                <div className="text-lg font-bold border-b p-4">Notifications</div>
                <ul className="max-h-60 overflow-auto">
                    {notifications.map(notification => (
                        <li key={notification.id} className="border-b last:border-b-0">
                            <a href="#" className="flex items-start p-4 hover:bg-gray-50">
                                <span className="flex-shrink-0 w-2 h-2 mt-1.5 bg-blue-500 rounded-full mr-3"></span>
                                <div className="flex-1 overflow-hidden">
                                    <div className="text-sm font-medium text-gray-900">{notification.message}</div>
                                    <p className="text-xs text-gray-500">{notification.time}</p>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
                <div onClick={clearNotifications} className="text-sm font-medium text-blue-600 hover:text-blue-500 cursor-pointer p-4 text-center">
                    Mark all as read
                </div>
            </div>
        )}
</div>
          <div className="flex items-center space-x-2">
          {profilePic && (
            <img
              src={profilePic}
              alt="Profile"
              className="rounded-full h-8 w-8 object-cover"  // Ensures the image is circular and fits within the dimensions
            />
          )}

          {/* Display the user's name next to the image */}
          <span>{name}</span>
        </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 bg-white overflow-hidden">
          {/* Main Content goes here */}
          <div className="flex items-center mb-4">
    <input
        className="border rounded-l py-2 px-3"
        type="search"
        placeholder="Search Projects"
        value={searchTerm}
        onChange={handleSearchChange}
    />
    <select
        className="border-t border-b border-r rounded-r py-2 px-3"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
    >
        <option value="">Filter</option>
        <option value="Condominium">Condominium</option>
        <option value="House">House</option>
        <option value="Pool">Pool</option>
    </select>

    <button
        onClick={handleAddProjectClick}
        className="bg-customBlue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
    >
        + PROJECT
    </button>

    {showSuccessAlert && (
    <div style={{ ...alertStyle, backgroundColor: alertColor === 'red' ? '#F56565' : (alertColor === 'orange' ? '#ED8936' : '#C6F6D5'), borderColor: alertColor === 'red' ? '#C53030' : (alertColor === 'orange' ? '#DD6B20' : '#9AE6B4') }} className="ml-4">
        <span className="text-white">{successMessage}</span>
    </div>
)}

</div>


{showDeleteConfirmation && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center z-30">
                <div className="bg-white p-6 rounded shadow-xl">
                    <h2>Are you sure you want to delete this item?</h2>
                    <div className="flex justify-end space-x-2">
                        <button onClick={confirmDelete} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">Delete</button>
                        <button onClick={cancelDelete} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700">Cancel</button>
                    </div>
                </div>
            </div>
        )}
{showPasswordPrompt && (
  <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center z-10">
  <div className="bg-white p-6 rounded shadow-xl">
    {/* Logo and title section */}
    <div className="flex flex-col items-center ">
  <img src={logo} alt="Logo" className="h-14 w-14" />
  <h1 className="text-xl font-bold text-customOrange mt-2 mb-4">Inventory System</h1>
  <p className="text-xs text-black">To proceed and access the system, please enter your password</p>

  <p className="text-xs text-black"> below.  This secure login ensures that only authorized personnel </p>
  <p className="text-xs text-black">can view and manage the inventory data.</p>
</div>

      
      <form onSubmit={handlePasswordSubmit} className="space-y-4 ">
        <div>
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mt-4 mb-6"></label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 text-italic leading-tight focus:outline-none focus:shadow-outline"
            required
            placeholder="Password"
          />
        </div>
        <div className="flex justify-center space-x-4">
          <button type="submit" className="bg-green-500 text-white px-4 py-2 text-xs rounded-sm">
            SUBMIT
          </button>
          <button type="button" onClick={() => setShowPasswordPrompt(false)} className="bg-red-500 text-white text-xs px-4 py-2 rounded-sm">
            CANCEL
          </button>
        </div>
 
      </form>
    </div>
  </div>
)}

  

          {showForm && (

<div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center z-10">
<div className="bg-white p-5 rounded shadow-xl">
<div className="flex bg-white rounded-lg p-2 items-center justify-center font-bold text-customOrange text-xl">
    <img src={logo} alt="Logo" className="h-14 w-14" />
</div>
<div className="flex bg-white rounded p-2 items-center justify-center font-bold text-customOrange text-lg">
    ADD PROJECT
</div>




<form onSubmit={handleSubmit} className="space-y-4 max-w-4xl mx-auto">
      
<div className="flex flex-wrap -mx-2">
        {/* Wrap each input with a div and apply a consistent width */}
        <div className="px-2 w-full md:w-1/3 mb-2">
            <label htmlFor="pid" className="block text-gray-700 text-sm font-bold mb-2">PROJECT ID</label>
            <input type="text" id="pid" name="pid" value={newProject.pid} placeholder="PID" onChange={handleChange} className="shadow text-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>

        <div className="px-2 w-full md:w-1/3 mb-2">
            <label htmlFor="projectName" className="block text-gray-700 text-sm font-bold mb-2">PROJECT NAME</label>
            <input type="text" id="projectName" name="projectName" value={newProject.projectName} placeholder="Project Name" onChange={handleChange} className="shadow text-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>

        <div className="px-2 w-full md:w-1/3 mb-2">
            <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">LOCATION</label>
            <input type="text" id="location" name="location" value={newProject.location} onChange={handleChange} placeholder="Location" className="shadow text-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>

        <div className="px-2 w-full md:w-1/3 mb-2">
            <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">CATEGORY</label>
            <select id="category" name="category" value={newProject.category} onChange={handleChange} className="block text-sm appearance-customBlue w-full bg-white border hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" required>
                <option value=""></option>
                <option value="Condominium">Condominium</option>
                <option value="House">House</option>
                <option value="Pool">Pool</option>
            </select>
        </div>

        <div className="px-2 w-full md:w-1/3 mb-2">
            <label htmlFor="startDate" className="block text-gray-700 text-sm font-bold mb-2">START DATE</label>
            <input type="date" id="startDate" name="startDate" value={newProject.startDate} onChange={handleChange} className="shadow text-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>

        <div className="px-2 w-full md:w-1/3 mb-2">
            <label htmlFor="endDate" className="block text-gray-700 text-sm font-bold mb-2">END DATE</label>
            <input type="date" id="endDate" name="endDate" value={newProject.endDate} onChange={handleChange} className="shadow text-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
        </div>
    </div>
        {/* Save and Cancel buttons */}
        <div className="flex items-center justify-center space-x-4">
        <button type="submit" className="bg-green-500 text-white w-32 px-3 font-semibold py-2 rounded-md">
            Save
        </button>
        <button type="button" onClick={handleCancel} className="bg-red-500 text-white font-semibold w-32 px-4 py-2 rounded-md">
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
          <table className="w-full text-xs text-left text-gray-500">
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
                    {filteredProjects.map((project, index) => (
                                    <tr key={index} className={Object.values(project).some(attribute => String(attribute).toLowerCase().includes(searchTerm.toLowerCase())) ? 'bg-white text-black' : 'bg-white'}>
                                        <td className="px-6 py-4">{project.pid}</td>
                            <td className="px-6 py-4">{project.projectName}</td>
                            <td className="px-6 py-4">{project.category}</td>
                            <td className="px-6 py-4">{project.location}</td>
                            <td className="px-6 py-4">{project.startDate}</td>
                            <td className="px-6 py-4">{project.endDate}</td>
                            <td style={{ padding: '12px' }}>
                            <button
                              style={{ marginRight: '5px', padding: '5px 10px', background: '#0F076D', color: 'white', borderRadius: '5px' }}
                              onClick={() => handleEditClick(project, index)}
                              title="Edit" 
                            >
                              <BsPencilSquare /> 
                            </button>
                            <button
                            style={{ padding: '5px 10px', background: '#C80007', color: 'white', borderRadius: '5px' }}
                            onClick={() => handleRemoveClick(index)}
                            >
                              <FaRegTrashCan />
                            </button>
                            </td>
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

export default ProjectTable;