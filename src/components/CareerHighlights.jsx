// import { useEffect, useState } from "react";
// import { useInView } from "framer-motion";
// import { useRef } from "react";

// const Counter = ({ end, startCount }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (startCount) {
//       let start = 0;
//       const duration = 2000;
//       const increment = end / (duration / 50);
//       const counter = setInterval(() => {
//         start += increment;
//         if (start >= end) {
//           clearInterval(counter);
//           setCount(end);
//         } else {
//           setCount(Math.ceil(start));
//         }
//       }, 50);
//     }
//   }, [startCount]);

//   return <p className="text-4xl font-semibold text-green-500">{count}+</p>;
// };

// const CareerHighlights = () => {
//   const ref1 = useRef(null);
//   const inView1 = useInView(ref1, { once: true });

//   return (
//     <div id="career" className="max-w-6xl mx-auto px-4 py-16">
//         <h2 className="text-3xl font-bold text-red-500 mb-12 text-center">
//         Career Highlights
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
//         <div ref={ref1} className="p-6 border border-gray-700 rounded-xl">
//           <Counter end={4} startCount={inView1} />
//           <p className="mt-2">Years of Experience</p>
//         </div>
//         <div className="p-6 border border-gray-700 rounded-xl">
//           <Counter end={25} startCount={inView1} />
//           <p className="mt-2">Races Completed</p>
//         </div>
//         <div className="p-6 border border-gray-700 rounded-xl">
//           <Counter end={15} startCount={inView1} />
//           <p className="mt-2">Top 3 Finishes</p>
//         </div>
//         <div className="p-6 border border-gray-700 rounded-xl">
//           <Counter end={10} startCount={inView1} />
//           <p className="mt-2">Championships</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CareerHighlights;


import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

const Counter = ({ end, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 50);
    let counter;

    if (inView) {
      counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(counter);
          setCount(end);
        } else {
          setCount(Math.ceil(start));
        }
      }, 50);
    } else {
      setCount(0); // Reset when out of view
    }

    return () => clearInterval(counter);
  }, [inView, end]);

  return <p className="text-4xl font-semibold text-green-500">{count}+</p>;
};

const CareerHighlights = () => {
  const ref1 = useRef(null);
  const inView1 = useInView(ref1); // removed { once: true }

  return (
    <div id="career" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-red-500 mb-12 text-center">
        Career Highlights
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center ">
        <div ref={ref1} className="p-6 border border-gray-700 rounded-xl ">
          <Counter end={4} inView={inView1} />
          <p className="mt-2">Years of Experience</p>
        </div>
        <div className="p-6 border border-gray-700 rounded-xl">
          <Counter end={25} inView={inView1} />
          <p className="mt-2">Races Completed</p>
        </div>
        <div className="p-6 border border-gray-700 rounded-xl">
          <Counter end={15} inView={inView1} />
          <p className="mt-2">Top 3 Finishes</p>
        </div>
        <div className="p-6 border border-gray-700 rounded-xl">
          <Counter end={10} inView={inView1} />
          <p className="mt-2">Championships</p>
        </div>
      </div>
    </div>
  );
};

export default CareerHighlights;
