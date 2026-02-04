import About from "./components/About";
import ChairmanMessage from "./components/ChairmanMessage";
import Media from "./components/Media";
import Vision from "./components/Vision";
import Hero from "./components/Hero";
import LogoMarquee from "./components/LogoMarquee";
import BetopiaGroupOverview from "./components/BetopiaGroupOverview";
import ProfessionalAchievements from "./components/ProfessionalAchievements";

import VisionToVenture from "./components/VisionToVenture";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ChairmanMessage />
      <Vision />
      <VisionToVenture />
      {/* <BetopiaGroupOverview /> */}
      <LogoMarquee />
      <ProfessionalAchievements />
      <Media />
    </>
  );
}
