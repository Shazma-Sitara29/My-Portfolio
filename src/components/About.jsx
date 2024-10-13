import React from "react";
import { motion } from 'framer-motion';
import AboutImage from "../assets/aboutme-image.png";

const About = () => {
  return (
    <div className="bg-black text-white py-20 font-serif" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt=""
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a passionate frontend-stack developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in both frontend and backend technologies, I strive to create
              seamless and efficient user experiences.
            </p>
            <div className="space-y-4">
      <div className="flex items-center">
        <label htmlFor="htmlandcss" className="w-2/12">
          HTML & CSS
        </label>
        <div className="grow bg-gray-800 rounded-full h-2.5 relative">
          <motion.div
            className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: '90%' }}
            transition={{ duration: 1 }}
          />
          <span className="absolute right-0 top-0 text-white text-sm -mt-6">
            90%
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <label htmlFor="javascript" className="w-2/12">
          JavaScript
        </label>
        <div className="grow bg-gray-800 rounded-full h-2.5 relative">
          <motion.div
            className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: '60%' }}
            transition={{ duration: 1 }}
          />
          <span className="absolute right-0 top-0 text-white text-sm -mt-6">
            60%
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <label htmlFor="reactjs" className="w-2/12">
          React JS
        </label>
        <div className="grow bg-gray-800 rounded-full h-2.5 relative">
          <motion.div
            className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: '70%' }}
            transition={{ duration: 1 }}
          />
          <span className="absolute right-0 top-0 text-white text-sm -mt-6">
            70%
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <label htmlFor="tailwindcss" className="w-2/12">
          Tailwind CSS
        </label>
        <div className="grow bg-gray-800 rounded-full h-2.5 relative">
          <motion.div
            className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: '90%' }}
            transition={{ duration: 1 }}
          />
          <span className="absolute right-0 top-0 text-white text-sm -mt-6">
            90%
          </span>
        </div>
      </div>
    </div>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;