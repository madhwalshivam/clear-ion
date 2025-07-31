import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Grid, Pagination, Autoplay } from 'swiper/modules';

import PoolIcon from '@mui/icons-material/Pool';
import WindPowerIcon from '@mui/icons-material/WindPower';
import OpacityIcon from '@mui/icons-material/Opacity';
import RecyclingIcon from '@mui/icons-material/Recycling';
import WaterIcon from '@mui/icons-material/Water';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import SettingsIcon from '@mui/icons-material/Settings';
import PlumbingIcon from '@mui/icons-material/Plumbing';

import './animations.css';

const services = [
  {
    icon: <PoolIcon fontSize="large" color="primary" />,
    title: 'Swimming Pool Water Treatment Plant',
    desc: 'We offer advanced pool water treatment systems designed for safety, clarity, and chemical balance.',
    link: '/services/swimming-pool-treatment'
  },
  {
    icon: <WindPowerIcon fontSize="large" color="primary" />,
    title: 'Air Pollution Control Systems',
    desc: 'Our industrial air filtration systems help reduce harmful emissions using innovative scrubbers and filters.',
    link: '/services/air-pollution-control'
  },
  {
    icon: <OpacityIcon fontSize="large" color="primary" />,
    title: 'Reverse Osmosis',
    desc: 'Efficient RO plants built for homes, businesses, and factories. These systems remove impurities, ensuring high-purity drinking or process water with minimal waste.',
    link: '/services/reverse-osmosis'
  },
  {
    icon: <RecyclingIcon fontSize="large" color="primary" />,
    title: 'Sewage Treatment',
    desc: 'Turn wastewater into reusable clean water with our biological and chemical sewage treatment solutions. Trusted by industries and municipalities alike.',
    link: '/services/sewage-treatment'
  },
  {
    icon: <WaterIcon fontSize="large" color="primary" />,
    title: 'Water Parks',
    desc: 'Filtration and chlorination systems specially designed for high-traffic water parks. Ensures water quality, user safety, and low maintenance costs.',
    link: '/services/water-parks'
  },
  {
    icon: <LocalDrinkIcon fontSize="large" color="primary" />,
    title: 'Mineral Water Plants',
    desc: 'Turn raw water into high-quality bottled mineral water. Our fully automated plants cover purification, bottling, labeling, and packaging.',
    link: '/services/mineral-water-plants'
  },
  {
    icon: <SettingsIcon fontSize="large" color="primary" />,
    title: 'Waste Water Treatment Plants',
    desc: 'Custom wastewater solutions for textile, chemical, food, and other industries. Treat, recycle, and reuse your industrial discharge efficiently.',
    link: '/services/waste-water-treatment'
  },
  {
    icon: <PlumbingIcon fontSize="large" color="primary" />,
    title: 'Water Treatment Plants',
    desc: 'Municipal and industrial water treatment plants engineered for safe, reliable supply. Processes include filtration, UV, ozone, and chemical disinfection.',
    link: '/services/water-treatment'
  },
];

export default function HomeService() {
  return (
    <div className="py-10 bg-gray-50">
     <div className="text-center mb-10">
  <h2 className="text-4xl font-bold text-blue-400 mb-2">Our Services</h2>
  <div className="w-24 h-1 bg-blue-400 mx-auto rounded"></div>
</div>


      <div className="max-w-6xl mx-auto ">
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
              <div className="bg-white p-6 h-[300px] rounded shadow border border-gray-200 transition-transform duration-300 transform hover:-translate-y-2 fade-up flex flex-col justify-between text-center">
                <div>
                  <div className="mb-4 flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
                <div className="mt-4">
                  <a
                    href={service.link}
                    className="text-blue-600 text-sm font-medium hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}


