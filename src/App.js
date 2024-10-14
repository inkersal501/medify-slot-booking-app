import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import OfferSlider from './components/OfferSlider/OfferSlider';
import Search from './components/Search/Search';
import Specialization from './components/Specialization/Specialization';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
        <Navbar />
      </header>
      <Hero />
      <Search />
      <OfferSlider />
      <Specialization />
    </div>
  );
}

export default App;
