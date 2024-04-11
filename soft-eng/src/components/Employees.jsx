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
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { VscTypeHierarchySuper } from 'react-icons/vsc'; // Import icon for department
import { FaRegIdBadge } from 'react-icons/fa';
// ... other imports ...

// Define InfoCard component inside your Employees component
const InfoCard = ({ project, onEdit, onRemove }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4 flex items-center" style={{ maxWidth: '560px' }}>
      {/* Image container */}
      {project.image && (
        <img src={URL.createObjectURL(project.image)} alt="Profile" className="w-24 h-35 rounded  object-cover mr-4" />
      )}
      {/* Text container */}
      <div className="flex-grow">
        <div className="text-lg font-bold">{project.name}</div>
        <div className="text-md">{project.position}</div>
        <ul className="my-1 space x-1 text-[0.75rem]">
          <li className="flex items-center"><VscTypeHierarchySuper className="mr-1" /> {project.department}</li>
          <li className="flex items-center"><FaRegIdBadge className="mr-1" /> {project.eid}</li>
        </ul>
        <div className="flex items-center text-[0.75rem]">
          <MdOutlineMail className="mr-1" /> {/* Email icon */}
          <span>{project.email}</span>
        </div>
        <div className="flex items-center text-[0.75rem]">
          <MdOutlinePhoneInTalk className="mr-1" /> {/* Email icon */}
          <span>{project.number}</span>
        </div>
      </div>
      {/* Action buttons */}
      <div className="flex flex-col ml-4">
        <button onClick={onEdit} className="text-sm bg-customBlue text-white px-2 py-1 rounded mb-2">Edit</button>
        <button onClick={onRemove} className="text-sm bg-red-700 text-white px-2 py-1 rounded">Remove</button>
      </div>
    </div>
  );
};



const Employees = () => {
    
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
        eid: '',
        name: '',
        position: '',
        department: '',
        email: '',
        number: '',
        attachment: '',
        action: ''
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
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
      // Assuming you want to store the file itself, not just the file path
      if (e.target.files && e.target.files[0]) {
          setImage(e.target.files[0]);
      }
  };
    const [showNotifications, setShowNotifications] = useState(false);
    // Example notifications data
    const [notifications, setNotifications] = useState([
      // ... your initial notifications ...
    ]);
    const createNotification = (message) => {
      const newNotification = {
        id: Date.now(), // Using the current timestamp as a simple unique ID
        message: message,
        time: moment().fromNow() // This will display time as "a few seconds ago", etc.
      };
      setNotifications(prevNotifications => [newNotification, ...prevNotifications]);
    };
    // ... other functions ...
    const handleChange = (e) => {
      const { name, value } = e.target;
      const newValue = value.replace(/,/g, ''); // Remove commas before parsing
  
      // If the field being changed is 'paid', calculate the balance
      if (name === "paid") {
          const paidAmount = parseFloat(newValue) || 0; // Parse the paid value, defaulting to 0 if not a number
          const totalAmount = parseFloat(newProject.total.replace(/,/g, '')) || 0; // Parse the total value, defaulting to 0 if not a number
          const balanceAmount = totalAmount - paidAmount; // Calculate the balance
          
          // Format the balance to show commas as thousands separators
          const formattedBalance = balanceAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
          // Update the state with the new paid amount and the formatted balance
          setNewProject({ ...newProject, [name]: newValue, balance: formattedBalance });
      } else {
          // For all other fields, update the state as usual
          setNewProject({ ...newProject, [name]: newValue });
      }
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
      let successMessage = '';
      const formData = new FormData();
    formData.append('image', image); // Append the image file to the formData
    // Append other form data
    formData.append('eid', newProject.cid);
    formData.append('name', newProject.name);
    formData.append('number', newProject.number);
    formData.append('email', newProject.email);
  
      if (isEditing) {
          const updatedProjects = projects.map((item, index) => 
              index === editIndex ? newProject : item
          );
          setProjects(updatedProjects);
          setIsEditing(false);
          successMessage = `Successfully updated the project '${newProject.projectName}'.`;
      } else {
          setProjects([...projects, newProject]);
          successMessage = `Successfully added the project '${newProject.projectName}'.`;
      }
  
      createNotification(successMessage);
      setShowSuccessAlert(true);
      setTimeout(() => setShowSuccessAlert(false), 3000);

      const submittedProject = {
            ...newProject,
            image: image,
            id: Date.now(), // using the timestamp as an ID
        };

        setProjects([...projects, submittedProject]);
        setShowSuccessAlert(true);
        setSuccessMessage(`Successfully added the project '${newProject.name}'.`);
        setTimeout(() => setShowSuccessAlert(false), 3000);
        setShowForm(false);
        setNewProject({
            eid: '',
            name: '',
            position: '',
            department: '',
            email: '',
            number: '',
            attachment: '',
            action: ''
        });
        setImage(null);
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
      eid: '',
      name: '',
      position: '',
      department: '',
      email: '',
      number: '',
      attachment: '',
      action: ''
  });
    setIsEditing(false);

  };

  const handleRemoveClick = (index) => {
    setDeleteIndex(index);
    setShowDeleteConfirmation(true);
};
  const handleCancel = () => {
    setShowForm(false);
    setIsEditing(false);
    setEditIndex(-1);
    setNewProject({
      eid: '',
        name: '',
        position: '',
        department: '',
        email: '',
        number: '',
        attachment: '',
        action: ''
    });
  };
  const confirmDelete = () => {
    setShowDeleteConfirmation(false);
    setShowPasswordPrompt(true);
    setCurrentAction('delete');
};

const cancelDelete = () => {
    setShowDeleteConfirmation(false);
    setDeleteIndex(null);
};
const deleteProject = () => {
  if (deleteIndex != null) {
      const projectToDelete = projects[deleteIndex];
      const updatedProjects = projects.filter((_, index) => index !== deleteIndex);
      setProjects(updatedProjects);
      createNotification(`Successfully deleted the project '${projectToDelete.projectName}'.`);
      setShowSuccessAlert(true);
      setSuccessMessage(`Successfully deleted the project '${projectToDelete.projectName}'.`);
      setTimeout(() => setShowSuccessAlert(false), 3000);
      setDeleteIndex(null); // Reset delete index after deletion
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
      filtered = filtered.filter(name =>
          Object.values(name).some(attribute =>
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

const toggleNotifications = () => {
  setShowNotifications(!showNotifications);
};


const filteredProjects = getFilteredProjects();



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
          <button className="flex items-center font-bold justify-center w-full px-4 py-2 text-black bg-customOrange rounded-md hover:bg-customBlue hover:text-white">
              <span>LOGOUT</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        {/* ... header content ... */}
        <div className="flex items-center justify-between flex-shrink-0 px-8 py-4 bg-white border-b dark:bg-gray-800 dark:border-gray-600 relative">
        <div className="flex items-center"> {/* Added a div to hold both the icon and the text */}
          <BsFillPersonVcardFill className="mr-2 w-6 h-6 text-customBlue" /> {/* Icon */}
          <h1 className="text-xl font-bold text-customBlue dark:text-white">EMPLOYEES</h1> {/* Text */}
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
    right: 800,
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
      <div className="text-sm font-medium text-blue-600 hover:text-blue-500 cursor-pointer p-4 text-center">Mark all as read</div>
    </div>
  )}
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
          <div className="flex items-center mb-4">
    <input
        className="border rounded-l py-2 px-3"
        type="search"
        placeholder="Search projects"
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
        + EMPLOYEE
    </button>
    {showSuccessAlert && (
    <div style={alertStyle} className="flex items-center">
        <span className="text-green-800">{successMessage}</span>
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
  <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center z-20">
    <div className="bg-black p-6 rounded shadow-xl">
      {/* Logo and title section */}
      <div className="flex flex-col items-center ">
    <img src={logo} alt="Logo" className="h-14 w-14" />
    <h1 className="text-xl font-bold text-customOrange mt-2 mb-4">Inventory System</h1>
    <p className="text-xs text-white">To proceed and access the system, please enter your password</p>

    <p className="text-xs text-white"> below.  This secure login ensures that only authorized personnel </p>
    <p className="text-xs text-white">can view and manage the inventory data.</p>
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
<div className="bg-white p-6 rounded shadow-xl">

    <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-wrap -mx-2">
            {/* Wrap each input with a div and apply a consistent width */}
            <div className="px-2 w-full md:w-1/2">
                <label htmlFor="eid" className="block text-gray-700 text-sm font-bold mb-2">EMPLOYEE ID</label>
                <input type="text"id="eid" name="eid" value={newProject.eid} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div className="px-2 w-full md:w-1/2">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">FULL NAME</label>
                <input type="text" id="name" name="name" value={newProject.name} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>

            <div className="px-2 w-full md:w-1/2">
                <label htmlFor="position" className="block text-gray-700 text-sm font-bold mb-2">POSITION</label>
                <input type="text" id="position" name="position" value={newProject.position} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>

            <div className="px-2 w-full md:w-1/2">
                <label htmlFor="department" className="block text-gray-700 text-sm font-bold mb-2">DEPARTMENT</label>
                <input type="text" id="department" name="department" value={newProject.department} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>

            <div className="px-2 w-full md:w-1/2">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">EMAIL</label>
                <input type="text" id="email" name="email" value={newProject.email} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
           

            <div className="px-2 w-full md:w-1/2">
                <label htmlFor="number" className="block text-gray-700 text-sm font-bold mb-2">CONTACT NUMBER</label>
                <input type="text" id="number" name="number" value={newProject.number} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>

            <div className="px-2 w-full">
            <label htmlFor="imageUpload" className="block text-gray-700 text-sm font-bold mb-2">Attach Picture</label>
            <input type="file" id="imageUpload" name="imageUpload" accept="image/*" 
                  className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                onChange={handleImageChange} />
</div>
{image && (
    <div className="px-2 w-full py-4">
        <img src={URL.createObjectURL(image)} alt="Preview" className="max-w-xs" />
    </div>
)}
        </div>

        {/* Save and Cancel buttons */}
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
<div className="flex flex-wrap -m-2">
          {projects.map((project, index) => (
            <div key={project.id} className="p-2" style={{ flexBasis: 'calc(50% - 1rem)' }}>
              <InfoCard
                project={project}
                onEdit={() => handleEditClick(project, index)}
                onRemove={() => handleRemoveClick(index)}
              />
            </div>
          ))}
        </div>

        </div>
      </div>
    </div>
  );
};

export default Employees;