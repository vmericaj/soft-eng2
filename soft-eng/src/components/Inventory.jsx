import * as React from 'react';
import logo from "../assets/se.png";
import { Link } from 'react-router-dom';
import { TfiDashboard} from "react-icons/tfi";
import { MdInventory2 } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useUser } from '../components/UserContext';

// ... other imports ...

const Inventory = () => {
  const [value, setValue] = React.useState(dayjs());
  const { name, setName, profilePic, updateUser } = useUser();


  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      {/* ... sidebar content ... */}
      <div className="flex flex-col w-64 h-full px-4 py-8 bg-black dark:border-gray-600">
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
      
    

            {/* Repeat for other items */}
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
        <div className="flex items-center justify-between flex-shrink-0 px-8 py-4 bg-white border-b ">
        <div className="flex items-center"> {/* Added a div to hold both the icon and the text */}
          <TfiDashboard className="mr-2 w-8 h-8 text-customBlue" /> {/* Icon */}
          <h1 className="text-xl font-bold text-customBlue ">DASHBOARD</h1> {/* Text */}
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
          
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {/* Dashboard */}
          <div className="p-8 h-80 w-auto items-center justify-center row-span-2 col-span-1 lg:col-span-2 flex overflow-hidden">
          <div >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
              />
            </LocalizationProvider>
            </div>
          </div>
          
          {/* Projects */}
        
          <Link to="/projecttable">
            <div className="bg-customBlue rounded-xl shadow-lg p-2 h-full flex justify-center items-center">
              <MdInventory2 className="text-4xl text-white" />
            </div>
          </Link>

          <Link to="/customers">
          <div className="bg-customOrange rounded-xl shadow-lg p-2 h-full flex justify-center items-center">
            <IoPersonSharp className="text-4xl text-white" />
          </div>
          </Link>

          {/* Employees */}

          <Link to="/employees">
          <div className="bg-customOrange rounded-xl shadow-lg p-4 h-full flex justify-center items-center">
          <BsFillPersonVcardFill className="text-4xl text-white" />
          </div>
          </Link>

          {/* Account */}
          <Link to="/account">
          <div className="bg-customBlue rounded-xl shadow-lg p-4 h-full flex justify-center items-center">
          <VscAccount className="text-4xl text-white" />
          </div>
          </Link>

        </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;