import React from 'react';
import { Helmet } from "react-helmet-async";
import HomeService from '../HomeService';
import PoolImage from '../../assets/water.jpg';
import ROImage1 from '../../assets/water2.webp';
import OpacityIcon from '@mui/icons-material/Opacity';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import ForestIcon from '@mui/icons-material/Forest';
import TreatmentBanner from './TreatmentBanner';

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

const Treatment = () => {
  return (
    <div>
     <Helmet>
  <title>
    Water Treatment Plant Solutions(WTP) in – Noida, Delhi, Gurugram, India, Nepal, UAE, Oman
  </title>
  <meta
    name="description"
    content="Clear Ion Experts Pvt. Ltd. offers advanced ETP, STP, RO, and ZLD systems for industries, commercial buildings, and municipalities in India, Noida (Sector 1 to Sector 168), Delhi, Gurugram, Nepal, Bhutan, UAE, and Oman."
  />
  <meta
    name="keywords"
    content="Water Treatment Plant India, STP Plant Noida, ETP Solutions Gurugram, RO Plant Delhi, ZLD Systems UAE, Water Softener Nepal, DM Plant Oman, Industrial Wastewater Treatment, Noida Sector 62, Sector 63, Sector 15, Sector 137, Sector 150, Sector 18, Commercial Water Treatment, Eco-Friendly Water Solutions"
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://clear-ion.com/water-treatment-plants/" />
</Helmet>




    <TreatmentBanner/>
      <div className="min-h-screen flex flex-col justify-between bg-white">
{/* Section 1: Overview */}
<section className="py-16 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto grid grid-cols-1 gap-16">
    <div className="grid md:grid-cols-2 gap-10 items-center">

      {/* Text Section */}
      <div className="text-gray-700 text-base leading-relaxed text-justify md:text-left">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-blue-400 mb-2">
            Water Treatment Plant Solutions
          </h2>
          <div className="w-48 h-1 bg-blue-400 mx-auto rounded"></div>
        </div>

        <p>
          We specialize in advanced <strong>Water Treatment Plants</strong> for commercial and industrial use in regions including <strong>Noida (Sector 1–168), Delhi, Gurugram, Nepal, Bhutan, Oman, and UAE</strong>.
        </p>

        <p className="mt-4">
          <strong>Efficient Sewage Treatment:</strong> Our STPs ensure eco-friendly sewage management for residential, hospitality, and institutional facilities.
        </p>

        <p className="mt-4">
          <strong>Effluent Treatment Plants:</strong> Trusted ETP solutions for textile, pharma, food, and chemical industries across <strong>Noida Extension, Sector 63, Sector 137, and Gurugram</strong>.
        </p>

        <p className="mt-4">
          <strong>Wastewater Recycling:</strong> Reduce water wastage with our energy-efficient WWTP systems used across <strong>Delhi NCR, Nepal, Bhutan, and Oman</strong>.
        </p>

        <p className="mt-4">
          Our solutions are ideal for <strong>factories, housing societies, resorts, government projects</strong>, and comply with CPCB & PCB norms.
        </p>
      </div>

      {/* Image Section */}
      <img
        src={PoolImage}
        alt="Water treatment plant system(WTP) in India"
        className="w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[450px] object-cover rounded-xl shadow-lg"
      />
    </div>
  </div>
</section>


 <section className="py-10 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Image Section */}
      <div className="order-2 lg:order-1">
        <img
          src={ROImage1}
      alt="Water treatment plant system(WTP) in Noida"
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="order-1 lg:order-2">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-blue-400 mb-2">
            Why Choose Our Water Treatment Plant Solutions?
          </h2>
          <div className="w-48 h-1 bg-blue-400 mx-auto rounded"></div>
        </div>

        <div className="space-y-6">
          <Feature
            Icon={OpacityIcon}
            title="Pure & Safe Drinking Water"
            description="Removes harmful contaminants and delivers clean water for industrial, commercial, and municipal use."
          />
          <Feature
            Icon={LocalDrinkIcon}
            title="Customized RO & ETP Systems"
            description="Tailor-made treatment plants for hospitals, factories, residential complexes, and institutions."
          />
          <Feature
            Icon={PlumbingIcon}
            title="Advanced Filtration Technology"
            description="Multi-stage filtration for efficient removal of chemicals, heavy metals, and impurities."
          />
          <Feature
            Icon={ForestIcon}
            title="Sustainable Wastewater Reuse"
            description="Efficient water recycling to reduce environmental impact and meet green compliance."
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

export default Treatment;