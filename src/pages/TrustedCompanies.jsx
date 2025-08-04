import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import logo1 from "../assets/client15.png";
import logo2 from "../assets/client1.png";
import logo3 from "../assets/client2.png";
import logo4 from "../assets/client3.png";
import logo5 from "../assets/client4.png";
import logo6 from "../assets/client5.png";
import logo7 from "../assets/client15.png";
import logo8 from "../assets/client6.png";
import logo9 from "../assets/client7.png";
import logo10 from "../assets/client8.jpeg";
import logo11 from "../assets/client9.png";
import logo12 from "../assets/client10.png";
import logo13 from "../assets/client11.png";
import logo14 from "../assets/client12.png";
import logo15 from "../assets/client13.jpg";
import logo16 from "../assets/client14.jpg";


const companies = [
  { src: logo1, alt: "Hindra Logistics" },
  { src: logo2, alt: "Pfizer" }, 
  { src: logo3, alt: "Samsung" },
  { src: logo4, alt: "Surya Clinic" },
  { src: logo5, alt: "Tech Mahindra" },
  { src: logo6, alt: "Tripstring" },
   { src: logo7, alt: "Hindra Logistics" },
  { src: logo8, alt: "Pfizer" },
  { src: logo9, alt: "Samsung" },
  { src: logo10, alt: "Surya Clinic" },
  { src: logo11, alt: "Tech Mahindra" },
  { src: logo12, alt: "Tripstring" },
   { src: logo13, alt: "Hindra Logistics" },
  { src: logo14, alt: "Pfizer" },
  { src: logo15, alt: "Samsung" },
  { src: logo16, alt: "Surya Clinic" },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1200, min: 900 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 900, min: 640 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 2,
  },
};

const TrustedCompanies = () => {
  return (
  <section className="bg-white py-10 px-4 text-center">
  <div className="text-center mb-10">
    <h2 className="text-4xl font-bold text-blue-700 mb-2">Trusted by Leading Companies</h2>
    <div className="w-48 h-1 bg-blue-700 mx-auto rounded"></div>
  </div>

      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={1500}
        keyBoardControl
        showDots={false}
        arrows={false}
        containerClass="carousel-container"
        itemClass="px-2"
      >
        {companies.map((company, idx) => (
          <div
            key={idx}
           
          >
            <img
              src={company.src}
              alt={company.alt}
              className="h-24 mx-auto object-contain"
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default TrustedCompanies;
