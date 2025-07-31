import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      
      {isMobile ? (
        <div className="relative w-full h-[550px] overflow-hidden">
          {/* Mobile Video */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover object-center"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video/mobile-banner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Mobile Overlay Text */}
          <div className="absolute inset-0 bg-black/40 z-10 flex flex-col items-center justify-center text-white text-center px-4">
            <h1 className="text-4xl font-bold mb-2">Welcome To</h1>
            <h2 className="text-xl font-semibold mb-3">
              Clear Ion Experts PVT LTD
            </h2>
            <p className="text-sm max-w-sm mb-5">
              Your trusted partner in advanced water purification and sustainable solutions.
            </p>
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded transition duration-300 text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      ) : (
        // ===== DESKTOP VIEW =====
        <div className="relative w-full h-[100dvh] overflow-hidden">
          {/* Desktop Video */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover object-center"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/video/banner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Desktop Overlay Text */}
          <div className="absolute inset-0 bg-black/40 z-10 flex flex-col items-center justify-center text-white text-center px-4">
            <h1 className="text-7xl font-extrabold mb-2">Welcome To</h1>
            <h2 className="text-3xl font-semibold mb-3">
              Clear Ion Experts PVT LTD
            </h2>
            <p className="text-lg max-w-md mb-6">
              Your trusted partner in advanced water purification and sustainable solutions.
            </p>
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition duration-300 text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
