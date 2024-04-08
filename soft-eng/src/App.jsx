import React from 'react';
import AboutUs from './components/AboutUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import PopupChatWindow from './components/PopupChatWindow';

function App() {
  return (
<Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/services" element={<Services/>}/>
      </Routes>
    </Router>
  );
 }
 export default App;