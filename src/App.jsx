import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Footer from './components/Footer.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Contact from './pages/contact/Contact.jsx';
import CertificatesPage from './pages/Certificate.jsx';
import { HelmetProvider } from 'react-helmet-async'; 
import Gallery from './pages/Gallery.jsx';
import ScrollToTop from './pages/ScrollToTop.jsx';
import AboutUs from './pages/about/About.jsx';
import ServicesPage from './pages/service/Service.jsx';
import SwimmingPool from './pages/service/Swimming.jsx';
import Air from './pages/service/Air.jsx';
import Osmosis from './pages/service/Osmosis.jsx';
import Sewage from './pages/service/Sewage.jsx';
import Park from './pages/service/Park.jsx';
import Mineral from './pages/service/Mineral.jsx';
import Waste from './pages/service/Waste.jsx';
import Treatment from './pages/service/Treatment.jsx';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <HelmetProvider> 
      <Router>
        <ScrollToTop/>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us/" element={<Contact />} />
          <Route path="/certificates/" element={<CertificatesPage />} />
          <Route path="/gallery/" element={<Gallery/>} />
           <Route path="/about-us/" element={<AboutUs/>} />
           <Route path="/services/" element={<ServicesPage/>} />
           <Route path="/swimming-pool-water-treatment-plant/" element={<SwimmingPool/>} />
           <Route path="/air-pollution-control-systems/" element={<Air/>} />
            <Route path="/reverse-osmosis/" element={<Osmosis/>} />
             <Route path="/sewage-treatment-plant/" element={<Sewage/>} />
             <Route path="/water-ammusement-parks/" element={<Park/>} />
              <Route path="/mineral-water-plants/" element={<Mineral/>} />
              <Route path="/waste-water-treatment-plants/" element={<Waste/>} />
              <Route path="/water-treatment-plants/" element={<Treatment/>} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
