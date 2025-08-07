import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Solutions from '../pages/Solutions';
import HomeService from './HomeService';
import TrustedCompanies from './TrustedCompanies';
import CertificatesCarousel from './CertificatesCarousel';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Clear Ion Experts (P) Ltd | Best Water Treatment in India, Delhi, Noida & all over the world</title>
        <meta name="description" content="Explore our trusted solutions, services, and certifications. See how we help businesses grow with innovative solutions." />
        <meta name="keywords" content="solutions, services, IT, business, certificates, carousel" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Home | Your Company Name" />
        <meta property="og:description" content="Explore our trusted solutions and services to elevate your business." />
      </Helmet>

      <Hero />
      <TrustedCompanies />
      <HomeService />
      <Solutions />
      <CertificatesCarousel />
    </div>
  );
};

export default Home;

