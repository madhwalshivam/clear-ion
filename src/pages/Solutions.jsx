import React from 'react';
import { Link } from 'react-router-dom';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import RecyclingIcon from '@mui/icons-material/Recycling';
import ForestIcon from '@mui/icons-material/Forest';

const Solutions = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title & Description */}
        <div className="text-center mb-16">
           <div className="text-center mb-10">
  <h2 className="text-4xl font-bold text-blue-400 mb-2">Leading Water Treatment Solutions</h2>
  <div className="w-64 h-1 bg-blue-400 mx-auto rounded"></div>
</div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Clear-ion Experts stands for the highest standards of quality & integrity in the business of Water, Waste Water & Air Pollution Control Systems.
            Since CIEPL’s inception way back in 1994, the company has grown swiftly and is now known globally.
            <span className="block mt-2">
              <Link
                to="/about"
                className="text-blue-400 font-semibold underline hover:text-blue-900 transition-all"
              >
                Read more
              </Link>
            </span>
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Water Treatment */}
          <div
            className="text-center p-8 bg-blue-50 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            data-aos="fade-up"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-blue-600 rounded-full mx-auto mb-6">
              <WaterDropIcon className="text-white" fontSize="large" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Water Treatment</h3>
            <p className="text-gray-600">
              Advanced filtration and purification systems for residential, commercial, and industrial applications.
            </p>
          </div>

          {/* Sewage Treatment */}
          <div
            className="text-center p-8 bg-green-50 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-green-600 rounded-full mx-auto mb-6">
              <RecyclingIcon className="text-white" fontSize="large" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Sewage Treatment</h3>
            <p className="text-gray-600">
              Comprehensive wastewater management solutions with biological and chemical treatment processes.
            </p>
          </div>

          {/* Air Pollution Control */}
          <div
            className="text-center p-8 bg-purple-50 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-purple-600 rounded-full mx-auto mb-6">
              <ForestIcon className="text-white" fontSize="large" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Air Pollution Control</h3>
            <p className="text-gray-600">
              State-of-the-art air purification systems to reduce emissions and improve air quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
