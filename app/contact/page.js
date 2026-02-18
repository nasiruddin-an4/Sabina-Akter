import ContactClient from "./ContactClient";
import dbConnect from "@/lib/db";
import PageContent from "@/models/PageContent";

export const metadata = {
  title: "Book a Meeting | Sabina Akter",
  description:
    "Schedule a meeting with Sabina Akter, Chairperson of Betopia Group. Request an appointment for business discussions.",
};

async function getSiteInfo() {
  try {
    await dbConnect();
    const data = await PageContent.findOne({ key: "site-info" }).lean();
    return data ? JSON.parse(JSON.stringify(data.data)) : null;
  } catch (error) {
    console.error("Failed to fetch site info:", error);
    return null;
  }
}

export default async function ContactPage() {
  const siteInfo = await getSiteInfo();
  return <ContactClient siteInfo={siteInfo} />;
}
