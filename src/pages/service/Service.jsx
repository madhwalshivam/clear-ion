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
      <TrustedCompanies/>
    </>
    </div>
  );
}
