import React from 'react';
import { Helmet } from "react-helmet-async";
import HomeService from '../HomeService';
import PoolImage from '../../assets/was1.jpg';
import ROImage1 from '../../assets/was2.jpg';
import OpacityIcon from '@mui/icons-material/Opacity';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import ForestIcon from '@mui/icons-material/Forest';
import WasteBanner from './WasteBanner';

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

const Waste = () => {
  return (
    <div>
     <Helmet>
  <title>
    Waste Water Treatment Plant – ETP, STP, WWTP Solutions in Delhi, Noida, India, Nepal, Bhutan, Oman, Qatar, UAE
  </title>
  <meta
    name="description"
    content="Clear Ion Experts Pvt. Ltd. offers eco-efficient Waste Water Treatment Plant (WWTP), ETP, and STP systems in Delhi, Noida, India, Nepal, Bhutan, Qatar, Oman, and UAE. Specialized in industrial & commercial water recycling, sewage treatment, and ZLD systems."
  />
  <meta
    name="keywords"
    content="WWTP Delhi, ETP Plant Noida, STP System India, Wastewater Recycling Nepal, Sewage Treatment Plant Bhutan, Effluent Treatment Oman, ZLD System Qatar, Industrial Water Treatment UAE, Clear Ion Experts Pvt. Ltd."
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://clear-ion.com/waste-water-treatment-plants/" />
</Helmet>



    <WasteBanner/>
      <div className="min-h-screen flex flex-col justify-between bg-white">

    {/* Section 1: Overview */}
<section className="py-16 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto grid grid-cols-1 gap-16">
    <div className="grid md:grid-cols-2 gap-10 items-center">

      {/* Text Section */}
      <div className="text-gray-700 text-base leading-relaxed text-justify md:text-left">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-blue-400 mb-2">Waste Water Treatment Solution</h2>
          <div className="w-48 h-1 bg-blue-400 mx-auto rounded"></div>
        </div>

        <p>
          We provide advanced <strong>Waste Water Treatment Plants (WWTP)</strong>, <strong>Effluent Treatment Plants (ETP)</strong>, and <strong>Sewage Treatment Plants (STP)</strong> designed to meet environmental compliance across <strong>India, Noida, Delhi, Gurugram, Kolkata, Chennai, Faridabad, Nepal, Bhutan, Bangladesh, and Oman</strong>.
        </p>

        <p className="mt-4">
          <strong>Efficient Filtration & Disinfection:</strong> Our modular systems use MBBR, MBR, and activated sludge processes combined with UV and ozone sterilization to ensure clean and reusable water.
        </p>

        <p className="mt-4">
          <strong>Zero-Liquid Discharge (ZLD):</strong> Achieve maximum water recovery and sustainability for industries, municipalities, hospitals, and commercial complexes in <strong>Delhi NCR, Chennai, Kolkata, and Noida</strong>.
        </p>

        <p className="mt-4">
          Trusted by clients across <strong>India, Nepal, Oman, Bhutan, Faridabad, and Bangladesh</strong>, we are among the top WWTP and ETP plant manufacturers in South Asia.
        </p>

        <p className="mt-4">
          Our systems are designed for long life, minimal maintenance, and maximum energy efficiency—ideal for large-scale residential societies, hotels, industrial plants, and townships.
        </p>
      </div>

      {/* Image Section */}
      <img
        src={PoolImage}
        alt=" Waste Water treatment plant system(WWTP) in Noida"
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
         alt=" Waste Water treatment plant system(WWTP) in Delhi"
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>
      <div className="order-1 lg:order-2">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-blue-400 mb-2">
            Why Choose Our Wastewater Treatment Solutions?
          </h2>
          <div className="w-48 h-1 bg-blue-400 mx-auto rounded"></div>
        </div>

        <div className="space-y-6">
          <Feature
            Icon={OpacityIcon}
            title="Advanced Effluent Treatment (ETP)"
            description="Customized ETP systems for industrial wastewater treatment across Noida, Gurugram, Faridabad, and Nepal."
          />
          <Feature
            Icon={LocalDrinkIcon}
            title="Robust Sewage Treatment (STP)"
            description="High-performance STP setups ensuring eco-compliance and water reuse in cities like Delhi, Bhutan, and Oman."
          />
          <Feature
            Icon={PlumbingIcon}
            title="Zero Liquid Discharge (ZLD)"
            description="Complete water recovery for industries using cutting-edge ZLD processes in Greater Noida and UAE."
          />
          <Feature
            Icon={ForestIcon}
            title="Eco-Friendly Wastewater Recycling"
            description="Sustainable water recycling systems reducing waste in Ghaziabad, Jaipur, Muscat, and beyond."
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

export default Waste;