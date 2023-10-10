import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
  // <React.StrictMode>
  //   <Router>  
  //     {/* <Routes>
  //       <Route path='/' element={<Home />} />
  //       <Route path='/about' element ={<About />} />
  //       <Route path='/rental/:id' element={<Rental />} />
  //       <Route path='*' element={<Error404 />} />
  //     </Routes> */}
  //   </Router>
  // </React.StrictMode>
);
