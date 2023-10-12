import './App.css';
import { Route, Routes, Outlet, BrowserRouter } from 'react-router-dom';
import TopBanner from './components/TopBanner';
import Footer from './components/Footer';
import About from './pages/About';
import Rental from './pages/Rental';
import Error404 from './components/Error/Error404';
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
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/rental/:id' element={<Rental />} />
          <Route path='*' element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
