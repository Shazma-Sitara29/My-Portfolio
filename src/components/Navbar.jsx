



import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24 sticky top-0 z-50  font-serif' >
      <div className='container py-2 flex justify-center md:justify-between items-center'>
        <div className='text-2xl font-bold hidden md:inline'>Shazma Sitara</div>
        <div className='space-x-6  text-xl'>
          <ScrollLink
            to="hero"
            smooth={true}
            duration={500}
            className='hover:text-gray-400 cursor-pointer'
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className='hover:text-gray-400 cursor-pointer'
          >
            About Me
          </ScrollLink>
          <ScrollLink
            to="service"
            smooth={true}
            duration={500}
            className='hover:text-gray-400 cursor-pointer'
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className='hover:text-gray-400 cursor-pointer'
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className='hover:text-gray-400 cursor-pointer'
          >
            Contact
          </ScrollLink>
        </div>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-2xl'><a
          href="https://www.linkedin.com/in/shazma-sitara-51b2912ba/"
          target="_blank"
          rel="noopener noreferrer">
          Connect Me
        </a>
         
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
