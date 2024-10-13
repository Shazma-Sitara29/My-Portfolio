import React from 'react';
import HeroImage from '../assets/hero-image.png';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16 font-serif'>
      <img
        src={HeroImage}
        alt=''
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'
      />
      <h1 className='text-4xl font-bold'>
        I'm{' '}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
          Shazma Sitara
        </span>
        ,{' '}
        <TypeAnimation
          sequence={[
            'Frontend Developer', // Types 'Full-Stack Developer'
            2000, // Waits 2 seconds
            'MERN Stack Developer', // Replaces with 'MERN Stack Developer'
            2000, // Waits 2 seconds
            'Full Stack Developer', // Replaces with 'Frontend Developer'
            2000, // Waits 2 seconds
          ]}
          wrapper='span'
          cursor={true}
          repeat={Infinity}
          style={{ display: 'inline-block' }}
        />
      </h1>
      <p className='mt-4 text-lg text-gray-300'>
        <TypeAnimation
          sequence={[
            'I specialize in building modern and responsive web applications.', // Types this sentence
            3000, // Waits 3 seconds
            'I also create beautiful and functional user interfaces.', // Replaces with another sentence
            3000, // Waits 3 seconds
          ]}
          wrapper='span'
          cursor={true}
          repeat={Infinity}
          style={{ display: 'inline-block' }}
        />
      </p>
      <div className='mt-8 space-x-4'>
       <Link to="contact"> <button 
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-2xl'>
          Contact With Me
        </button></Link>
        <button
          className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-2xl'>
          Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
