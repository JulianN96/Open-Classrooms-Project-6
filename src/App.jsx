import './App.css';
import { Route, Routes, Outlet } from 'react-router-dom';
import TopBanner from './components/TopBanner';
import Footer from './components/Footer';
import About from './pages/About';
import Rental from './pages/Rental';
import Error404 from './pages/Error404';
import Home from './pages/Home';

function Layout() {
  return (
    <div className='app'>
      <TopBanner />
      <Outlet />
      <Footer />
    </div>
  );
}

function App() {
  return (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/rental/:id' element={<Rental />} />
          <Route path='/rental/*' element={<Error404 />} />
          <Route path='*' element={<Error404 />} />
        </Route>
      </Routes>
  );
}

export default App;
