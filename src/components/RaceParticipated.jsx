import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaRegClock, FaMapMarkerAlt } from "react-icons/fa";
import { li } from "framer-motion/client";

const futuristicSteps = [
  {
    year: 2020,
    title: [
      "TVS OneMake Championship - Novice Class",
      "INMRC stock upto 165cc - Novice Class",
    ],
  },
  {
    year: 2021,
    title: [
      "INMRC 301-400cc expert class",
      "TVS Endurance Cup",
      "TVS RR310 Cup",
    ],
  },
  {
    year: 2022,
    title: [
      "INMRC (Prostock) 301-400cc expert class",
      "TVS RR310 Cup - Open Class",
      "RoyalEnfield GT Cup championship expert class",
    ],
  },
  {
    year: 2023,
    title: [
      "KTM RC Championship",
      "IMRC (Round - 5) Prostock 301-400cc",
      "BRIC International Superbike Championship (Thailand)",
    ],
  },
  {
    year: 2024,
    title: [
      "India's Ultimate motostar - castrol power 1",
      "Indian national motorcycle Racing Championship) 301-400cc ",
      "Royal Enfield GT cup 2024",
      "Harley Davison Flattrack championship,GOA",
    ],
  },
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

      <h2 className="text-center text-3xl font-bold text-red-500 mb-16">
        🏍️ Race Participated
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
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
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
                  {step.title.map((title, index) => {
                    return <li key={index}>{title}</li>;
                  })}
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
