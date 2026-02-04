import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} font-sans antialiased bg-white text-slate-900 selection:bg-orange-500 selection:text-white`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
