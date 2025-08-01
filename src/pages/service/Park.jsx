import React from 'react';
import { Helmet } from "react-helmet-async";
import HomeService from '../HomeService';
import PoolImage from '../../assets/w1.jpg';
import ROImage1 from '../../assets/w2.jpg';
import OpacityIcon from '@mui/icons-material/Opacity';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import ForestIcon from '@mui/icons-material/Forest';
import ParkBanner from './ParkBanner';

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

const Park = () => {
  return (
    <div>
      <Helmet>
  <title>
    Eco-Friendly Water Park Solutions in – Delhi, Noida, Gurugram, India, Nepal, Bhutan, Qatar, UAE, Oman
  </title>
  <meta
    name="description"
    content="Leading provider of sustainable and eco-friendly water park solutions across India, Nepal, Bhutan, Qatar, UAE, and Oman. Specializing in design, construction, water filtration, and recycling systems for commercial water parks."
  />
  <meta
    name="keywords"
    content="Water Park Equipment India, Eco-Friendly Water Parks Nepal, Water Park Construction Bhutan, Sustainable Water Parks Qatar, Water Recycling UAE, Water Filtration Oman, Water Park Manufacturer India, Outdoor Water Parks South Asia"
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://clear-ion.com/water-ammusement-parks/" />
</Helmet>



    <ParkBanner/>
      <div className="min-h-screen flex flex-col justify-between bg-white">

      {/* Section 1: Overview */}
<section className="py-16 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto grid grid-cols-1 gap-16">
    <div className="grid md:grid-cols-2 gap-10 items-center">

      {/* Text Section */}
      <div className="text-gray-700 text-base leading-relaxed text-justify md:text-left">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-blue-400 mb-2">Water Park Filtration & Treatment Solutions</h2>
          <div className="w-48 h-1 bg-blue-400 mx-auto rounded"></div>
        </div>

        <p>
          Our advanced <strong>Water Park Treatment Plants</strong> deliver clean, safe, and hygienic water for <strong>amusement parks</strong> across <strong>India, Noida, Delhi, Gurugram, Nepal, Bhutan, and Oman</strong>.
        </p>

        <p className="mt-4">
          <strong>Filtration & Disinfection:</strong> Multi-layer filters, UV sterilization, and ozone systems ensure crystal-clear water.
        </p>

        <p className="mt-4">
          <strong>Recycling Efficiency:</strong> Save up to 70% water with our eco-smart systems built for hot regions like <strong>Delhi, Noida, and Oman</strong>.
        </p>

        <p className="mt-4">
          Recognized among the <strong>best water park plant manufacturers in South Asia</strong>, trusted across <strong>India, Nepal, Oman, and Bhutan</strong>.
        </p>

        <p className="mt-4">
          Ideal for <strong>resorts, hotels, and public water parks</strong>, our low-maintenance systems cut costs and boost guest experience.
        </p>
      </div>
      <img
        src={PoolImage}
        alt="Water Park Filtration System in India, Delhi, Noida, Bhutan, Nepal, Oman, Gurugram"
        className="w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[450px] object-cover rounded-xl shadow-lg"
      />
    </div>
  </div>
</section>

 
<section className="py-10 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="order-2 lg:order-1">
        <img
          src={ROImage1} 
          alt="Water Park Filtration and Water Recycling System in India, Nepal, Bhutan, Qatar"
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>
      <div className="order-1 lg:order-2">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-blue-400 mb-2">
            Why Choose Our Water Treatment for Water Parks?
          </h2>
          <div className="w-48 h-1 bg-blue-400 mx-auto rounded"></div>
        </div>

        <div className="space-y-6">
          <Feature
            Icon={OpacityIcon}
            title="Crystal-Clear Water Quality"
            description="Eliminates dirt, microbes, and chemicals to ensure safe and sparkling clean water for visitors."
          />
          <Feature
            Icon={LocalDrinkIcon}
            title="Safe & Hygienic Recreation"
            description="Maintains optimal chlorine and pH levels for safe and enjoyable experiences in pools and rides."
          />
          <Feature
            Icon={PlumbingIcon}
            title="High-Efficiency Filtration"
            description="Advanced multi-layer filtration systems designed for large-scale water park operations."
          />
          <Feature
            Icon={ForestIcon}
            title="Eco-Friendly Water Recycling"
            description="Reduces water waste and conserves natural resources through smart reuse technologies."
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

export default Park;