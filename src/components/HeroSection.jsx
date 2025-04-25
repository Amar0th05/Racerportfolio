import { useState } from "react";
import Vid from "../assets/bg1video.mp4";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [color, setColor] = useState("bg-none");

  const toggleSponsorshipMessage = () => {
    setShowMessage((prev) => !prev);
    if (color == "bg-none") {
      setColor("bg-red-600");
    } else {
      setColor("bg-none");
    }
  };

  return (
    <div id="home" className="relative w-full h-screen">
      <video
        className="absolute w-full h-full object-cover z-0"
        src={Vid}
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute inset-0 flex justify-center items-center z-10">
        <div className="bg-black/40 p-8 rounded-xl shadow-lg text-center max-w-xl md:max-w-4xl hover:bg-black/80 text-white ">
          <h1 className="text-4xl md:text-6xl font-bold">
            4X NATIONAL CHAMPION
          </h1>

          <p className="text-xl md:text-3xl text-green-500 uppercase mt-4 font-bold tracking-wider">
            <Typewriter
              words={[
                "🏁 National Champion",
                "💨 Speed Addict",
                "🏆 Podium Finisher",
                "🔥 Born to Race",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </p>

          <p className="mt-4 text-lg md:text-xl">
            Since 2020 I’ve participated in more than 75+ races with 30+ Top 3
            race finish and 40+ top 5 finish.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <a
              href="https://youtube.com/@navaneeth.27?si=7gcZYyHLE11e9n9w"
              target="_blank"
            >
              <button className="w-65 bg-red-500 px-6 py-2 rounded-xl hover:bg-red-600 transition text-white text-base md:text-lg">
                Watch Highlights
              </button>
            </a>
            <button
              onClick={toggleSponsorshipMessage}
              className={`w-65 border border-red-500 text-red-500 px-6 py-2 rounded-xl ${color} hover:bg-red-600 transition text-base md:text-lg text-white`}
            >
              Contact for Sponsorship
            </button>
          </div>

          {showMessage && (
            <div className="mt-8 text-left bg-black p-6 rounded-xl text-white text-base md:text-lg leading-relaxed">
              <p className="font-semibold mb-4">
                By sponsoring me, your brand will gain massive exposure in the
                motorsports world, reaching thousands of dedicated fans, racing
                enthusiasts, and potential customers. Your brand will benefit
                from:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  ✅ <strong>Brand Visibility</strong> – Logo placement on race
                  suits, bikes, helmets, and social media.
                </li>
                <li>
                  ✅ <strong>Social Media Promotion</strong> – Featured posts,
                  reels, and stories to an engaged audience.
                </li>
                <li>
                  ✅ <strong>Event Exposure</strong> – Brand presence in
                  national and international racing competitions.
                </li>
                <li>
                  ✅ <strong>Content Collaboration</strong> – Custom content
                  creation featuring your products/services in various social
                  media platforms.
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
