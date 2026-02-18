const mongoose = require("mongoose");
require("dotenv").config({ path: ".env.local" });

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error("No MONGODB_URI found in .env.local");
  process.exit(1);
}

const PageContentSchema = new mongoose.Schema(
  {
    key: { type: String, required: true, unique: true },
    data: { type: mongoose.Schema.Types.Mixed, required: true },
  },
  { timestamps: true },
);

const PageContent =
  mongoose.models.PageContent ||
  mongoose.model("PageContent", PageContentSchema);

async function seedContent() {
  console.log("Connecting to DB...");
  try {
    await mongoose.connect(uri);
    console.log("Connected.");

    const heroData = {
      titlePrefix: "Empowering",
      titleHighlight: "People Through",
      titleSuffix: "Innovation.",
      description:
        "Sabina Akter represents the new era of leadership—combining grace with grit. She is dedicated to empowering women and youth, building sustainable ecosystems, and driving national growth through the Betopia Group.",
      image: "/chairman_betopia.webp",
      socials: [
        {
          platform: "facebook",
          link: "https://www.facebook.com/sabina.bdcalling/",
        },
        {
          platform: "linkedin",
          link: "https://www.linkedin.com/in/sabina-akter-8b7165242/",
        },
        { platform: "youtube", link: "https://www.youtube.com/@BetopiaGroup" },
      ],
    };

    const aboutData = {
      badge: "About The Leader",
      titlePrefix: "Crafting a Legacy of",
      titleHighlight: "Impact",
      paragraphs: [
        "Sabina Akter is the Chairperson of Betopia Group, dedicated to redefining excellence across industries through innovation.",
        "As a pioneering Co-Founder of Bdcalling IT Ltd., her journey is a testament to resilience—transforming a startup into a global powerhouse that creates thousands of opportunities for youth and women.",
        "Starting with a vision to bridge the digital gap, she has successfully led teams to deliver thousands of projects globally.",
      ],
      quote:
        "To empower people and organizations to reach their highest potential.",
      quoteAuthor: "— Betopia Group Mission",
      stats: [
        { value: "5000+", label: "Global Talent" },
        { value: "22+", label: "Countries" },
        { value: "10+", label: "Experience" },
        { value: "5+", label: "Ventures" },
      ],
    };

    await PageContent.findOneAndUpdate(
      { key: "hero" },
      { key: "hero", data: heroData },
      { upsert: true, new: true },
    );
    console.log("Seeded Hero data.");

    await PageContent.findOneAndUpdate(
      { key: "about" },
      { key: "about", data: aboutData },
      { upsert: true, new: true },
    );
    console.log("Seeded About data.");
  } catch (e) {
    console.error(e);
  } finally {
    await mongoose.disconnect();
  }
}

seedContent();
