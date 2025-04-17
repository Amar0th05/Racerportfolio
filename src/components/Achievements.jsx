// import { useEffect, useRef, useState } from "react";

// import Img1 from '../assets/NAVANEETH_27/1.png'
// import Img2 from '../assets/NAVANEETH_27/2.png'
// import Img3 from '../assets/NAVANEETH_27/3.png'
// import Img4 from '../assets/NAVANEETH_27/4.png'
// import Img5 from '../assets/NAVANEETH_27/5.png'
// import Img6 from '../assets/NAVANEETH_27/6.png'
// import Img7 from '../assets/NAVANEETH_27/7.png'
// import Img8 from '../assets/NAVANEETH_27/8.png'
// import Img9 from '../assets/NAVANEETH_27/9.png'
// import Img10 from '../assets/NAVANEETH_27/10.png'
// import Img11 from '../assets/NAVANEETH_27/11.png'

// const Achievements = () => {
// const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7,Img8,Img9,Img10,Img11];

//   const scrollRef = useRef(null);
//   const [index, setIndex] = useState(0);

//   const scrollToIndex = (i) => {
//     const container = scrollRef.current;
//     if (container) {
//       container.scrollTo({
//         left: i * container.offsetWidth,
//         behavior: "smooth",
//       });
//       setIndex(i);
//     }
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const nextIndex = (index + 1) % images.length;
//       scrollToIndex(nextIndex);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [index]);

//   return (
//     <div id="achievements" className="max-w-6xl mx-auto px-4 py-16">
//       <h2 className="text-3xl font-bold text-red-500 mb-8 text-center">
//         Achievements
//       </h2>
//       <div
//         ref={scrollRef}
//         className="overflow-hidden flex snap-x snap-mandatory scroll-smooth rounded-xl"
//         style={{ scrollBehavior: "smooth" }}
//       >
//         {images.map((src, i) => (
//           <img
//             key={i}
//             src={src}
//             alt={`Achievement ${i + 1}`}
//             className="w-full flex-shrink-0 snap-center object-cover h-80 md:h-[500px]"
//           />
//         ))}
//       </div>
//       <div className="flex justify-center mt-4 space-x-2">
//         {images.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => scrollToIndex(i)}
//             className={`w-3 h-3 rounded-full ${
//               i === index ? "bg-red-500" : "bg-gray-500"
//             }`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Achievements;


import React from 'react'
import {motion} from 'framer-motion'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Img1 from '../assets/NAVANEETH_27/1.png'
import Img2 from '../assets/NAVANEETH_27/2.png'
import Img3 from '../assets/NAVANEETH_27/3.png'
import Img4 from '../assets/NAVANEETH_27/4.png'
import Img5 from '../assets/NAVANEETH_27/5.png'
import Img6 from '../assets/NAVANEETH_27/6.png'
import Img7 from '../assets/NAVANEETH_27/7.png'
import Img8 from '../assets/NAVANEETH_27/8.png'
import Img9 from '../assets/NAVANEETH_27/9.png'
import Img10 from '../assets/NAVANEETH_27/10.png'
import Img11 from '../assets/NAVANEETH_27/11.png'




const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7,Img8,Img9,Img10,Img11];
const Achievements = () => {
    const containerRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll to image by index
  const scrollToIndex = (index) => {
    const container = containerRef.current;
    if (container) {
      const scrollX = index * container.offsetWidth;
      container.scrollTo({ left: scrollX, behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        scrollToIndex(nextIndex);
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  // Update dot on manual scroll
  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const index = Math.round(container.scrollLeft / container.offsetWidth);
      setActiveIndex(index);
    }
  };
  return (
    <div id='achievements' className="bg-black text-white py-16 px-4 lg:px-20">
    <h2 className="text-center text-4xl md:text-5xl font-extrabold text-red-500 mb-10">
      RACING ACHIEVEMENTS
    </h2>

    {/* Scrollable image container */}
    <div
      ref={containerRef}
      className="relative flex overflow-x-scroll snap-x snap-mandatory scroll-smooth scrollbar-hide"
      onScroll={handleScroll}
    >
      {images.map((img, index) => (
        <motion.div
          key={index}
          className="min-w-full h-[60vh] snap-start px-4 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: index * 0.1 }}
        >
          <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-gray-700">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-fill hover:scale-105 transition duration-700 ease-in-out"
            />
          </div>
        </motion.div>
      ))}
    </div>

    {/* Navigation dots */}
    <div className="flex justify-center gap-3 mt-6">
      {images.map((_, index) => (
        <button
          key={index}
          onClick={() => scrollToIndex(index)}
          className={`w-4 h-4 rounded-full transition-all duration-300 ${
            index === activeIndex
              ? "bg-red-500 scale-125 shadow-lg"
              : "bg-gray-500 hover:bg-gray-400"
          }`}
        />
      ))}
    </div>
  </div>
  )
}

export default Achievements