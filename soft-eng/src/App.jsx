import Sidebar from './components/Sidebar';
import Logo from './components/Logo';

import Dropdown from './components/Dropdown';
import CustomersTable from './components/CustomersTable';
import SuppliersTable from './components/SuppliersTable';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Slideshow from './components/Slideshow';
<<<<<<< HEAD
import MapContainer from './components/MapContainer';
=======
>>>>>>> a0a5a825046cbc6703679c1ce0ca5239f5058576
import Login from './components/Login';
import ContactForm from './components/ContactForm';
import GolfClubBanner from './components/GolfClubBanner';
import Form from './components/Form';
import Login1 from './components/Login';
import SignUp from './components/SignUp';
import CreateAccount from './components/CreateAccount';
import ProjectTable from './components/ProjectTable';
import Inventory from './components/Inventory';
import Account from './components/Account';
import Employees from './components/Employees';
import DateCalendarFormProps from './components/DateCalendarFormProps';

function App() {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/inventory" element={<Inventory />} />
       <Route path="/projects" element={<ProjectTable />} />
       <Route path="/customers" element={<CustomersTable />} />
       <Route path="/suppliers" element={<SuppliersTable />} />
       <Route path="/employees" element={<Employees />} />
       <Route path="/account" element={<Account/>} />

=======
        <Route path="/" element={<Inventory />} />
        <Route path="/projects" element={<ProjectTable />} />
        <Route path="/customers" element={<CustomersTable />} />
        <Route path="/suppliers" element={<SuppliersTable />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/account" element={<Account/>} />
>>>>>>> a0a5a825046cbc6703679c1ce0ca5239f5058576
      </Routes>
    </Router>
  );
 }
 export default App;

 
 
 
 