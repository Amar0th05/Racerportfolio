// MediaGallery.jsx
import { useState } from "react";

// Images
import Img1 from "../assets/Media/1.jpg";
import Img2 from "../assets/Media/2.JPG";
import Img3 from "../assets/Media/3.JPG";
import Img4 from "../assets/Media/4.JPG";
import Img5 from "../assets/Media/5.JPG";
import Img6 from "../assets/Media/6.PNG";
import Img8 from "../assets/Media/8.PNG";
import Img9 from "../assets/Media/9.PNG";
import Img10 from "../assets/Media/10.PNG";
import Img11 from "../assets/Media/11.PNG";
import Img12 from "../assets/Media/12.PNG";
import Img13 from "../assets/Media/13.PNG";
import Img14 from "../assets/Media/14.PNG";
import Img15 from "../assets/Media/15.JPG";
import Img16 from "../assets/Media/16.jpg";
import Img17 from "../assets/Media/17.png";
import Img18 from "../assets/Media/18.png";
import Img19 from "../assets/Media/19.png";

// Image Array
const images = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img8,
  Img9,
  Img10,
  Img11,
  Img12,
  Img13,
  Img14,
  Img15,
  Img16,
  Img17,
  Img18,
  Img19,
];

// URLs for last 3 images
const mediaLinks = [
  "https://www.autocarindia.com/motor-sports-news/2020-inmrc-tvs-racing-ky-ahamed-crowned-champion-419473",
  "https://www.autocarindia.com/motor-sports-news/ky-ahamed-scores-maiden-asia-road-racing-victory-428162",
  "https://www.autocarindia.com/motor-sports-news/ky-ahamed-continues-his-strong-form-in-arrc-429326",
];

const MediaGallery = ({ onClose }) => {
  const totalImages = images.length;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur flex flex-col items-center p-6 overflow-auto min-h-screen">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="text-white self-end text-2xl mb-4 hover:text-red-500"
      >
        × Close
      </button>

      <h2 className="text-white text-3xl font-bold mb-6 uppercase tracking-wide">
        Media Gallery
      </h2>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {images.map((img, index) => {
          const isLastThree = index >= totalImages - 3;
          const url = isLastThree
            ? mediaLinks[index - (totalImages - 3)]
            : img;

          return (
            <div
              key={index}
              className="relative group shadow-lg rounded-xl overflow-hidden border-2 border-transparent hover:border-white transition-all duration-300 cursor-pointer"
              onClick={() => window.open(url, "_blank")}
            >
              <img
                src={img}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition">
                {isLastThree ? "Read Article" : "View Full"}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MediaGallery;
