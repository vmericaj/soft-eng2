//import Sidebar from './components/Sidebar';
//import Logo from './components/Logo';

//import Dropdown from './components/Dropdown';

import CustomersTable from './components/CustomersTable';
import SuppliersTable from './components/SuppliersTable';
//import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Login from './components/Login';
import SignUp from './components/SignUp';

import Inventory from './components/Inventory';
import ProjectTable from './components/ProjectTable';
import CustomersTable from './components/CustomersTable';
import Employees from './components/Employees';
import Account from './components/Account';
import { UserProvider } from './components/UserContext';
import DateCalendarFormProps from './components/DateCalendarFormProps';


function App() {
  return (
    <Router>
      <UserProvider>  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/projecttable" element={<ProjectTable />} />
          <Route path="/customers" element={<CustomersTable />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
 
 