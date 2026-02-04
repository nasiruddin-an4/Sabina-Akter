"use client";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaMapMarkerAlt,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Me", href: "#about" },
    { name: "My Ventures", href: "#ecosystem" },
    { name: "Vision Story", href: "#vision" },
    { name: "Media", href: "#news" },
    { name: "Book Appointment", href: "#contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Quotes", href: "#quotes" },
    { name: "News", href: "#news" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 mt-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-5 space-y-8 pr-0 lg:pr-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                Sabina Akter
              </h2>
              <p className="text-brand-bright-orange font-bold text-sm tracking-widest uppercase mb-6">
                VISIONARY . LEADER . ENTREPRENEUR
              </p>
              <p className="text-slate-400 leading-relaxed max-w-md">
                Empowering people and organizations to reach their highest
                potential through innovation, leadership, and sustainable
                business practices.
              </p>
            </div>

            {/* Social Icons - Now on the left */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/sabina.bdcalling/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-brand-bright-orange hover:text-white transition-all duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-brand-bright-orange hover:text-white transition-all duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/betopiagroup/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-brand-bright-orange hover:text-white transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-brand-bright-orange hover:text-white transition-all duration-300"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-brand-bright-orange transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-white mb-6">Legal</h3>
            <ul className="space-y-4">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-brand-bright-orange transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold text-white mb-6">Contact Us</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-500 shrink-0 mt-1">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-slate-400 text-xs uppercase font-bold tracking-wider mb-1">
                    Corporate Office
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Level+6,+59+%26+61,+South+Avenue,+Lotus+Kamal+Tower-2,+Gulshan+Ave,+Dhaka+1212"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm leading-relaxed hover:text-brand-bright-orange transition-colors"
                  >
                    Level 6, 59 & 61, South Avenue, Lotus Kamal Tower-2, Gulshan
                    Ave, Dhaka 1212.
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center text-purple-500 shrink-0 mt-1">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-slate-400 text-xs uppercase font-bold tracking-wider mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:contact@sabinaakter.com"
                    className="text-white text-sm hover:text-brand-bright-orange transition-colors"
                  >
                    contact@sabinaakter.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-900 mb-4"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">
            &copy; {currentYear} Betopia Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
