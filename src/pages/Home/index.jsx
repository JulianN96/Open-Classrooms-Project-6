import '../../App.css';
import TopBanner from '../../components/TopBanner';
import Footer from '../../components/Footer';
import RentalsList from '../../components/RentalsList';

function App() {

  return (
    <div className="homepage">
      <TopBanner />
      <div className='homepage__hero'>
        <h1 className='homepage__heroTitle'>Chez vous, partout et ailleurs</h1>
      </div>
      <RentalsList />
      <Footer />
    </div>
  );
}

export default App;
