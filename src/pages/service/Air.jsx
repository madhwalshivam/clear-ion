import React from 'react';
import { Helmet } from "react-helmet-async";
import HomeService from '../HomeService';
import PoolImage from '../../assets/a1.jpg';
import AirPollutionImage from '../../assets/a.jpg';
import FilterIcon from '@mui/icons-material/FilterAlt';
import HealthIcon from '@mui/icons-material/HealthAndSafety';
import SensorsIcon from '@mui/icons-material/Sensors';
import ForestIcon from '@mui/icons-material/Forest';
import AirBanner from './AirBanner';


const Feature = ({ Icon, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
      <Icon className="text-blue-400" />
    </div>
    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Air = () => {
  return (
    <div>
         <Helmet>
        <title>Air Pollution Control Systems & Solutions | Clear Ion</title>
        <meta
          name="description"
          content="Discover our advanced air pollution control systems designed to reduce emissions, improve air quality, and ensure environmental compliance across industries."
        />
        <meta
          name="keywords"
          content="Air Pollution Control, Air Filtration, Industrial Emissions, Clean Air Solutions, Dust Collector, Scrubber System, Pollution Reduction"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://clear-ion.com/air-pollution-control-systems/" />
      </Helmet>
     <AirBanner/>
      <div className="min-h-screen flex flex-col justify-between bg-white">

        {/* Section 1: Overview */}
      <section className="py-16 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto grid grid-cols-1 gap-16">
    <div className="grid md:grid-cols-2 gap-10 items-center">

      {/* Text Section */}
     <div className="text-gray-700 text-base leading-relaxed text-justify md:text-left">
  <div className="text-center mb-10">
                  <h2 className="text-4xl font-bold text-blue-400 mb-2">Clean Air Technologies</h2>
                  <div className="w-48 h-1 bg-blue-400 mx-auto rounded"></div>
                </div>

  <p>
    Air pollution systems reduce harmful particles and gases from industries to protect the environment.
  </p>

  <p className="mt-4">
    <strong>HEPA Filters:</strong> Capture very small airborne particles using fiberglass fibers in homes and hospitals.
  </p>

  <p className="mt-4">
    <strong>Bag Filters:</strong> Trap industrial dust using fabric filters, improving air quality in factories.
  </p>

  <p className="mt-4">
    <strong>Cyclone Dust Collector:</strong> Uses spinning motion and gravity to separate dust from air without filters.
  </p>

  <p className="mt-4">
    <strong>Wet Scrubber:</strong> Polluted gas contacts liquid spray, removing harmful particles and gases effectively.
  </p>

  <p className="mt-4">
    <strong>Fume Extraction:</strong> Removes hazardous fumes during welding or lab work using filters and exhaust systems.
  </p>

  <p className="mt-4">
    <strong>Multi Cyclone:</strong> Uses multiple spinning chambers to increase dust collection efficiency in heavy industries.
  </p>

  <p className="mt-4">
    <strong>Air Filtration:</strong> Filters dust, smoke, and odors using HEPA or carbon filters in clean environments.
  </p>
</div>


      {/* Image Section */}
      <img
  src={PoolImage}
  alt="Swimming Pool"
  className="w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[550px] object-cover rounded-xl shadow-lg"
/>

    </div>
  </div>
</section>

       {/* Section 2: Why Choose Us */}
<section className="py-10 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* Image First on Large Screens */}
      <div className="order-2 lg:order-1">
        <img
          src={AirPollutionImage} 
          alt="Air Pollution Control"
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>

      {/* Text Second on Large Screens */}
      <div className="order-1 lg:order-2">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-blue-400 mb-2">Why Air Pollution Control Matters?</h2>
          <div className="w-48 h-1 bg-blue-400 mx-auto rounded"></div>
        </div>

        <div className="space-y-6">
          <Feature
            Icon={FilterIcon}
            title="Cleaner Air"
            description="Advanced filters remove harmful gases and fine particles from the air."
          />
          <Feature
            Icon={HealthIcon}
            title="Health Protection"
            description="Reduces respiratory diseases by limiting pollutant exposure."
          />
          <Feature
            Icon={SensorsIcon}
            title="Smart Monitoring"
            description="Real-time sensors track air quality and optimize system performance."
          />
          <Feature
            Icon={ForestIcon}
            title="Eco-Friendly"
            description="Helps industries reduce emissions and comply with environmental norms."
          />
        </div>
      </div>
    </div>
  </div>
</section>

        <HomeService />
      </div>
    </div>
  );
};

export default Air;