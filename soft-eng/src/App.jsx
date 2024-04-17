import React from 'react';
import Sidebar from './components/Sidebar';
import Logo from './components/Logo';
import ProjectTable from './components/ProjectTable';
import Dropdown from './components/Dropdown';
import ProjectTable1 from './components/ProjectTable1';
import CustomersTable from './components/CustomersTable';
import SuppliersTable from './components/SuppliersTable';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Sample from './components/Sample';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Slideshow from './components/Slideshow';
import MapContainer from './components/MapContainer';
import Login from './components/Login';
import ContactForm from './components/ContactForm';
import SignUp from './components/SignUp';
import Inventory from './components/Inventory';
import PasswordRecovery from './components/PasswordRecovery';
import PR from './components/PR';
import Account from './components/Account';
import Employees from './components/Employees';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/recovery" element={<PasswordRecovery />} />
          {/* newly added */}
          <Route path="/admin/projects" element={<ProjectTable />} />
          <Route path="/customers" element={<CustomersTable />} />
          <Route path="/suppliers" element={<SuppliersTable />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/account" element={<Account/>} />
          <Route path="/reset/:token" element={<PR />} />
        </Routes>
      </Router>
  );
 }
 export default App;