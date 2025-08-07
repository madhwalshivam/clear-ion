import React from 'react';
import { Helmet } from "react-helmet-async";
import HomeService from '../HomeService';
import PoolImage from '../../assets/r1.jpg';
import ROImage1 from '../../assets/r2.jpg';
import OpacityIcon from '@mui/icons-material/Opacity';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import ForestIcon from '@mui/icons-material/Forest';
import OsmosisBanner from './OsmosisBanner';

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

const Osmosis = () => {
  return (
    <div>
        <Helmet>
  <title>Best Reverse Osmosis Water Purifiers in Delhi & Faridabad | Clear Ion</title>
  <meta
    name="description"
    content="Explore our advanced Reverse Osmosis (RO) water treatment systems designed for high efficiency, purity, and performance across residential, commercial, and industrial applications."
  />
  <meta
    name="keywords"
    content="Reverse Osmosis, RO Water Treatment, Water Purification, Industrial RO System, Clean Water Solutions, RO Filtration, TDS Removal"
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://clear-ion.com/reverse-osmosis/" />
</Helmet>

     <OsmosisBanner/>
      <div className="min-h-screen flex flex-col justify-between bg-white">

        {/* Section 1: Overview */}
     <section className="py-16 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto grid grid-cols-1 gap-16">
    <div className="grid md:grid-cols-2 gap-10 items-center">

      {/* Text Section */}
      <div className="text-gray-700 text-base leading-relaxed text-justify md:text-left">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-blue-400 mb-2">Reverse Osmosis Technologies</h2>
          <div className="w-48 h-1 bg-blue-400 mx-auto rounded"></div>
        </div>

         <p>
  At <strong>Pure World</strong>, our <strong>Reverse Osmosis (RO) technologies</strong> deliver high-performance water purification solutions for homes, commercial setups, and industries in major cities like <strong>Delhi</strong>, <strong>Faridabad</strong>, <strong>Gurgaon</strong>, <strong>Noida</strong>, and <strong>Ghaziabad</strong>. Our systems are engineered to remove dissolved salts, heavy metals, and harmful contaminants, ensuring clean and safe drinking water for every purpose.
</p>

<p className="mt-4">
  <strong>Pre-Filtration:</strong> Effectively removes sediments, dirt, and visible impurities before the RO stage begins.
</p>

<p className="mt-4">
  <strong>RO Membranes:</strong> Eliminate microscopic impurities and dissolved solids, delivering ultra-pure water in both domestic and industrial use cases.
</p>

<p className="mt-4">
  <strong>Post Carbon Filter:</strong> Enhances water taste by removing any lingering odors, chlorine, or chemicals post-filtration.
</p>

<p className="mt-4">
  <strong>UV Sterilizer:</strong> Provides added safety by eliminating bacteria and viruses—ideal for urban households and industries in areas like <strong>Delhi NCR</strong> and <strong>Faridabad</strong>.
</p>

<p className="mt-4">
  <strong>Storage Tank:</strong> Hygienic and durable storage for purified water, suitable for high-demand residential and commercial environments.
</p>

<p className="mt-4">
  Whether you’re located in <strong>South Delhi</strong>, <strong>Dwarka</strong>, <strong>Noida Sector 62</strong>, or <strong>Faridabad Sector 15</strong>, <strong>Pure World</strong> is known for delivering the <strong>best RO services</strong> and trusted purification systems tailored to your needs.
</p>

      </div>

      {/* Image Section */}
      <img
        src={PoolImage}
        alt="Reverse Osmosis System"
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
          alt="Reverse Osmosis Water Treatment"
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>

      {/* Text Second on Large Screens */}
      <div className="order-1 lg:order-2">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-blue-400 mb-2">Why Choose Reverse Osmosis?</h2>
          <div className="w-48 h-1 bg-blue-400 mx-auto rounded"></div>
        </div>

        <div className="space-y-6">
          <Feature
            Icon={OpacityIcon}
            title="Pure Water"
            description="Removes dissolved salts, chemicals, and contaminants efficiently."
          />
          <Feature
            Icon={LocalDrinkIcon}
            title="Safe Drinking"
            description="Delivers healthy, great-tasting water for homes and businesses."
          />
          <Feature
            Icon={PlumbingIcon}
            title="Easy Integration"
            description="Seamlessly fits into existing water systems with low maintenance."
          />
          <Feature
            Icon={ForestIcon}
            title="Eco-Conscious"
            description="Supports sustainability with reduced water and energy waste."
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

export default Osmosis;