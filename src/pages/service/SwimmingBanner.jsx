import React, { useEffect, useState } from "react";
import mobileBanner from '../../assets/swim.jpg';
import desktopBanner from "../../assets/swim.jpg";

const SwimmingBanner = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bannerImage = isMobile ? mobileBanner : desktopBanner;

  return (
    <div
      className={`relative w-full overflow-hidden ${
        isMobile ? "h-[400px]" : "min-h-screen"
      }`}
    >
      {/* Background Image */}
      <img
        src={bannerImage}
        alt="Contact Banner"
        className={`absolute top-0 left-0 object-cover object-center w-full ${
          isMobile ? "h-full" : "h-full"
        }`}
      />

      {/* Overlay Content */}
     <div className="absolute inset-0 bg-black/50 z-10 flex flex-col items-center justify-center text-white text-center px-4 py-10">
  <h1 className={`font-bold mb-2 ${isMobile ? "text-4xl" : "text-7xl"}`}>
  Swimming Pool Water Treatment
  </h1>
  <p
    className={`${
      isMobile ? "text-sm max-w-sm" : "text-lg max-w-md"
    } mb-5`}
  >
Advanced automated systems for crystal clear, safe, and healthy swimming pool water


  </p>
</div>

    </div>
  );
};

export default SwimmingBanner;