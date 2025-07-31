import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import footerBg from "../assets/footer.png";
import footerBg1 from "../assets/wf.png";

const Footer = () => {
  return (
    <footer className="relative text-gray-200 min-h-[550px] pt-10 md:pt-32 pb-8 px-6 md:px-12 overflow-hidden">
      
      
      <div
        className="block md:hidden absolute inset-0 z-[-1]"
        style={{
          backgroundImage: `url(${footerBg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* 💻 Desktop background image */}
      <div
        className="hidden md:block absolute inset-0 z-[-1]"
        style={{
          backgroundImage: `url(${footerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* About */}
        <div className="lg:col-span-2">
          <h4 className="text-xl font-bold mb-4 text-white border-b-2 border-blue-500 inline-block">
            About Clear Ion Experts (P) Ltd.
          </h4>
          <p className="text-white mb-6">
            Clear Ion Experts (P) Ltd is a manufacturing establishment whose underlying interests are in the field of water and wastewater treatment, sewage and effluent treatment, and air pollution control systems.
          </p>
          <Link
            to="/about"
            className="inline-block border border-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Read More About
          </Link>
        </div>

        {/* Important Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white border-b-2 border-blue-500 inline-block">
            Important Links
          </h4>
          <ul className="space-y-2 text-white">
            <li><Link to="/" className="hover:text-white">› Home</Link></li>
            <li><Link to="/about" className="hover:text-white">› About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">› Contact Us</Link></li>
            <li><Link to="/service" className="hover:text-white">› Service</Link></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white border-b-2 border-blue-500 inline-block">
            Our Services
          </h4>
          <ul className="space-y-2 text-white">
            <li><Link to="/sewage-treatment" className="hover:text-white">› Sewage Treatment Plant</Link></li>
            <li><Link to="/filter-press" className="hover:text-white">› Filter Press / Screw Press</Link></li>
            <li><Link to="/clarifiers" className="hover:text-white">› Clarifiers / Air Pollution Control</Link></li>
            <li><Link to="/oil-skimmers" className="hover:text-white">› Oil Skimmers</Link></li>
            <li><Link to="/water-treatment" className="hover:text-white">› Water Treatment Plants</Link></li>
            <li><Link to="/etp-ro" className="hover:text-white">› ETP / Ultrafilters / RO Plants</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white border-b-2 border-blue-500 inline-block">
            Get in Touch
          </h4>
          <p className="text-white">
            Plot No. 28, Sector-24,<br />
            Faridabad (Haryana), India
          </p>
          <p className="mt-3 text-white font-semibold">
            Phone:<br />
            <a href="tel:+918447884530" className="hover:underline">+91-844-788-4530</a><br />
            <a href="tel:+919811323029" className="hover:underline">+91-981-132-3029</a>
          </p>
          <p className="mt-3 text-white font-semibold">
            Email:<br />
            <a href="mailto:clearions28@gmail.com" className="hover:underline">clearions28@gmail.com</a><br />
            <a href="mailto:info@clear-ion.com" className="hover:underline">info@clear-ion.com</a>
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-gray-800">
            <a
              href="https://www.facebook.com/clearion"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center bg-white rounded-full hover:bg-blue-600 hover:text-white transition duration-300"
            >
              <FacebookIcon fontSize="small" />
            </a>
            <a
              href="https://www.youtube.com/@clearion"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center bg-white rounded-full hover:bg-red-600 hover:text-white transition duration-300"
            >
              <YouTubeIcon fontSize="small" />
            </a>
            <a
              href="https://www.instagram.com/clearionwatertreatment/"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center bg-white rounded-full hover:bg-pink-600 hover:text-white transition duration-300"
            >
              <InstagramIcon fontSize="small" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer Text */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white">
        <p>© 2025 Clear Ion Experts (P) Ltd. All Rights Reserved.</p>
        <p>
          Crafted with <span className="text-white">♥</span> by{" "}
          <Link to="https://websiteseotool.in/" className="text-blue-400 hover:underline">
            Advertising India
          </Link>{" "}
          – Web & Branding Company
        </p>
      </div>
    </footer>
  );
};

export default Footer;
