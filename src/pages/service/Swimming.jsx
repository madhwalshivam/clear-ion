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
        <title>Best Swimming Pool Filtration & Treatment Solutions in India | Clear Ion</title>
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
  A <strong>swimming pool</strong>—also known as a swimming bath, wading pool, or paddling pool—is a container filled with water intended for swimming and water-based recreation. From residential to commercial use, swimming pools come in various sizes, including the Olympic-size pool used for competitions.
</p>

<p className="mt-4">
  Pools can be constructed either above ground or in-ground, using materials like concrete, metal, plastic, or fiberglass. Public pools are designed for community use in places like hotels or clubs, while private pools are commonly found in homes and personal spaces.
</p>

<p className="mt-4">
  Today, many <strong>health clubs, fitness centers, and luxury hotels</strong> in regions like <strong>Delhi</strong>, <strong>Faridabad</strong>, and across <strong>India</strong> feature swimming pools as part of their amenities. These are not just for fun, but also used for therapeutic and fitness purposes.
</p>

<p className="mt-4">
  <strong>Hot tubs and spas</strong>, which are smaller pools filled with heated water, are popular in massage centers, hotels, and homes, offering relaxation and hydrotherapy benefits.
</p>

<p className="mt-4">
  At <strong>Pure World</strong>, we are proud to be one of the leading suppliers of <strong>Swimming Pool Filtration Plants</strong> and accessories. We provide high-quality pool equipment and services in <strong>Delhi</strong>, <strong>Faridabad</strong>, <strong>Gurgaon</strong>, <strong>Bhutan</strong>, <strong>Nepal</strong>, and <strong>all over India</strong>, delivering customized solutions for both private and public pool projects.
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
