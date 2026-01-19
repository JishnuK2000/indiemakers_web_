import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home/Home";
import HowWeWork from "./pages/HowWeWork";
import AboutUs from "./pages/AboutUs/AboutUs";
import Services from "./pages/Services/Services";
import ServicesApply from "./pages/Services/ServicesApply";

import LabsApply from "./pages/Labs/LabsApply";
import Labs from "./pages/Labs/Labs";
import PartnerIntent from "./pages/Labs/Partner";
import ExploreOurVentures from "./pages/OurVentures/OurVentures";

function App() {
  return (
    <Router>
      <div className=" w-screen ">
        <Navigation />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services-apply" element={<ServicesApply />} />

          <Route path="/labs" element={<Labs />} />

          <Route path="/labs-apply" element={<LabsApply />} />
          <Route path="/our-ventures" element={<ExploreOurVentures />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
