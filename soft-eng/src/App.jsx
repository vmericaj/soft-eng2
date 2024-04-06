//import Sidebar from './components/Sidebar';
//import Logo from './components/Logo';

//import Dropdown from './components/Dropdown';

//import CustomersTable from './components/CustomersTable';
//import SuppliersTable from './components/SuppliersTable';
//import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
//import Slideshow from './components/Slideshow';
//import MapContainer from './components/MapContainer';
//import Login from './components/Login';
//import ContactForm from './components/ContactForm';
//import GolfClubBanner from './components/GolfClubBanner';
//import Form from './components/Form';
//import Login1 from './components/Login';
//import SignUp from './components/SignUp';
//import CreateAccount from './components/CreateAccount';
//mport ProjectTable from './components/ProjectTable';
//import Inventory from './components/Inventory';
//import Account from './components/Account';
//import Employees from './components/Employees';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/services" element={<Services/>}/>
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </Router>
  );
 }
 export default App;
 