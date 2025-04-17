import Vid from "../assets/bgvideo.mp4";
import { Typewriter } from "react-simple-typewriter";
const HeroSection = () => {
  return (
    <div id="home" className="relative w-full h-screen ">
      <video
        className="absolute w-full h-full object-cover z-0"
        src={Vid}
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute inset-0 flex justify-center items-center z-10">
        <div className="bg-black/40 p-8 rounded-xl shadow-lg text-center max-w-4xl hover:bg-black/80">
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
          <p className="mt-4 text-xl md:text-2xl">
            Since 2020 I’ve participated in more than 75+ races with 30+ Top 3
            race finish and 40+ top 5 finish
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <a
              href="https://youtube.com/@navaneeth.27?si=7gcZYyHLE11e9n9w"
              target="_blank"
            >
              <button className="bg-red-500 px-6 py-2 rounded-xl hover:bg-red-600 transition text-white">
                Watch Highlights
              </button>
            </a>
            <a href="mailto:teamnavaneeth.27@gmail.com" target="_blank">
              <button className="border border-red-500 text-red-500 px-6 py-2 rounded-xl hover:bg-red-500 hover:text-white transition">
                Contact for Sponsorship
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
