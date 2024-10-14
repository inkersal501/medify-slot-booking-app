import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
        <Navbar />
      </header>
      <Hero />
      <Search />
    </div>
  );
}

export default App;
