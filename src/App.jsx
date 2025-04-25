import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CareerHighlights from './components/CareerHighlights';
import Achievements from './components/Achievements';
import RaceParticipated from './components/RaceParticipated';
import BestOfBests from './components/BestOfBests';
import Table from './components/Table';

export default function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CareerHighlights />
      <Achievements />
      <Table/>
      <RaceParticipated/>
      <BestOfBests/>
    </div>
  );
}