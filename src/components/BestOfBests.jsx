// import { motion } from "framer-motion";

// const bestHighlights = [
//   "Lap Record Holder",
//   "Trained by Ex-MotoGP Racer Jeremy Williams in Austria",
//   "Trained on KTM RC8C Superbike 1290 & Duke 890 at Slovakia Ring, Austria",
//   "Stunt Show Performer @ HeroMotoCup in 2024 & 2025"
// ];

// const itemVariant = {
//   hidden: { opacity: 0, y: 50 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.3,
//       duration: 0.6,
//       ease: "easeOut"
//     }
//   })
// };

// export default function BestOfBests() {
//   return (
//     <section className="bg-black text-white py-16 px-6 md:px-20">
//       <div className="max-w-4xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-4xl md:text-5xl font-extrabold text-center mb-12 tracking-tight text-yellow-400"
//         >
//           Best of Bests 🏁
//         </motion.h2>

//         <div className="space-y-6">
//           {bestHighlights.map((item, i) => (
//             <motion.div
//               key={i}
//               custom={i}
//               variants={itemVariant}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className="bg-gray-900 border border-yellow-500 rounded-2xl shadow-xl p-6 text-lg font-medium hover:scale-[1.02] transition-transform"
//             >
//               {item}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";

const bestHighlights = [
  "🏁 Lap Record Holder",
  "🏍️ Trained by Ex-MotoGP Racer Jeremy Williams in Austria",
  "🔥 Trained on KTM RC8C Superbike 1290 & Duke 890 at Slovakia Ring, Austria",
  "🎯 Stunt Show Performer @ HeroMotoCup in 2024 & 2025"
];

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12
    }
  }
};

export default function BestOfBests() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1 }
          }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-3xl font-extrabold text-center mb-12 text-red-500 tracking-widest"
        >
          Best of Bests
        </motion.h2>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="grid gap-8 md:grid-cols-2"
        >
          {bestHighlights.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariant}
              className="bg-gray-900 border border-red-500 rounded-3xl shadow-xl p-6 text-lg font-semibold hover:shadow-red-500/40 hover:scale-105 transition-transform duration-300"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
