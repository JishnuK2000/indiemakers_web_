import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home/Home';
import HowWeWork from './pages/HowWeWork';
import AboutUs from './pages/AboutUs/AboutUs';
import Services from './pages/Services/Services';
import Labs from './pages/Labs/LabsApply';
import Succes from './pages/Labs/LabsFormSuccess'
import PartnerIntent from './pages/Labs/Partner';


function App() {
  return (
    <Router>
      <div className="h-screen w-screen overflow-hidden">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/labs" element={<Labs />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
