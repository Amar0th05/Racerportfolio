import { motion } from "framer-motion";

const bestHighlights = [
  "🏁 First Indian to clock fastest Lap time on stock RC390 Indian spec - 1.59030 @MMRT",
  "🏍️ First Indian to hold fastest lap record time on Indian spec GT650 - 1.16.513 @KMS",
  "🏍️ Trained by Ex-MotoGP Racer Jeremy Williams in Austria, Europe",
  "🔥 Trained on KTM RC8C Superbike 1290 & Duke 890 at Slovakia Ring, Austria, Europe",
  "🎯 Stunt Show Performer @HeroMotoCorp in 2024 & 2025",
];

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
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
      damping: 12,
    },
  },
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
            visible: { opacity: 1, scale: 1 },
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
