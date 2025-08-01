import React from 'react';
import { Helmet } from "react-helmet-async";
import SwimmingBanner from './SwimmingBanner';
import HomeService from '../HomeService';
import PoolImage from '../../assets/swimming.jpg';
import SwimImage from '../../assets/swim1.jpg';

import WaterIcon from '@mui/icons-material/Opacity';
import ShieldIcon from '@mui/icons-material/Security';
import SettingsIcon from '@mui/icons-material/Settings';
import MoneyIcon from '@mui/icons-material/AttachMoney';


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

const SwimmingPool = () => {
  return (
    <div>
      <Helmet>
        <title>Swimming Pool Filtration & Treatment Solutions | Clear Ion</title>
        <meta
          name="description"
          content="Learn about swimming pool types, water-based recreation, and our advanced pool filtration systems. We offer turnkey pool disinfection and treatment solutions."
        />
        <meta
          name="keywords"
          content="Swimming Pool, Filtration, Disinfection, Spa, Public Pool, Private Pool, Hot Tub, Water Treatment"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://clear-ion.com/swimming-pool-water-treatment-plant/" />
      </Helmet>

      <SwimmingBanner />

      <div className="min-h-screen flex flex-col justify-between bg-white">

        {/* Section 1: Overview */}
      <section className="py-16 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto grid grid-cols-1 gap-16">
    <div className="grid md:grid-cols-2 gap-10 items-center">

      {/* Text Section */}
      <div className="text-gray-700 text-base leading-relaxed text-justify md:text-left">
         <div className="text-center mb-10">
                  <h2 className="text-4xl font-bold text-blue-400 mb-2">Swimming Pool Overview</h2>
                  <div className="w-48 h-1 bg-blue-400 mx-auto rounded"></div>
                </div>

        <p>
          Swimming pool, swimming bath, wading pool, paddling pool, or simply a pool, is a container filled with water intended for swimming or water-based recreation. There are many standard sizes, the largest of which is the Olympic-size swimming pool.
        </p>
        <p className="mt-4">
          A pool can be built either above or in the ground, and from materials such as concrete, metal, plastic or fiberglass. Pools that may be used by many people or by the general public are called public, while pools used exclusively by a few people or in a home are called private.
        </p>
        <p className="mt-4">
          Many health clubs, fitness centers and private clubs have public pools used mostly for exercise. Many hotels have pools available for their guests.
        </p>
        <p className="mt-4">
          Hot tubs and spas are pools with hot water, used for relaxation or therapy, and are common in homes, hotels, clubs and massage parlors. We are one of the leaders in supplying the Swimming Pool Filtration Plants and accessories.
        </p>
      </div>

      {/* Image Section */}
      <img
        src={PoolImage}
        alt="Swimming Pool"
        className="w-full h-[450px] object-cover rounded-xl shadow-lg"
      />
    </div>
  </div>
</section>

       {/* Section 2: Why Choose Us */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* Image First on Large Screens */}
      <div className="order-2 lg:order-1">
        <img
          src={SwimImage}
          alt="Pool treatment benefits"
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>

      {/* Text Second on Large Screens */}
      <div className="order-1 lg:order-2">
         <div className="text-center mb-10">
                  <h2 className="text-4xl font-bold text-blue-400 mb-2">Why Choose Our Pool Treatment?</h2>
                  <div className="w-48 h-1 bg-blue-400 mx-auto rounded"></div>
                </div>
        <div className="space-y-6">
          <Feature
            Icon={WaterIcon}
            title="Crystal Clear Water"
            description="Advanced filtration ensures sparkling clean water that's safe for swimming."
          />
          <Feature
            Icon={ShieldIcon}
            title="Health & Safety"
            description="Effective disinfection systems eliminate harmful bacteria and pathogens."
          />
          <Feature
            Icon={SettingsIcon}
            title="Automated Operation"
            description="Smart systems reduce manual maintenance and ensure consistent water quality."
          />
          <Feature
            Icon={MoneyIcon}
            title="Cost Effective"
            description="Efficient systems reduce chemical usage and energy consumption."
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

export default SwimmingPool;
