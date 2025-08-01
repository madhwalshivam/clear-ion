import React from 'react';
import { Helmet } from "react-helmet-async";
import HomeService from '../HomeService';
import PoolImage from '../../assets/s1.jpg';
import ROImage1 from '../../assets/s2.jpg';
import OpacityIcon from '@mui/icons-material/Opacity';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import ForestIcon from '@mui/icons-material/Forest';
import SewageBanner from './SewageBanner';

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

const Sewage = () => {
  return (
    <div>
        <Helmet>
  <title>Best Sewage Treatment Plant Manufacturer in South Asia – India, Nepal, Bhutan, Bangladesh, Sri Lanka,Dehradun,Delhi,Kolkata</title>
  <meta
    name="description"
    content="Discover efficient and eco-friendly Sewage Treatment Plants (STPs) by Clear Ion for residential, commercial, and industrial wastewater management."
  />
  <meta
    name="keywords"
    content="Sewage Treatment Plant, STP, Wastewater Treatment, Industrial STP, Eco-friendly Wastewater Solutions, Effluent Treatment, Water Recycling"
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://clear-ion.com/sewage-treatment-plant/" />
</Helmet>


     <SewageBanner/>
      <div className="min-h-screen flex flex-col justify-between bg-white">

       {/* Section 1: Overview */}
<section className="py-16 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto grid grid-cols-1 gap-16">
    <div className="grid md:grid-cols-2 gap-10 items-center">

      {/* Text Section */}
      <div className="text-gray-700 text-base leading-relaxed text-justify md:text-left">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-blue-400 mb-2">Sewage Treatment Solutions</h2>
          <div className="w-48 h-1 bg-blue-400 mx-auto rounded"></div>
        </div>

        <p>
          Our cutting-edge <strong>Sewage Treatment Plants (STPs)</strong> are engineered for efficient wastewater management across residential, commercial, and industrial sectors. We deliver top-quality STP solutions in <strong>India, Delhi, Noida, Gurgaon, Bhutan, Nepal, Bangladesh, and Sri Lanka</strong> that ensure environmental compliance and water reuse.
        </p>

        <p className="mt-4">
          <strong>Primary Treatment:</strong> Removal of large solids and suspended particles using advanced grit chambers and sedimentation tanks.
        </p>

        <p className="mt-4">
          <strong>Secondary Treatment:</strong> Biological treatment through activated sludge and MBBR processes to remove organic pollutants.
        </p>

        <p className="mt-4">
          <strong>Tertiary Treatment:</strong> Final polishing using sand filters, UV disinfection, and chlorination to ensure treated water meets discharge norms.
        </p>

        <p className="mt-4">
          Whether you’re in <strong>Delhi NCR, Noida, or industrial zones of Bangladesh</strong>, our eco-friendly and cost-effective sewage systems are tailored to meet your regional and regulatory requirements.
        </p>

        <p className="mt-4">
          We are recognized among the <strong>Best Sewage Treatment Plant Manufacturers</strong> in the region, trusted by clients in <strong>India, Bhutan, Nepal, and Sri Lanka</strong> for our sustainable and reliable technology.
        </p>
      </div>

      {/* Image Section */}
      <img
        src={PoolImage}
        alt="Sewage Treatment Plant in India, Delhi, Noida, Nepal, Bhutan, Oman, Qatar, Bahrain, Nigeria, Saudi Arabia and Other Countries"
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
          alt="Reverse Osmosis and Sewage Treatment Plant Solutions in India, Nepal, Bhutan, Qatar"
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>

      {/* Text Second on Large Screens */}
      <div className="order-1 lg:order-2">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-blue-400 mb-2">Why Choose Sewage Water Treatment ?</h2>
          <div className="w-48 h-1 bg-blue-400 mx-auto rounded"></div>
        </div>

        <div className="space-y-6">
          <Feature
            Icon={OpacityIcon}
            title="Pure & Treated Water"
            description="Removes dissolved salts, sewage contaminants, and harmful chemicals effectively."
          />
          <Feature
            Icon={LocalDrinkIcon}
            title="Safe & Reusable Output"
            description="Delivers high-quality water safe for discharge or reuse in sewage treatment processes."
          />
          <Feature
            Icon={PlumbingIcon}
            title="STP System Friendly"
            description="Easily integrates with Sewage Treatment Plants and greywater systems."
          />
          <Feature
            Icon={ForestIcon}
            title="Eco-Conscious Treatment"
            description="Supports sustainable sewage and water recycling with low energy consumption."
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

export default Sewage;