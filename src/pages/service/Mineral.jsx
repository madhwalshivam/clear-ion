import React from 'react';
import { Helmet } from "react-helmet-async";
import HomeService from '../HomeService';
import PoolImage from '../../assets/m3.jpg';
import ROImage1 from '../../assets/min.jpg';
import OpacityIcon from '@mui/icons-material/Opacity';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import ForestIcon from '@mui/icons-material/Forest';
import MineralBanner from './MineralBanner';

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

const Mineral = () => {
  return (
    <div>
    <Helmet>
  <title>
    Best Mineral Water Plant Manufacturer – India, Delhi,Noida, Nepal, Bhutan, Qatar, UAE, Oman
  </title>
  <meta
    name="description"
    content="Top-rated Mineral Water Plant Manufacturer offering turnkey bottling, purification, and packaging solutions across India, Nepal, Bhutan, Qatar, UAE, and Oman. Trusted for industrial, commercial, and small-scale setups."
  />
  <meta
    name="keywords"
    content="Mineral Water Plant India, Bottling Plant Nepal, Water Purification Bhutan, Turnkey Water Plant Qatar, Industrial RO Systems UAE, Mineral Water Packaging Oman, Mineral Water Plant Manufacturer South Asia"
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://clear-ion.com/mineral-water-plants/" />
</Helmet>




   <MineralBanner/>
      <div className="min-h-screen flex flex-col justify-between bg-white">

  {/* Section 1: Overview */}
<section className="py-16 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto grid grid-cols-1 gap-16">
    <div className="grid md:grid-cols-2 gap-10 items-center">

      {/* Text Section */}
      <div className="text-gray-700 text-base leading-relaxed text-justify md:text-left">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-blue-400 mb-2">End-to-End Mineral Water Plant Services</h2>
          <div className="w-48 h-1 bg-blue-400 mx-auto rounded"></div>
        </div>

        <p>
          We provide state-of-the-art <strong>Mineral Water Plant installations</strong> ensuring safe, hygienic, and BIS-compliant drinking water across <strong>India, Delhi, Noida, Gurugram, Nepal, Bhutan, and Oman</strong>.
        </p>

        <p className="mt-4">
          <strong>RO + UV + Ozonation:</strong> Our multi-stage purification system delivers premium quality mineral water suitable for bottling and commercial supply.
        </p>

        <p className="mt-4">
          <strong>Custom Design:</strong> Tailored plants for industrial units, hospitality businesses, government projects, and startups — with region-specific configurations for <strong>Delhi, Noida Sector 1 to 150, and Gurugram</strong>.
        </p>

        <p className="mt-4">
          <strong>Export Quality Plants:</strong> Our systems are trusted in <strong>Nepal, Bhutan, and Oman</strong> for their efficiency, long life, and minimal maintenance needs.
        </p>

        <p className="mt-4">
          Recognized as one of the <strong>leading mineral water plant manufacturers in South Asia</strong>, delivering turnkey solutions including bottling, labeling, and packaging units.
        </p>
      </div>

      {/* Image Section */}
      <img
        src={PoolImage}
        alt="Mineral Water Plant in Noida"
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
          alt="Mineral Water Plant Solutions(MWP) in Delhi"
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="order-1 lg:order-2">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-blue-400 mb-2">
            Why Mineral Water Plant Solutions?
          </h2>
          <div className="w-48 h-1 bg-blue-400 mx-auto rounded"></div>
        </div>

        <div className="space-y-6">
          <Feature
            Icon={OpacityIcon}
            title="High Purity Drinking Water"
            description="Removes contaminants, heavy metals, and pathogens to produce pure mineral-rich water that meets BIS and WHO standards."
          />
          <Feature
            Icon={LocalDrinkIcon}
            title="Fully Automatic RO System"
            description="Our plants are equipped with automatic RO units, pressure pumps, and UV filtration ensuring reliable 24x7 operation."
          />
          <Feature
            Icon={PlumbingIcon}
            title="Industrial & Commercial Models"
            description="Customized capacity from 500 LPH to 10,000+ LPH for hotels, bottling units, factories, hospitals, and institutions."
          />
          <Feature
            Icon={ForestIcon}
            title="Eco-Friendly & Low Waste"
            description="Water recovery rates up to 70–80% reduce wastewater discharge and save energy with green-certified components."
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

export default Mineral;