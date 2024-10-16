import './App.css';
import Blog from './components/Blog/Blog';
import DownloadApp from './components/DownloadApp/DownloadApp';
import Families from './components/Families/Families';
import Faq from './components/Faq/Faq';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import OfferSlider from './components/OfferSlider/OfferSlider';
import PatientCare from './components/PatientCare/PatientCare';
import Search from './components/Search/Search';
import Specialist from './components/Specialist/Specialist';
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
      <Specialist />
      <PatientCare />
      <Blog />
      <Families />
      <Faq />
      <DownloadApp />
    </div>
  );
}

export default App;
