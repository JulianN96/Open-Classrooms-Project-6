import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import e404 from './components/Error/e404';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<e404 />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
