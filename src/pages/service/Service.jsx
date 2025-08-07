import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import img1 from "../../assets/swim.jpg";
import img2 from "../../assets/air.jpg";
import img3 from "../../assets/ro.jpg";
import img4 from "../../assets/sew.jpg";
import img5 from "../../assets/waterpark.jpg";
import img6 from "../../assets/min.jpg";
import img7 from "../../assets/waste.jpg";
import img8 from "../../assets/water.jpg";
import ServiceBanner from "./ServiceBanner";
import TrustedCompanies from "../TrustedCompanies";

const services = [
  {
    image: img1,
    title: "Swimming Pool Water Treatment Plant",
    desc: "We offer advanced pool water treatment systems designed for safety, clarity, and chemical balance.",
    link: "/swimming-pool-water-treatment-plant/",
  },
  {
    image: img2,
    title: "Air Pollution Control Systems",
    desc: "Our industrial air filtration systems help reduce harmful emissions using innovative scrubbers and filters.",
    link: "/air-pollution-control-systems/",
  },
  {
    image: img3,
    title: "Reverse Osmosis",
    desc: "Efficient RO plants built for homes, businesses, and factories to ensure high-purity water.",
    link: "/reverse-osmosis/",
  },
  {
    image: img4,
    title: "Sewage Treatment Plant",
    desc: "Transform wastewater into reusable water with biological and chemical treatment solutions.",
    link: "/sewage-treatment-plant/",
  },
  {
    image: img5,
    title: "Water Parks",
    desc: "Filtration and chlorination systems for high-traffic water parks with top-tier safety and clarity.",
    link: "/water-ammusement-parks/",
  },
  {
    image: img6,
    title: "Mineral Water Plants",
    desc: "Automated systems for bottling high-quality mineral water with purification and packaging.",
    link: "/mineral-water-plants/",
  },
  {
    image: img7,
    title: "Waste Water Treatment Plants",
    desc: "Custom industrial wastewater treatment plants to recycle and reuse discharge efficiently.",
    link: "/waste-water-treatment-plants/",
  },
  {
    image: img8,
    title: "Water Treatment Plants",
    desc: "Municipal and industrial plants for water purification through UV, ozone, and chemical disinfection.",
    link: "/water-treatment-plants/",
  },
];

export default function ServicesPage() {
  return (
    <div>
        <ServiceBanner/>
    <>
      <Helmet>
        <title>Our Services - Clear Ion Experts</title>
        <meta
          name="description"
          content="Explore our range of water and air treatment services including RO Plants, Sewage Treatment, Wastewater Recycling, and more."
        />
        <meta
          name="keywords"
          content="Water Treatment, RO Plants, Sewage, Wastewater, Air Pollution Control, Mineral Water, Swimming Pool Treatment"
        />
        <link rel="canonical" href='https://clear-ion.com/services/'/>
      </Helmet>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-500 mb-2">Solutions We Provide</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded"></div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 flex flex-col justify-between"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                  </div>
                  <Link
                    to={service.link}
                    className="text-blue-600 text-sm font-medium hover:underline mt-auto"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 px-6 bg-white text-gray-800">
  <div className="max-w-6xl mx-auto space-y-10">
     <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-600 mb-2"> Clear-Ion: Purifying Water & Air Across Borders</h2>
            <div className="w-64 h-1 bg-blue-700 mx-auto rounded"></div>
          </div>

    {/* Water Treatment Section */}
    <div>
      <h3 className="text-2xl font-semibold mb-3">Water Treatment Solutions That Make a Difference</h3>
      <p className="text-lg text-justify leading-relaxed">
        In countries like India and Bangladesh, where groundwater is increasingly polluted, our Water Treatment Plants offer a dependable and affordable way to ensure safe drinking water. From pressure sand filters to softening systems, we offer complete WTP solutions for domestic, commercial, and industrial use.
      </p>
      <p className="text-lg text-justify leading-relaxed mt-2">
        In the hilly terrains of Nepal and Bhutan, our compact and energy-efficient STP plants and RO systems are the perfect answer to limited space and power challenges.
      </p>
    </div>

    {/* Sewage & Effluent Management */}
    <div>
      <h3 className="text-2xl font-semibold mb-3">Sewage & Effluent Management – Recycle. Reuse. Respect.</h3>
      <p className="text-lg text-justify leading-relaxed">
        Our Sewage Treatment Plants (STP) and Effluent Treatment Plants (ETP) are helping hundreds of clients in India, Nepal, and Bangladesh treat and reuse wastewater, reducing environmental burden and saving costs.
      </p>
      <p className="text-lg text-justify leading-relaxed mt-2">
        Whether it's a residential society in Gurgaon, a hospital in Kathmandu, or a food factory in Dhaka, we customize the technology — MBBR, SBR, MBR, FAB — to match your exact needs.
      </p>
    </div>

    {/* Air Pollution Control */}
    <div>
      <h3 className="text-2xl font-semibold mb-3">Clean Air for a Clean Tomorrow</h3>
      <p className="text-lg text-justify leading-relaxed">
        We understand the growing need for air purification, especially in industrial sectors. Our Air Pollution Control Systems, including scrubbers, bag filters, and dust collectors, are now in demand in South Africa, where industries are adopting more eco-friendly operations. We ensure your emissions are under control and your compliance is guaranteed.
      </p>
    </div>

    {/* Swimming Pool & Water Park */}
    <div>
      <h3 className="text-2xl font-semibold mb-3">Swimming Pool Filtration & Water Park Systems</h3>
      <p className="text-lg text-justify leading-relaxed">
        Whether it’s a luxury resort in Goa or a public water park in Bhutan, our swimming pool water treatment systems ensure hygiene, safety, and crystal-clear water. We provide automated filtration, dosing, and chlorination systems — because water fun should never be unsafe.
      </p>
    </div>

    {/* Why Clear-Ion */}
    <div>
      <h3 className="text-2xl font-semibold mb-3">Why Clear-Ion?</h3>
      <ul className="list-disc ml-6 space-y-1 text-lg leading-relaxed text-justify">
        <li>30+ Years of Experience in Environmental Solutions</li>
        <li>ISO 9001:2015, CE & D&B Certified</li>
        <li>Over 1000+ Successful Installations Across 5 Countries</li>
        <li>In-House Manufacturing, R&D & Automation</li>
        <li>24x7 Customer Support & Maintenance</li>
      </ul>
      <p className="text-lg text-justify leading-relaxed mt-2">
        We don’t just sell — we consult, customize, and care.
      </p>
    </div>

    {/* Global Presence */}
    <div>
      <h3 className="text-2xl font-semibold mb-3">Expanding Globally – Built in India, Trusted Worldwide</h3>
      <p className="text-lg text-justify leading-relaxed">
        From Delhi to Durban, from Kolkata to Kathmandu, Clear-Ion is making an impact. We believe that every drop matters, and every breath counts. That’s why we are proudly serving the environmental needs of:
      </p>
      <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2 text-lg font-medium text-gray-700">
        <li>1) India</li>
        <li>2)  Nepal</li>
        <li>3) Bhutan</li>
        <li>4) Bangladesh</li>
        <li>5) South Africa</li>
      </ul>
      <p className="text-lg text-justify leading-relaxed mt-2">
        Our mission is to bring global-quality technology with local adaptability.
      </p>
    </div>

  </div>
</section>

      <TrustedCompanies/>
    </>
    </div>
  );
}
