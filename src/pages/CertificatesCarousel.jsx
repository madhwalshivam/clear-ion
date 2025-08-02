import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
  { title: "United-Associates-1-400×516", image: cert1 },
  { title: "komal-400×516", image: cert2 },
  { title: "Superon-400×516", image: cert3 },
  { title: "HSAMB-Completion-Certificate-400×516", image: cert4 },
   { title: "Completion-certificate-Mint-Kolkata-400×516", image: cert5 },
  { title: "Completion-certificate-of-govt-dept_page-0001-scaled", image: cert6 },
  { title: "COMPLETION-CERTIFICATE-OF-GOVT-DEPT_PAGE-0002", image: cert7 },
  { title: "COMPLETION-CERTIFICATE-OF-GOVT-DEPT_PAGE-0003", image: cert8 },
   { title: "COMPLETION-CERTIFICATE-OF-GOVT-DEPT_PAGE-0004", image: cert9 },
  { title: "COMPLETION-CERTIFICATE-OF-GOVT-DEPT_PAGE-0005", image: cert10 },
  { title: "COMPLETION-CERTIFICATE-OF-GOVT-DEPT_PAGE-0006", image: cert11 },
  { title: "COMPLETION-CERTIFICATE-OF-GOVT-DEPT_PAGE-0007", image: cert12 },
   { title: "COMPLETION-CERTIFICATE-OF-GOVT-DEPT_PAGE-0008", image: cert13 },
  { title: "COMPLETION-CERTIFICATE-OF-GOVT-DEPT_PAGE-0009", image: cert14 },
  { title: "COMPLETION-CERTIFICATE-OF-GOVT-DEPT_PAGE-0010", image: cert15 },
  { title: "COMPLETION-CERTIFICATE-OF-GOVT-DEPT_PAGE-0011", image: cert16 },
    { title: "COMPLETION-CERTIFICATE-OF-GOVT-DEPT_PAGE-0012", image: cert17 },
  { title: "COMPLETION-CERTIFICATE-OF-GOVT-DEPT_PAGE-0013", image: cert18 },
  { title: "COMPLETION-CERTIFICATE-OF-GOVT-DEPT_PAGE-0014", image: cert19 },
   { title: "COMPLETION-CERTIFICATE-OF-GOVT-DEPT_PAGE-0015", image: cert20 },
  { title: "COMPLETION-CERTIFICATE-OF-GOVT-DEPT_PAGE-0016", image: cert21 },
  { title: "COMPLETION-CERTIFICATE-OF-GOVT-DEPT_PAGE-0017", image: cert22 },
 
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CertificatesCarousel = () => {
  return (
    <section className="py-10 bg-white">
         <div className="text-center mb-10">
  <h2 className="text-4xl font-bold text-blue-700 mb-2"> OUR PROJECTS & CERTIFICATES</h2>
  <div className="w-64 h-1 bg-blue-700 mx-auto rounded"></div>
</div>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        arrows
        keyBoardControl
        containerClass="carousel-container"
        removeArrowOnDeviceType={[]}
        dotListClass="custom-dot-list-style"
        itemClass="px-4"
      >
        {certificates.map((cert, index) => (
          <div key={index} className="bg-white rounded shadow p-4 text-center">
            <img
              src={cert.image}
              alt={cert.title}
              className="mx-auto h-64 object-contain"
            />
            <p className="mt-2 text-sm text-gray-700">{cert.title}</p>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default CertificatesCarousel;
