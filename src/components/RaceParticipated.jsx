// // TimelineComponent.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import { FaMapMarkerAlt } from "react-icons/fa";

// const timelineData = [
//   {
//     year: "2025",
//     description: "Royal Enfield Flat Track Races",
//   },
//   {
//     year: "2024",
//     description:
//       "Castrol India's Ultimate Motosters - IMRC (Indian National Motorcycle Racing Championship) - Royal Enfield GT Cup Championship - Harley Davidson Flat Track Races",
//   },
//   {
//     year: "2023",
//     description:
//       "KTM RC Championship - INMIC (Round-5) Peostock 301-900cc - BRIC Superbike Championship (Thailand)",
//   },
//   {
//     year: "2022",
//     description:
//       "INDMRC (Peostock) 301-400cc - TVS RR 310 Cup Open Class - Royal Enfield GT Cup Championship",
//   },
//   {
//     year: "2021",
//     description: "TVS Endurance Cup - TVS RR310 Cup",
//   },
//   {
//     year: "2020",
//     description:
//       "TVS OneMake Championship - Novice Class - INMRC Stock up to 165cc - Novice Class",
//   },
// ];

// const RaceParticipated = () => {
//   return (
//     <div className="relative py-20 px-4 bg-gray-900 text-white">
//       <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-500"></div>

//       <h2 className="text-3xl font-bold text-center mb-16">🏁 Racing Journey (2020 - 2025)</h2>

//       <div className="space-y-20 max-w-4xl mx-auto">
//         {timelineData.map((item, index) => {
//           const isLeft = index % 2 === 0;

//           return (
//             <motion.div
//               key={item.year}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className={`flex items-center justify-between w-full ${
//                 isLeft ? "flex-row-reverse" : ""
//               }`}
//             >
//               <div className="w-1/2 px-4">
//                 <div className="bg-yellow-600 rounded-2xl p-6 shadow-md hover:scale-105 transition">
//                   <h3 className="text-xl font-semibold">{item.year}</h3>
//                   <p className="mt-2 text-sm text-gray-200">{item.description}</p>
//                 </div>
//               </div>

//               <div className="w-10 h-10 bg-yellow-500 text-black rounded-full flex items-center justify-center shadow-lg z-10">
//                 <FaMapMarkerAlt size={20} />
//               </div>

//               <div className="w-1/2"></div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default RaceParticipated;


// TimelineComponent.jsx

// TimelineComponent.jsx
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FaMapMarkerAlt, FaMotorcycle, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
// import roadImage from "../assets/road.jpg";
// import engineSound from "../assets/engine-sound.mp3";

// const timelineData = [
//   {
//     year: "2025",
//     description: "Royal Enfield Flat Track Races",
//   },
//   {
//     year: "2024",
//     description:
//       "Castrol India's Ultimate Motosters - IMRC (Indian National Motorcycle Racing Championship) - Royal Enfield GT Cup Championship - Harley Davidson Flat Track Races",
//   },
//   {
//     year: "2023",
//     description:
//       "KTM RC Championship - INMIC (Round-5) Peostock 301-900cc - BRIC Superbike Championship (Thailand)",
//   },
//   {
//     year: "2022",
//     description:
//       "INDMRC (Peostock) 301-400cc - TVS RR 310 Cup Open Class - Royal Enfield GT Cup Championship",
//   },
//   {
//     year: "2021",
//     description: "TVS Endurance Cup - TVS RR310 Cup",
//   },
//   {
//     year: "2020",
//     description:
//       "TVS OneMake Championship - Novice Class - INMRC Stock up to 165cc - Novice Class",
//   },
// ];

// const TimelineComponent = () => {
//   const [expanded, setExpanded] = useState(null);
//   const [soundOn, setSoundOn] = useState(false);

//   const toggleSound = () => {
//     const audio = document.getElementById("engine-audio");
//     if (soundOn) {
//       audio.pause();
//     } else {
//       audio.play();
//     }
//     setSoundOn(!soundOn);
//   };

//   return (
//     <div className="relative min-h-screen text-white overflow-hidden">
//       {/* Audio */}
//       <audio id="engine-audio" src={engineSound} loop></audio>

//       {/* Road Background */}
//       <img
//         src={roadImage}
//         alt="road background"
//         className="absolute inset-0 w-full h-full object-cover opacity-20 z-1 animate-roadScroll"
//       />

//       {/* Overlay for contrast */}
//       <div className="absolute inset-0 bg-black bg-opacity-80 z-0"></div>

//       {/* Sound Toggle */}
//       <button
//         onClick={toggleSound}
//         className="fixed top-4 right-4 z-20 text-yellow-400 text-2xl bg-black bg-opacity-50 p-2 rounded-full hover:scale-110 transition"
//       >
//         {soundOn ? <FaVolumeUp /> : <FaVolumeMute />}
//       </button>

//       {/* Moving Bike Icon */}
//       <motion.div
//         className="absolute top-1/2 -translate-y-1/2 left-0 text-yellow-500 z-0"
//         initial={{ x: "-10%" }}
//         animate={{ x: "110%" }}
//         transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
//       >
//         <FaMotorcycle size={32} />
//       </motion.div>

//       {/* Content */}
//       <div className="relative z-10 py-20 px-4">
//         <h2 className="text-3xl font-bold text-center text-yellow-400 mb-16">
//           🏁 Racing Journey (2020 - 2025)
//         </h2>

//         <div className="relative max-w-4xl mx-auto space-y-20">
//           {/* Center Line */}
//           <div className="absolute left-1/2 top-0 h-full w-1 bg-yellow-500 transform -translate-x-1/2"></div>

//           {timelineData.map((item, index) => {
//             const isLeft = index % 2 === 0;
//             const isOpen = expanded === index;
//             return (
//               <motion.div
//                 key={item.year}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//                 className={`flex flex-col md:flex-row items-center justify-between w-full gap-4 ${
//                   isLeft ? "md:flex-row-reverse" : ""
//                 }`}
//               >
//                 {/* Text Block */}
//                 <div className="md:w-1/2 w-full px-4">
//                   <div
//                     className="bg-yellow-600 rounded-2xl p-6 shadow-md hover:scale-105 transition cursor-pointer"
//                     onClick={() => setExpanded(isOpen ? null : index)}
//                   >
//                     <h3 className="text-xl font-semibold">{item.year}</h3>
//                     <p className={`mt-2 text-sm text-gray-100 transition-all duration-300 ${isOpen ? "max-h-[500px]" : "truncate max-h-[60px] overflow-hidden"}`}>
//                       {item.description}
//                     </p>
//                     <p className="text-xs text-gray-300 mt-2">{isOpen ? "Click to collapse" : "Click to expand"}</p>
//                   </div>
//                 </div>

//                 {/* Icon */}
//                 <div className="w-10 h-10 bg-yellow-500 text-black rounded-full flex items-center justify-center shadow-lg z-10">
//                   <FaMapMarkerAlt size={20} />
//                 </div>

//                 {/* Spacer */}
//                 <div className="md:w-1/2 hidden md:block"></div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Tailwind Animation Class */}
//       <style>
//         {`
//           .animate-roadScroll {
//             animation: scrollRoad 20s linear infinite;
//           }

//           @keyframes scrollRoad {
//             0% { background-position: 0 0; }
//             100% { background-position: 0 100%; }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default TimelineComponent;

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { FaRegClock, FaMapMarkerAlt } from "react-icons/fa";

// const futuristicSteps = [
//   { year: 2020, title: "TVS OneMake Championship - Novice Class" },
//   { year: 2021, title: "TVS Endurance Cup - TVS RR310 Cup" },
//   { year: 2022, title: "TVS RR 310 Cup Open Class - RE GT Cup" },
//   { year: 2023, title: "KTM RC Championship - BRIC Superbike" },
//   { year: 2024, title: "Harley Davidson Flat Track - IMRC - RE GT" },
//   { year: 2025, title: "Royal Enfield Flat Track Races" },
// ];

// const RacingHUD = () => {
//   const [yearCount, setYearCount] = useState(2020);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setYearCount((prev) => (prev < 2025 ? prev + 1 : prev));
//     }, 400);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white px-4 py-20 font-mono relative overflow-hidden">
//       <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

//       <h2 className="text-center text-4xl font-bold text-red-500 mb-16 tracking-widest">
//         🏍️ RACING TIMELINE
//       </h2>

//       <div className="relative max-w-3xl mx-auto  overflow-y-auto max-h-[80vh] scrollbar-hide px-5">
//         {/* Vertical Glowing Line */}
//         <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-red-500 animate-pulse z-0" />

//         <div className="relative z-10 space-y-20">
//           {futuristicSteps.map((step, index) => (
//             <motion.div
//               key={step.year}
//               initial={{ opacity: 0, scale: 0.8, y: 100 }}
//               whileInView={{ opacity: 1, scale: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.1 }}
//               viewport={{ once: true, amount: 0.3 }}
//               className={`flex items-center gap-6 ${
//                 index % 2 === 0 ? "flex-row" : "flex-row-reverse"
//               }`}
//             >
//               {/* Floating Icon */}
//               <motion.div
//                 animate={{ y: [0, -10, 0] }}
//                 transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
//                 className="bg-red-500 text-black p-4 rounded-full shadow-lg"
//               >
//                 <FaMapMarkerAlt size={20} />
//               </motion.div>

//               {/* Glowing Card */}
//               <motion.div
//                 whileHover={{ scale: 1.05, boxShadow: "0 0 15px #ff1f1f" }}
//                 className="bg-white/5 border border-red-500/30 backdrop-blur-md px-6 py-4 rounded-xl w-full shadow-md hover:shadow-red-500/40 transition duration-300"
//               >
//                 <div className="flex items-center justify-between mb-2">
//                   <span className="text-sm text-red-400 flex items-center gap-2">
//                     <FaRegClock /> {step.year}
//                   </span>
//                   {step.year === yearCount && (
//                     <motion.span
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       transition={{ type: "spring", stiffness: 300 }}
//                       className="text-xs bg-red-600 px-2 py-0.5 rounded-full text-black"
//                     >
//                       LIVE
//                     </motion.span>
//                   )}
//                 </div>
//                 <p className="text-sm">{step.title}</p>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       <style>{`
//         .bg-grid-pattern {
//           background-image: linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), 
//                             linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
//           background-size: 30px 30px;
//         }

//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default RacingHUD;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaRegClock, FaMapMarkerAlt } from "react-icons/fa";
import { li } from "framer-motion/client";

const futuristicSteps = [
  { year: 2020, title:["TVS OneMake Championship - Novice Class","INMRC stock upto 165cc - Novice Class"] },
  { year: 2021, title:["TVS Endurance Cup","TVS RR310 Cup"] },
  { year: 2022, title:["INDMRC (Peostock) 301-400cc","TVS RR310 Cup - Open Class","RoyalEnfield GT Cup championship"] },
  { year: 2023, title:["KTM RC Championship","IMRC (Round - 5) Peostock 301-400cc", "BRIC Superbike Championship ()Thailand"] },
  { year: 2024, title:["Castrol India's ultimate motocycle","IMRC (Indian national motorcycle Racing Championship) 301-400cc ","Royal Enfield GT cup Championship","Harley Davidson Flat Track"] },
  { year: 2025, title: ["Royal Enfield Flat Track Races"] },
];

const RacingHUD = () => {
  const [yearCount, setYearCount] = useState(2020);

  useEffect(() => {
    const interval = setInterval(() => {
      setYearCount((prev) => (prev < 2025 ? prev + 1 : prev));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b bg-black text-white px-4 py-20 font-mono relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <h2 className="text-center text-3xl font-bold text-red-500 mb-16 tracking-widest">
        🏍️ RACE PARTICIPATED
      </h2>

      <div className="relative max-w-3xl mx-auto overflow-y-auto min-h-0 scrollbar-smooth px-5">
        {/* Vertical Glowing Line */}
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-red-500 animate-pulse z-0" />

        <div className="relative z-10 space-y-24">
          {futuristicSteps.map((step, index) => (
            <motion.div
              key={step.year}
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`flex items-center gap-6 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Floating Icon */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="bg-red-500 text-black p-4 rounded-full shadow-lg"
              >
                <FaMapMarkerAlt size={20} />
              </motion.div>

              {/* Glowing Card */}
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px #ff1f1f" }}
                className="bg-white/5 border border-red-500/30 backdrop-blur-md px-6 hover:mx-2 py-4 rounded-xl w-full shadow-md hover:shadow-red-500/40 transition duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl text-red-400 flex items-center gap-2">
                    <FaRegClock /> {step.year}
                  </span>
                  {step.year === yearCount && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="text-xs bg-red-600 px-2 py-0.5 rounded-full text-black"
                    >
                      LIVE
                    </motion.span>
                  )}
                </div>
                <ul className="text-lg list-disc ps-3">
                  {
                    step.title.map((title,index)=>{
                      return <li key={index}>{title}</li>
                    })
                  }
                </ul>
                {/* <p className="text-sm">{step.title}</p> */}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), 
                            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 30px 30px;
        }

        .scrollbar-smooth::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-smooth {
          -ms-overflow-style: none;
          scrollbar-width: none;
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default RacingHUD;

