import dbConnect from "@/lib/db";
import PageContent from "@/models/PageContent";
import About from "./components/About";
import ChairmanMessage from "./components/ChairmanMessage";
import Media from "./components/Media";
import Vision from "./components/Vision";
import Hero from "./components/Hero";
import LogoMarquee from "./components/LogoMarquee";
import BetopiaGroupOverview from "./components/BetopiaGroupOverview";
import ProfessionalAchievements from "./components/ProfessionalAchievements";

import VisionToVenture from "./components/VisionToVenture";

import News from "@/models/News";

export const dynamic = "force-dynamic";

async function getContent(key) {
  await dbConnect();
  const content = await PageContent.findOne({ key }).lean();
  return content ? JSON.parse(JSON.stringify(content.data)) : null;
}

async function getNews() {
  await dbConnect();
  const news = await News.find({}).sort({ createdAt: -1 }).limit(3).lean();
  return JSON.parse(JSON.stringify(news));
}

export default async function Home() {
  const heroData = await getContent("hero");
  const aboutData = await getContent("about");
  const chairmanMessageData = await getContent("chairmanMessage");
  const visionData = await getContent("vision");
  const visionToVentureData = await getContent("visionToVenture");
  const achievementsData = await getContent("achievements");
  const newsData = await getNews();
  const siteInfo = await getContent("site-info");

  return (
    <>
      <Hero data={heroData} siteInfo={siteInfo} />
      <About data={aboutData} />
      <ChairmanMessage data={chairmanMessageData} />
      <Vision data={visionData} />
      <VisionToVenture data={visionToVentureData} />
      {/* <BetopiaGroupOverview /> */}
      <LogoMarquee />
      <ProfessionalAchievements data={achievementsData} />
      <Media news={newsData} />
    </>
  );
}
