// import Aboutimg from '../assets/aboutimg.jpg'
// const AboutSection = () => {
//     return (
//       <div id="about" className="max-w-6xl mx-auto px-4 py-16">
//         <h2 className="text-3xl font-bold text-red-500 mb-8 text-center">About Me</h2>
//         <div className="flex flex-col md:flex-row gap-8 items-center">
//           <img
//             src={Aboutimg}
//             alt="Navaneeth Kumar"
//             className="rounded-xl w-full md:w-1/2 h-80 object-cover shadow-lg"
//           />
//           <div>
//             <p className="text-lg leading-relaxed">
//               I’m Navaneeth Kumar, a passionate and driven racer who thrives on
//               speed and precision. From local tracks to competitive circuits, I’ve
//               embraced the thrill of racing, constantly pushing boundaries to
//               reach new heights. With unwavering dedication, I continue to pursue
//               excellence in every race.
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default AboutSection;

import { motion } from 'framer-motion';
import Aboutimg from '../assets/aboutimg.jpg';

const AboutSection = () => {
  return (
    <div id="about" className="max-w-6xl mx-auto px-4 py-16 mt-4
">
      <h2 className="text-3xl font-bold text-red-500 mb-8 text-center
">About Me</h2>
      
      <motion.div className="flex flex-col md:flex-row gap-8 items-center  bg-[#1f1f1f] border-l-4 border-yellow-400 p-6 rounded-2xl shadow-lg hover:shadow-yellow-400/30 overflow-hidden"       
      initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}>
        {/* Image with motion animation */}
        <motion.img
          src={Aboutimg}
          alt="Navaneeth Kumar"
          className="rounded-xl w-full md:w-1/2 h-80 object-cover shadow-lg"
          whileHover={{ scale: 1.05 }}
        />
        
        <motion.div 
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>
          {/* Text content with animation */}
          <div
        
          >
            <p className="text-lg leading-relaxed text-gray-300">
            I Navaneeth Kumar , 27 years old from Pondicherry India , a four-time
          National Motorcycle Racing Champion, having earned my titles over an
          intense and rewarding span of just five years. My journey in
          motorsports is self-made — built from the ground up through relentless
          passion, grit, and dedication. <br /><br />
          Alongside my racing career, I’m also a
          professional Vehicle Dynamics Engineer, combining deep technical
          knowledge with real-world racing experience. This unique blend gives
          me a distinct edge on the track — allowing me to understand, feel, and
          fine-tune machine behavior like few others can. <br />  <br />
          From late nights in
          the garage to podium finishes, I’ve lived every part of this sport.
          I’m now looking forward to pushing boundaries even further on the
          international stage, both as a racer and an engineer.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
