import React from "react";
import { Helmet } from "react-helmet"; 

import cert1 from "../assets/c.jpg";
import cert2 from "../assets/c1.jpg";
import cert3 from "../assets/c2.jpg";
import cert4 from "../assets/c3.jpg";
import cert5 from "../assets/c4.jpg";
import cert6 from "../assets/c5.jpg";
import cert7 from "../assets/c6.jpg";
import cert8 from "../assets/c7.jpg";
import cert9 from "../assets/c9.jpg";
import cert10 from "../assets/c10.jpg";
import cert11 from "../assets/c11.jpg";
import cert12 from "../assets/c12.jpg";
import cert13 from "../assets/c13.jpg";
import cert14 from "../assets/c14.jpg";
import cert15 from "../assets/c15.jpg";
import cert16 from "../assets/c16.jpg";
import cert17 from "../assets/c17.jpg";
import cert18 from "../assets/c18.jpg";
import cert19 from "../assets/c19.jpg";
import cert20 from "../assets/c20.jpg";
import cert21 from "../assets/c21.jpg";
import cert22 from "../assets/c8.jpg";

const certificates = [
  { title: "United-Associates-1", image: cert1 },
  { title: "Komal", image: cert2 },
  { title: "Superon", image: cert3 },
  { title: "HSAMB Completion Certificate", image: cert4 },
  { title: "Mint Kolkata Completion Certificate", image: cert5 },
  { title: "Govt Dept Certificate Page 1", image: cert6 },
  { title: "Govt Dept Certificate Page 2", image: cert7 },
  { title: "Govt Dept Certificate Page 3", image: cert8 },
  { title: "Govt Dept Certificate Page 4", image: cert9 },
  { title: "Govt Dept Certificate Page 5", image: cert10 },
  { title: "Govt Dept Certificate Page 6", image: cert11 },
  { title: "Govt Dept Certificate Page 7", image: cert12 },
  { title: "Govt Dept Certificate Page 8", image: cert13 },
  { title: "Govt Dept Certificate Page 9", image: cert14 },
  { title: "Govt Dept Certificate Page 10", image: cert15 },
  { title: "Govt Dept Certificate Page 11", image: cert16 },
  { title: "Govt Dept Certificate Page 12", image: cert17 },
  { title: "Govt Dept Certificate Page 13", image: cert18 },
  { title: "Govt Dept Certificate Page 14", image: cert19 },
  { title: "Govt Dept Certificate Page 15", image: cert20 },
  { title: "Govt Dept Certificate Page 16", image: cert21 },
  { title: "Govt Dept Certificate Page 17", image: cert22 },
];

const CertificatesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 py-10 px-4 md:px-20">
      <Helmet>
        <title>Projects & Certificates | Clear Ion Experts (P) Ltd</title>
        <meta
          name="description"
          content="View our project completion certificates, awards, and recognitions from various organizations and departments."
        />
        <meta
          name="keywords"
          content="Project Certificates, Government Certificates, Completion Certificates, Company Achievements"
        />
        <link
          rel="canonical"
          href="https://clear-ion.com/certificates/"
        />
        {/* Open Graph tags for social preview */}
        <meta property="og:title" content="Our Certificates | Your Company" />
        <meta
          property="og:description"
          content="See our official completion certificates for successful projects with various organizations."
        />
        <meta
          property="og:url"
          content="https://clear-ion.com/certificates/"
        />
        <meta
          property="og:image"
          content="https://clear-ion.com/certificates/"
        />
      </Helmet>

      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-blue-500 mb-2">
          OUR PROJECTS & CERTIFICATES
        </h2>
        <div className="w-64 h-1 bg-blue-400 mx-auto rounded"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow rounded hover:shadow-lg transition"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-64 object-contain mb-2"
              loading="lazy" 
            />
            <p className="text-sm text-gray-700 text-center">{cert.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificatesPage;
