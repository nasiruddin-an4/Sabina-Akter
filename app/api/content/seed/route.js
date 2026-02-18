import dbConnect from "@/lib/db";
import PageContent from "@/models/PageContent";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();

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

  try {
    // Upsert Hero
    await PageContent.findOneAndUpdate(
      { key: "hero" },
      { key: "hero", data: heroData },
      { upsert: true, new: true },
    );

    // Upsert About
    await PageContent.findOneAndUpdate(
      { key: "about" },
      { key: "about", data: aboutData },
      { upsert: true, new: true },
    );

    return NextResponse.json({
      success: true,
      message: "Page content seeded successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
