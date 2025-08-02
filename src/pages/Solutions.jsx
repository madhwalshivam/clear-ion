import React from 'react';
import { Link } from 'react-router-dom';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import RecyclingIcon from '@mui/icons-material/Recycling';


const Solutions = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title & Description */}
        <div className="text-center mb-16">
           <div className="text-center mb-10">
  <h2 className="text-4xl font-bold text-blue-700 mb-2">Leading Water Treatment Solutions</h2>
  <div className="w-64 h-1 bg-blue-700 mx-auto rounded"></div>
</div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Clear-ion Experts stands for the highest standards of quality & integrity in the business of Water, Waste Water & Air Pollution Control Systems.
            Since CIEPL’s inception way back in 1994, the company has grown swiftly and is now known globally.
            <span className="block mt-2">
              <Link
  to="/about-us/"
  className="text-blue-700 font-semibold underline hover:text-blue-900 transition-all"
>
  About Our Water Treatment Services
</Link>

            </span>
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Water Treatment */}
          <div
            className="text-center p-8 bg-blue-500 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            data-aos="fade-up"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full mx-auto mb-6">
              <WaterDropIcon className="text-blue-500" fontSize="large" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Water Treatment</h3>
            <p className="text-white">
              Advanced filtration and purification systems for residential, commercial, and industrial applications.
            </p>
          </div>

          {/* Sewage Treatment */}
          <div
            className="text-center p-8 bg-blue-500 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full mx-auto mb-6">
              <RecyclingIcon className="text-blue-500" fontSize="large" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Sewage Treatment</h3>
            <p className="text-white">
              Comprehensive wastewater management solutions with biological and chemical treatment processes.
            </p>
          </div>
          <div
            className="text-center p-8 bg-blue-500 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            data-aos="fade-up"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full mx-auto mb-6">
              <WaterDropIcon className="text-blue-500" fontSize="large" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Waste Water Treatment</h3>
            <p className="text-white">
            Advanced waste water treatment systems designed to remove contaminants
               recycle water.
            </p>
          </div>
 
        </div>
      </div>
    </section>
  );
};

export default Solutions;
