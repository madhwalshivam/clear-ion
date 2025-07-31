import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ContactImg from "../../assets/contact.png";
import Banner from "./Banner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Thank you! We'll get in touch soon.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
    <Banner/>
    
    <div className="min-h-screen pt-10 bg-gray-50 py-10 px-4 md:px-20">
      <Helmet>
        <title>Contact Us | Clear Ion Experts Pvt Ltd</title>
        <meta
          name="description"
          content="Get in touch with Clear Ion Experts for water and wastewater treatment services. Contact details, office location, and contact form."
        />
        <meta
          name="keywords"
          content="Contact Clear Ion, Clear Ion Experts, Water Treatment Contact, Wastewater Service Inquiry"
        />
        <link rel="canonical" href="https://clear-ion.com/contact-us/" />
        <meta property="og:title" content="Contact Clear Ion Experts Pvt Ltd" />
        <meta
          property="og:description"
          content="Reach out to Clear Ion Experts Pvt Ltd for all water and wastewater treatment project inquiries."
        />
        <meta
          property="og:url"
          content="https://clear-ion.com/contact-us/"
        />
        <meta
          property="og:image"
          content="https://clear-ion.com/contact-us/"
        />
      </Helmet>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex">
          <img
            src={ContactImg}
            alt="Clear Ion office contact"
            className="w-full h-full max-h-[500px] object-cover border"
            loading="lazy"
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg border border-gray-300"
        >
          {/* Form Fields */}
          {["name", "phone", "email", "message"].map((field) => (
            <div className="mb-4" key={field}>
              <label className="block mb-1 font-semibold text-gray-700 capitalize">
                {field === "message" ? "Message" : field}
              </label>
              {field === "message" ? (
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Your message..."
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                  required
                />
              ) : (
                <input
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                  placeholder={`Enter your ${field}`}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400"
                  required
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-blue-400 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Contact Info Boxes */}
      <div className="mt-12 grid md:grid-cols-3 gap-6 bg-white p-6 rounded-lg shadow-md border border-blue-400">
        <div className="flex items-start space-x-3">
          <LocationOnIcon className="text-blue-400 text-3xl" />
          <p className="text-blue-500 font-medium text-base">
            Plot No. 28, Sector-24, Faridabad (Haryana), India
          </p>
        </div>
        <div className="flex items-start space-x-3">
          <PhoneIcon className="text-blue-400 text-2xl mt-1" />
          <p className="text-blue-500 font-medium text-base">
            +91-8447884530, +91-9811323029
          </p>
        </div>
        <div className="flex items-start space-x-3">
          <EmailIcon className="text-blue-400 text-2xl mt-1" />
          <p className="text-blue-500 font-medium text-base">
            clearions28@gmail.com <br />
            clearions24@gmail.com
          </p>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-16">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-blue-400 mb-2">Our Location</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto rounded"></div>
        </div>

        <p className="text-center text-gray-600 mb-6">
          Clear Ion Experts Private Limited, Plot No.-28, Mujesar Village, Sector 24, Faridabad, Haryana 121005
        </p>
        <div className="w-full h-[450px] shadow-lg rounded overflow-hidden">
          <iframe
            title="Clear Ion Experts Pvt Ltd Map"
            src="https://www.google.com/maps?hl=en&q=Clear+Ion+Experts+Private+Limited,+Plot+No.-28,+Mujesar+Village,+Sector+24,+Faridabad,+Haryana+121005&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
