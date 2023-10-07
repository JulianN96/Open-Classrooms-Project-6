import '../../App.css';
import TopBanner from '../../components/TopBanner';
import Footer from '../../components/Footer';
import { useState } from 'react';
import RentalsList from '../../components/RentalsList';

function App() {
  const [isHomepageActive, setHomepageActive] = useState(true);

  return (
    <div className="homepage">
      <TopBanner isHomepageActive={isHomepageActive}/>
      <div className='homepage__hero'>
        <h1 className='homepage__heroTitle'>Chez vous, partout et ailleurs</h1>
      </div>
      <RentalsList />
      <Footer />
    </div>
  );
}

export default App;
