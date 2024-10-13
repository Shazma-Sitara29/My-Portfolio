// import React from "react";

// const services = [
//   {
//     id: 1,
//     title: "Web Design",
//     description: "Creating visually appealing and user-friendly web designs.",
//   },
//   {
//     id: 2,
//     title: "Frontend Development",
//     description: "Building responsive and interactive user interfaces.",
//   },
//   {
//     id: 3,
//     title: "MERN Stack Development",
//     description: "Developing full-stack applications using MongoDB, Express, React, and Node.js.",
//   },
//   {
//     id: 4,
//     title: "Full-Stack Development",
//     description: "Combining both frontend and backend development skills.",
//   },
//   {
//     id: 5, 
//     title: "Canva Design",
//     description: "Creating stunning graphics and designs using Canva.",
//   },
//   {
//   id: 6,
//     title: "Other Services",
//     description: "Additional services provided.",
//   }
// ];
// const Service = () => {
//   return (
//     <div className="bg-black text-white py-20 font-serif" id="service">
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service) => (
//             <div
//               key={service.id}
//               className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
//               transition-transform duration-300 hover:scale-105"
//             >
//               <div
//                 className="text-right text-2xl font-bold text-transparent bg-clip-text 
//               bg-gradient-to-r from-green-600 to-blue-400"
//               >
//                 {service.id}
//               </div>
//               <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
//               bg-gradient-to-r from-green-400 to-blue-500">
//                 {service.title}
//               </h3>
//               <p className="mt-2 text-gray-300">{service.description}</p>
//                           </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Service;












import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
  },
  {
    id: 3,
    title: "MERN Stack Development",
    description: "Developing full-stack applications using MongoDB, Express, React, and Node.js.",
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills.",
  },
  {
    id: 5,
    title: "Canva Design",
    description: "Creating stunning graphics and designs using Canva.",
  },
  {
    id: 6,
    title: "Other Services",
    description: "Additional services provided.",
  },
];

const Service = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 } // Triggers when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      className=" text-white mt-20 py-20 font-serif"
      id="service"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-600 to-blue-400"
              >
                {service.id}
              </div>
              <h3
                className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
              >
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Service;

