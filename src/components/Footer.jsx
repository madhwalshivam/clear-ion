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
      {/* 📱 Mobile Background Image */}
      <div
        className="block md:hidden absolute inset-0 z-[-1]"
        style={{
          backgroundImage: `url(${footerBg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* 💻 Desktop Background Image */}
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
         <h3 className="text-xl font-bold mb-4 text-white border-b-2 border-blue-500 inline-block">
  About Clear Ion Experts (P) Ltd.
</h3>
          <p className="text-white mb-6">
            Clear Ion Experts (P) Ltd is a manufacturing establishment whose underlying interests are in the field of water and wastewater treatment, sewage and effluent treatment, and air pollution control systems.
          </p>
          <Link
            to="/about-us/"
            className="inline-block border border-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Read More About
          </Link>
        </div>

        {/* Important Links */}
        <div>
         <h3 className="text-lg font-semibold mb-4 text-white border-b-2 border-blue-500 inline-block">
  Important Links
</h3>
          <ul className="space-y-2 text-white">
            <li><Link to="/" className="hover:text-white">› Home</Link></li>
            <li><Link to="/about-us/" className="hover:text-white">› About Us</Link></li>
            <li><Link to="/services/" className="hover:text-white">› Services</Link></li>
            <li><Link to="/gallery/" className="hover:text-white">› Gallery</Link></li>
            <li><Link to="/certificates/" className="hover:text-white">› Projects & Certificates</Link></li>
            <li><Link to="/contact-us/" className="hover:text-white">› Contact Us</Link></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
         <h3 className="text-lg font-semibold mb-4 text-white border-b-2 border-blue-500 inline-block">
  Our Services
</h3>
          <ul className="space-y-2 text-white">
            <li><Link to="/sewage-treatment-plant/" className="hover:text-white">› Sewage Treatment Plant</Link></li>
            <li><Link to="/reverse-osmosis/" className="hover:text-white">› Reverse Osmosis</Link></li>
            <li><Link to="/air-pollution-control-systems/" className="hover:text-white">› Air Pollution Control</Link></li>
            <li><Link to="/swimming-pool-water-treatment-plant/" className="hover:text-white">› Swimming Pool Water Treatment</Link></li>
            <li><Link to="/water-ammusement-parks/" className="hover:text-white">› Water Park</Link></li>
            <li><Link to="/mineral-water-plants/" className="hover:text-white">› Mineral Water Plant</Link></li>
            <li><Link to="/waste-water-treatment-plants/" className="hover:text-white">› Waste Water Treatment Plant</Link></li>
            <li><Link to="/water-treatment-plants/" className="hover:text-white">› Water Treatment Plant</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white border-b-2 border-blue-500 inline-block">
  Get in Touch
</h3>
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
    href="https://www.facebook.com/people/Clear-Ion-Experts-Pvt-Ltd/100069134930565/?rdid=1Co9btZQuVO9hlsW&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fe7Zii1YZsJpzUEAU%2F"
    target="_blank"
    rel="noreferrer"
    aria-label="Visit our Facebook page"
    className="w-9 h-9 flex items-center justify-center bg-white rounded-full hover:bg-blue-600 hover:text-white transition duration-300"
  >
    <FacebookIcon fontSize="small" />
  </a>

  <a
    href="https://www.youtube.com/@clearion"
    target="_blank"
    rel="noreferrer"
    aria-label="Visit our YouTube channel"
    className="w-9 h-9 flex items-center justify-center bg-white rounded-full hover:bg-red-600 hover:text-white transition duration-300"
  >
    <YouTubeIcon fontSize="small" />
  </a>

  <a
    href="https://www.instagram.com/clearionwatertreatment/"
    target="_blank"
    rel="noreferrer"
    aria-label="Visit our Instagram profile"
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
          <a
            href="https://websiteseotool.in/"
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Advertising India
          </a>{" "}
          – Web & Branding Company
        </p>
      </div>
    </footer>
  );
};

export default Footer;

