import './App.css'; 
import DownloadApp from './components/DownloadApp/DownloadApp'; 
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'; 
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Header />       
      <Home />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default App;
