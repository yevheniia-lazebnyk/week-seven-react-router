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
        </Routes>
      </Router>
  );
}

export default App;
