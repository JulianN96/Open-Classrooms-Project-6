import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Error404 from './components/Error/Error404';
import About from './pages/About';

import Rental from './pages/Rental';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>  
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element ={<About />} />
        <Route path='/rental/:id' element={<Rental />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
