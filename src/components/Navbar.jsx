import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/solid';
import logo from '../assets/logo.png';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [servicesOpen, setServicesOpen] = useState(false); 

  const services = [
    { name: 'Swimming Pool Water Treatment', href: '/swimming-pool-water-treatment-plant/' },
    { name: 'Air Pollution Control Systems', href: '/air-pollution-control-systems/' },
    { name: 'Reverse Osmosis', href: '/reverse-osmosis/' },
    { name: 'Sewage Treatment Plant', href: '/sewage-treatment-plant/' },
    { name: 'Water Parks', href: '/water-ammusement-parks/' },
    { name: 'Mineral Water Plants', href: '/mineral-water-plants/' },
    { name: 'Waste Water Treatment Plants', href: '/waste-water-treatment-plants/' },
    { name: 'Water Treatment Plants', href: '/water-treatment-plants/' },
    { name: 'All Services', href: '/services/' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHeader(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 bg-black/20 text-blue-900 shadow-md ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-14 w-auto object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white font-semibold hover:text-blue-400">Home</Link>
          <Link to="/about-us/" className="text-white font-semibold hover:text-blue-400">About</Link>

          {/* Services Dropdown */}
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="inline-flex items-center gap-1 text-white font-semibold hover:text-blue-400 transition">
              Services <ChevronDownIcon className="w-4 h-4" />
            </Menu.Button>
            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute mt-2 w-64 origin-top-right bg-white text-black rounded-md shadow-lg z-50">
                <div className="py-1">
                  {services.map((service, idx) => (
                    <Menu.Item key={idx}>
                      {({ active }) => (
                        <Link
                          to={service.href}
                          className={`block px-4 py-2 text-sm ${
                            active ? 'bg-blue-100' : ''
                          }`}
                        >
                          {service.name}
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          <Link to="/gallery/" className="text-white font-semibold hover:text-blue-400">Gallery</Link>
          <Link to="/certificates/" className="text-white font-semibold hover:text-blue-400">Projects & Certificates</Link>

          <Link
            to="/contact-us/"
            className="px-4 py-1.5 rounded font-medium bg-blue-700 text-white hover:bg-blue-900 transition"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button class="md:hidden text-white" aria-label="Open menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      <Transition
        show={mobileOpen}
        enter="transition ease-out duration-200"
        enterFrom="transform -translate-x-full"
        enterTo="transform translate-x-0"
        leave="transition ease-in duration-200"
        leaveFrom="transform translate-x-0"
        leaveTo="transform -translate-x-full"
      >
        <div className="md:hidden w-full px-4 py-4 bg-white text-blue-500 space-y-4">
          <Link to="/" onClick={() => setMobileOpen(false)} className="block font-semibold">Home</Link>
          <Link to="/about-us/" onClick={() => setMobileOpen(false)} className="block font-semibold">About</Link>

          {/* Collapsible Services Section */}
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full flex justify-between items-center font-semibold"
            >
              Services
              <ChevronDownIcon
                className={`w-4 h-4 transition-transform ${
                  servicesOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {servicesOpen && (
              <div className="pl-4 mt-2 space-y-2">
                {services.map((service, idx) => (
                  <Link
                    key={idx}
                    to={service.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-sm"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/gallery/" onClick={() => setMobileOpen(false)} className="block font-semibold">
            Gallery
          </Link>

          <Link to="/certificates/" onClick={() => setMobileOpen(false)} className="block font-semibold">
            Projects & Certificates
          </Link>

          <Link
            to="/contact-us/"
            onClick={() => setMobileOpen(false)}
            className="inline-block text-center w-full py-2 rounded font-medium bg-blue-500 text-white hover:bg-blue-800 transition"
          >
            Contact
          </Link>
        </div>
      </Transition>
    </header>
  );
}


