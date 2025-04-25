import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import useIsMobile from '../hook/useIsMobile';

// Desktop images
import Img1 from '../assets/NAVANEETH_27/1.png';
import Img5 from '../assets/NAVANEETH_27/5.jpg';
import Img6 from '../assets/NAVANEETH_27/6.jpg';
import Img7 from '../assets/NAVANEETH_27/7.png';
import Img8 from '../assets/NAVANEETH_27/8.png';
import Img11 from '../assets/NAVANEETH_27/11.png';

// Mobile images
import Imge1 from '../assets/MobileDevice/1.jpg';
import Imge3 from '../assets/MobileDevice/3.jpg';
import Imge4 from '../assets/MobileDevice/4.jpg';
import Imge5 from '../assets/MobileDevice/5.jpg';
import Imge6 from '../assets/MobileDevice/6.jpg';
import Imge7 from '../assets/MobileDevice/7.png';
import Imge8 from '../assets/MobileDevice/8.png';
import Imge11 from '../assets/MobileDevice/11.png';

const desktopImages = [Img1, Img5, Img6, Img7, Img8, Img11];
const mobileImages = [Imge1, Imge3, Imge4, Imge5, Imge6, Imge7, Imge8, Imge11];

const Achievements = () => {
  const containerRef = useRef();
  const sectionRef = useRef();
  const isInView = useInView(sectionRef, { once: false });

  const isMobile = useIsMobile();
  const images = isMobile ? mobileImages : desktopImages;

  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const scrollToIndex = (index) => {
    const container = containerRef.current;
    if (container) {
      const scrollX = index * container.offsetWidth;
      container.scrollTo({ left: scrollX, behavior: 'smooth' });
      setActiveIndex(index);
    }
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const index = Math.round(container.scrollLeft / container.offsetWidth);
      setActiveIndex(index);
    }
  };

  // Auto-scroll logic
  useEffect(() => {
    if (!isInView || paused) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        scrollToIndex(nextIndex);
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [paused, images, isInView]);

  useEffect(() => {
    setActiveIndex(0);
    scrollToIndex(0);
  }, [isMobile]);

  return (
    <div
      id="achievements"
      ref={sectionRef}
      className="bg-black text-white py-16 px-4 lg:px-20"
    >
      <h2 className="text-center text-3xl md:text-3xl font-extrabold text-red-500 mb-6">
        Racing Achievements
      </h2>

      <div
        ref={containerRef}
        className="relative flex overflow-x-scroll snap-x snap-mandatory scroll-smooth scrollbar-hide"
        onScroll={handleScroll}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="min-w-full h-[70vh] snap-start px-4 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
          >
            <div
              className="w-full h-full rounded-2xl overflow-hidden shadow-lg border border-gray-700 bg-black"
              onClick={() => setPaused(true)}
              onMouseEnter={() => setPaused(true)}
            >
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-contain p-4 transition duration-700 ease-in-out"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center gap-3 mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              scrollToIndex(index);
              setPaused(true);
            }}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? 'bg-red-500 scale-125 shadow-lg'
                : 'bg-gray-500 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Achievements;


