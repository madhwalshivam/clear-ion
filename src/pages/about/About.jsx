import React from "react";
import { Helmet } from "react-helmet-async";
import About from '../../assets/g35.jpg'
import AboutBanner from "./AboutBanner";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FAQ from "../FAQ";
import TrustedCompanies from "../TrustedCompanies";

const AboutUs = () => {
  return (
    <div>
    <AboutBanner/>
    <div>
      <Helmet>
        <title>About Us | Clear-ion Experts (P) Ltd</title>
        <meta
          name="description"
          content="Clear-ion Experts is a global leader in water, wastewater, and air pollution control systems, delivering top-quality solutions since 1994."
        />
        <meta
          name="keywords"
          content="Clear-ion, Water Treatment, Wastewater Management, Air Pollution Control, ISO Certified, Environmental Solutions, Engineering Services"
        />
        <link rel="canonical" href="https://clear-ion.com/about-us/" />
        <meta property="og:title" content="About Us | Clear-ion Experts" />
        <meta
          property="og:description"
          content="Learn about Clear-ion Experts, a global leader in water, wastewater, and air pollution control systems."
        />
        <meta
          property="og:url"
          content="https://clear-ion.com/about-us/"
        />
      </Helmet>
      <section className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
             <div className="text-center mb-10">
  <h2 className="text-4xl font-bold text-blue-400 mb-2">Introduction</h2>
  <div className="w-48 h-1 bg-blue-400 mx-auto rounded"></div>
</div>
          
            <p className="mb-4 text-lg">
              Clear-ion Experts stands for the highest standards of quality & integrity in the business of Water, Waste Water & Air Pollution Control Systems.
              Since our inception in 1994, our growth has been swift and sustainable, making us one of the leading manufacturers in this domain worldwide.
            </p>
            <p className="mb-4 text-lg">
              Accredited with ISO, CE, and D&B certifications, Clear-ion is proud to be a trusted name across diverse industries.
              Our world-class manufacturing facility in Faridabad, near Delhi, is equipped with cutting-edge technologies and expert teams.
            </p>
          </div>
          <img
            src= {About}
            alt="Clear-ion Manufacturing Unit"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </section>

     <section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-10">
      <h2 className="text-4xl font-bold text-blue-400 mb-2">Our Capabilities</h2>
      <div className="w-48 h-1 bg-blue-400 mx-auto rounded"></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-gray-700">
      <ul className="space-y-3">
        <li className="flex items-start gap-2">
          <CheckCircleIcon className="text-blue-500 mt-1" />
          Quality manufacturing with in-house fabrication
        </li>
        <li className="flex items-start gap-2">
          <CheckCircleIcon className="text-blue-500 mt-1" />
          High-tech and precision equipment
        </li>
        <li className="flex items-start gap-2">
          <CheckCircleIcon className="text-blue-500 mt-1" />
          Turnkey solutions: Design, Erection & Commissioning
        </li>
        <li className="flex items-start gap-2">
          <CheckCircleIcon className="text-blue-500 mt-1" />
          Strong after-sales support
        </li>
        <li className="flex items-start gap-2">
          <CheckCircleIcon className="text-blue-500 mt-1" />
          Skilled, motivated workforce
        </li>
      </ul>
      <ul className="space-y-3">
        <li className="flex items-start gap-2">
          <CheckCircleIcon className="text-blue-500 mt-1" />
          Serves industries: Textiles, Pharma, Food, Hospitality, Steel, etc.
        </li>
        <li className="flex items-start gap-2">
          <CheckCircleIcon className="text-blue-500 mt-1" />
          Trusted by government & global enterprises
        </li>
        <li className="flex items-start gap-2">
          <CheckCircleIcon className="text-blue-500 mt-1" />
          Exporting to 15+ countries worldwide
        </li>
        <li className="flex items-start gap-2">
          <CheckCircleIcon className="text-blue-500 mt-1" />
          Precision engineering for critical systems
        </li>
        <li className="flex items-start gap-2">
          <CheckCircleIcon className="text-blue-500 mt-1" />
          Committed to sustainability & innovation
        </li>
      </ul>
    </div>
  </div>
</section>
<FAQ/>
<TrustedCompanies/>
    </div>
    </div>
  );
};

export default AboutUs;
