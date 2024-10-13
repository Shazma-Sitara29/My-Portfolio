
import React, { useState, useRef, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.clientHeight);
    }
  }, [navbarRef]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav ref={navbarRef} className='bg-black text-white border-b border-gray-700 px-8 md:px-16 lg:px-24 py-2 fixed top-0 w-full  z-50 font-serif'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <div className='text-2xl font-bold'>Shazma Sitara</div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex space-x-6 text-xl'>
          <ScrollLink to="hero" smooth={true} duration={500} className='hover:text-gray-400 cursor-pointer'>
            Home
          </ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} className='hover:text-gray-400 cursor-pointer'>
            About Me
          </ScrollLink>
          <ScrollLink to="service" smooth={true} duration={500} className='hover:text-gray-400 cursor-pointer'>
            Services
          </ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500} className='hover:text-gray-400 cursor-pointer'>
            Projects
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className='hover:text-gray-400 cursor-pointer'>
            Contact
          </ScrollLink>
        </div>

        {/* Connect Me Button for Desktop */}
        <button className='hidden md:inline bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-2xl mt-2 transition-all duration-300 transform hover:scale-110 hover:shadow-lg'>
          <a href="https://www.linkedin.com/in/shazma-sitara-51b2912ba/" target="_blank" rel="noopener noreferrer">
            Connect Me
          </a>
        </button>

        {/* Mobile Dropdown Button */}
        <div className='md:hidden'>
          <button onClick={toggleDropdown}>
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className='md:hidden mt-2 bg-black border-t border-gray-700'>
          <ScrollLink to="hero" smooth={true} duration={500} offset={-navbarHeight} className='block py-2 px-4 hover:text-gray-400 cursor-pointer' onClick={toggleDropdown}>
            Home
          </ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} offset={-navbarHeight} className='block py-2 px-4 hover:text-gray-400 cursor-pointer' onClick={toggleDropdown}>
            About Me
          </ScrollLink>
          <ScrollLink to="service" smooth={true} duration={500} offset={-navbarHeight} className='block py-2 px-4 hover:text-gray-400 cursor-pointer' onClick={toggleDropdown}>
            Services
          </ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500} offset={-navbarHeight} className='block py-2 px-4 hover:text-gray-400 cursor-pointer' onClick={toggleDropdown}>
            Projects
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} offset={-navbarHeight} className='block py-2 px-4 hover:text-gray-400 cursor-pointer' onClick={toggleDropdown}>
            Contact
          </ScrollLink>
          <div className='block py-2 px-4'>
            <a href="https://www.linkedin.com/in/shazma-sitara-51b2912ba/" target="_blank" rel="noopener noreferrer" className='bg-gradient-to-r from-green-400 to-blue-500 text-white block text-center rounded-full py-3 px-6 mt-2 transition-all duration-300 transform hover:scale-110 hover:shadow-lg'>
              Connect Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
















