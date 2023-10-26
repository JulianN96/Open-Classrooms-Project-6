import './App.css';
import { Route, Routes, Outlet } from 'react-router-dom';
import About from './pages/About';
import Rental from './pages/Rental';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import Layout from './components/Layout';



function App() {
  return (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/rental/:id' element={<Rental />} />
          <Route path='*' element={<Error404 />} />
        </Route>
      </Routes>
  );
}

export default App;
