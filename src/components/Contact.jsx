import React from 'react'
import { FaEnvelope, FaLinkedinIn, FaGithub, } from 'react-icons/fa'   
import  { useState } from 'react';

const Contact = () => {
const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newErrors = {};
  
      // Name validation
      if (!name) {
        newErrors.name = 'Name is required';
      } else if (!/^[a-zA-Z\s]+$/.test(name)) {
        newErrors.name = 'Name should contain only letters';
      }
  
      // Email validation
      if (!email) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = 'Email is invalid';
      }
  
      // Check for errors
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
      } else {
        setSuccessMessage('Message sent successfully!');
        // Clear the form fields
        setName('');
        setEmail('');
        setMessage('');
        setErrors({});
      }
    };
  return (
    <div className=" text-white mt-20 py-20 font-serif" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
            <p>I'm open to discussing web development prjectgs or partnership opportunities.</p>
            <div className='mb-4 mt-8'>
              <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
              <a href="mailto:youremail@example.com" className='hover:underline'>
                shazmasitara@gmail.com
              </a>
            </div>
            <div className='mb-4'>
              <FaLinkedinIn className='inline-block text-green-400 mr-2' />
              <a href="https://www.linkedin.com/in/shazma-sitara-51b2912ba/" target="_blank" rel="noopener noreferrer">
                <span>https://www.linkedin.com/in/shazma-sitara-51b2912ba/</span>
              </a>
            </div>
            <div className='mb-4'>
              <FaGithub className='inline-block text-green-400 mr-2' />
              <a href="https://github.com/Shazma-Sitara29" target="_blank" rel="noopener noreferrer">
                <span>https://github.com/Shazma-Sitara29</span>
              </a>
            </div>

          </div>
    




    <div className='flex-1 w-full'>
      <form className='space-y-4' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className='block mb-2'>Your Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
            placeholder='Enter Your Name'
          />
          {errors.name && <p className='text-red-500'>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className='block mb-2'>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
            placeholder='Enter Your Email'
          />
          {errors.email && <p className='text-red-500'>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="message" className='block mb-2'>Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
            rows="5"
            placeholder='Enter Your Message'
          />
        </div>
        <button
          type="submit"
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-2xl'
        >
          Send
        </button>
        {successMessage && <p className='text-green-500'>{successMessage}</p>}
      </form>
    </div>
  

        </div>
      </div>
    </div>
  )}


export default Contact