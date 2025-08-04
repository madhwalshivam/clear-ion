import React, { useEffect, useState } from "react";
import mobileBanner from '../../assets/waterpark.jpg';
import desktopBanner from "../../assets/waterpark.jpg";

const ParkBanner = () => {
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
        alt="Water treatment system for water park pools and slides in Faridabad, Haryana"
        className={`absolute top-0 left-0 object-cover object-center w-full ${
          isMobile ? "h-full" : "h-full"
        }`}
      />

      {/* Overlay Content */}
     <div className="absolute inset-0 bg-black/50 z-10 flex flex-col items-center justify-center text-white text-center px-4 py-10">
  <h1 className={`font-bold mb-2 ${isMobile ? "text-4xl" : "text-7xl"}`}>
Water Park
  </h1>
  <p
    className={`${
      isMobile ? "text-sm max-w-sm" : "text-lg max-w-md"
    } mb-5`}
  >
    Sustainable water solutions for water parks across India, Nepal, Bhutan & Qatar.


</p>
</div>

    </div>
  );
};

export default ParkBanner;