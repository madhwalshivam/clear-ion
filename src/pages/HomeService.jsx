import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Grid, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

import img1 from '../assets/swim.jpg';
import img2 from '../assets/air.jpg';
import img3 from '../assets/ro.jpg';
import img4 from '../assets/sew.jpg';
import img5 from '../assets/waterpark.jpg';
import img6 from '../assets/min.jpg';
import img7 from '../assets/waste.jpg';
import img8 from '../assets/water.jpg';

const services = [
  {
    image: img1,
    title: 'Swimming Pool Water Treatment Plant',
    desc: 'We offer advanced pool water treatment systems designed for safety, clarity, and chemical balance.',
    link: '/swimming-pool-water-treatment-plant/'
  },
  {
    image: img2,
    title: 'Air Pollution Control Systems',
    desc: 'Our industrial air filtration systems help reduce harmful emissions using innovative scrubbers and filters.',
    link: '/air-pollution-control-systems/'
  },
  {
    image: img3,
    title: 'Reverse Osmosis',
    desc: 'Efficient RO plants built for homes, businesses, and factories. These systems remove impurities, ensuring high-purity drinking or process water with minimal waste.',
    link: '/reverse-osmosis/'
  },
  {
    image: img4,
    title: 'Sewage Treatment',
    desc: 'Turn wastewater into reusable clean water with our biological and chemical sewage treatment solutions. Trusted by industries and municipalities alike.',
    link: '/sewage-treatment-plant/'
  },
  {
    image: img5,
    title: 'Water Parks',
    desc: 'Filtration and chlorination systems specially designed for high-traffic water parks. Ensures water quality, user safety, and low maintenance costs.',
    link: '/water-ammusement-parks/'
  },
  {
    image: img6,
    title: 'Mineral Water Plants',
    desc: 'Turn raw water into high-quality bottled mineral water. Our fully automated plants cover purification, bottling, labeling, and packaging.',
    link: '/mineral-water-plants/'
  },
  {
    image: img7,
    title: 'Waste Water Treatment Plants',
    desc: 'Custom wastewater solutions for textile, chemical, food, and other industries. Treat, recycle, and reuse your industrial discharge efficiently.',
    link: '/waste-water-treatment-plants/'
  },
  {
    image: img8,
    title: 'Water Treatment Plants',
    desc: 'Municipal and industrial water treatment plants engineered for safe, reliable supply. Processes include filtration, UV, ozone, and chemical disinfection.',
    link: '/water-treatment-plants/'
  },
];

export default function HomeService() {
  return (
    <div className="py-10 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-blue-700 mb-2">Our Services</h2>
        <div className="w-24 h-1 bg-blue-700 mx-auto rounded"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Grid, Pagination, Autoplay]}
          grid={{ rows: 1 }}
          spaceBetween={30}
          slidesPerView={4}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <Link
                to={service.link}
                className="block bg-white p-4 h-[370px] rounded shadow border border-gray-200 transition-transform duration-300 transform hover:-translate-y-2 fade-up flex flex-col justify-between text-center"
              >
                <div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-40 object-cover rounded mb-3"
                    loading="lazy"
                  />
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
                <div className="mt-4">
                  <span className="text-blue-400 text-sm font-medium hover:underline">
                    Read More →
                  </span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

