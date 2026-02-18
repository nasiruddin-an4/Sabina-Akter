import { Outfit } from "next/font/google";
import "./globals.css";
import LayoutProvider from "./components/LayoutProvider";
import dbConnect from "@/lib/db";
import PageContent from "@/models/PageContent";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "Sabina Akter | Visionary Leadership",
  description:
    "Chairperson, Betopia Group | Champion of Youth & Women's Leadership",
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

export default async function RootLayout({ children }) {
  const siteInfo = await getSiteInfo();

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} font-sans antialiased bg-white text-slate-900 selection:bg-orange-500 selection:text-white`}
      >
        <LayoutProvider siteInfo={siteInfo}>{children}</LayoutProvider>
      </body>
    </html>
  );
}
