import { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Shop from './Shop';
import AboutProduct from './AboutProduct';

function App() {
  return (
      <Router>
        <nav>
          <Link to="/About" className='link'>About</Link>
          <Link to="/Contact" className='link'>Contact</Link>
          <Link to="/Shop" className='link'>Shop</Link>
        </nav>

        <Routes>
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/about/:title' element={<AboutProduct />} />
        </Routes>
      </Router>
  );
}

export default App;
