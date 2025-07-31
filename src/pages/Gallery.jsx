import React from "react";
import { Helmet } from "react-helmet";
import g1 from '../assets/g1.jpeg';
import g2 from '../assets/g2.jpeg';
import g3 from '../assets/g3.jpeg';
import g4 from '../assets/g4.jpeg';
import g5 from '../assets/g5.jpeg';
import g6 from '../assets/g6.jpeg';
import g7 from '../assets/g7.jpeg';
import g8 from '../assets/g8.jpeg';
import g9 from '../assets/g9.jpeg';
import g10 from '../assets/g10.jpeg';
import g11 from '../assets/g11.webp';
import g12 from '../assets/g12.jpeg';
import g13 from '../assets/g13.jpeg';
import g14 from '../assets/g14.jpeg';
import g15 from '../assets/g15.jpeg';
import g16 from '../assets/g16.jpeg';
import g17 from '../assets/g17.jpeg';
import g18 from '../assets/g18.jpeg';
import g19 from '../assets/g19.jpg';
import g20 from '../assets/g20.jpeg';
import g21 from '../assets/g21.jpg';
import g22 from '../assets/g22.jpg';
import g23 from '../assets/g23.jpeg';
import g24 from '../assets/g24.jpeg';
import g25 from '../assets/g25.bmp';
import g26 from '../assets/g26.jpg';
import g27 from '../assets/g27.JPG';
import g28 from '../assets/g28.jpg';
import g29 from '../assets/g29.jpg';
import g30 from '../assets/g30.JPG';
import g31 from '../assets/g31.jpg';
import g32 from '../assets/g32.jpg';
import g33 from '../assets/g33.jpg';
import g34 from '../assets/g34.jpg';
import g35 from '../assets/g35.jpg';
import { motion } from "framer-motion";

const galleryItems = [
  { type: "image", src: g1 },
  { type: "image", src: g2 },
  { type: "image", src: g3 },
  { type: "image", src: g4 },
  { type: "image", src: g5 },
  { type: "image", src: g6 },
  { type: "image", src: g7 },
  { type: "image", src: g8 },
  { type: "image", src: g9 },
  { type: "image", src: g10 },
  { type: "image", src: g11 },
  { type: "image", src: g12 },
  { type: "image", src: g13 },
  { type: "image", src: g14 },
  { type: "image", src: g15 },
  { type: "image", src: g16 },
  { type: "image", src: g17 },
  { type: "image", src: g18 },
  { type: "image", src: g19 },
  { type: "image", src: g20 },
  { type: "image", src: g21 },
  { type: "image", src: g22 },
  { type: "image", src: g23 },
  { type: "image", src: g24 },
  { type: "image", src: g25 },
  { type: "image", src: g26 },
  { type: "image", src: g27 },
  { type: "image", src: g28 },
  { type: "image", src: g29 },
  { type: "image", src: g30 },
  { type: "image", src: g31 },
  { type: "image", src: g32 },
  { type: "image", src: g33 },
  { type: "image", src: g34 },
  { type: "image", src: g35 },
  { type: "video", src: "/video/gallery.mp4" },
];

const Gallery = () => {
  return (
    <div className="px-6 py-20 bg-white">
      <Helmet>
        <title>Gallery - Clear Ion Experts (P) Ltd</title>
        <meta name="description" content="Explore Clear-ion's gallery showcasing industrial setups, filtration plants, and demo videos of our water treatment solutions." />
        <meta name="keywords" content="Water Filtration, Gallery, Clear-ion, Industrial Setup, Water Treatment Plant" />
        <link rel="canonical" href="https://clear-ion.com/gallery/" />
      </Helmet>

      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-blue-400 mb-2">Our Gallery</h2>
        <div className="w-64 h-1 bg-blue-400 mx-auto rounded"></div>
      </div>
       
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {galleryItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
          >
            {item.type === "image" ? (
              <img src={item.src} alt={item.title} className="w-full h-64 object-cover" />
            ) : (
              <video controls className="w-full h-64 object-cover">
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;