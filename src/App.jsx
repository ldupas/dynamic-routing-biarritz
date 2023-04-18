import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Games from './pages/Games';
import AboutUs from './pages/AboutUs';
import GameDetails from './components/games/GameDetails';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Games />} />
          <Route path='/:id'element={<GameDetails />} />
          <Route path='/about-us' element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
