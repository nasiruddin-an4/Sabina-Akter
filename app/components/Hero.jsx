"use client";
import Image from "next/image";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

export default function Hero() {
  const socials = [
    { icon: FaFacebookF, link: "https://www.facebook.com/sabina.bdcalling/" },
    {
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/company/betopiagroup/posts/?feedView=all",
    },
    { icon: FaYoutube, link: "https://www.youtube.com/" },
    { icon: FaTwitter, link: "https://twitter.com/yourprofile" },
  ];

  return (
    <section className="relative w-full min-h-dvh lg:min-h-[85vh] lg:h-[85vh] h-auto pt-10 pb-12 lg:pt-32 lg:pb-0 overflow-hidden bg-white flex flex-col justify-center">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-linear-to-bl from-rose-50/50 via-white to-transparent -z-10"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl -z-10 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full py-12 lg:py-0">
        {/* Right Side: Image (Ordered First on Mobile) */}
        <div className="order-1 lg:order-2 relative h-[500px] lg:h-[650px] w-full flex justify-center lg:justify-end animate-fade-in-up">
          {/* Background Blob */}
          <svg
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] text-rose-50/50 -z-10 animate-pulse-slow"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.8,32.4C59.4,43.3,47.9,52.2,35.6,60.7C23.3,69.2,10.2,77.3,-1.9,80.6C-14,83.9,-20.9,82.4,-31.1,75.9C-41.3,69.4,-54.8,57.9,-64.5,45.4C-74.2,32.9,-80.1,19.4,-81.4,5.3C-82.7,-8.8,-79.4,-23.5,-71.2,-35.8C-63,-48.1,-49.9,-58,-36.5,-65.7C-23.1,-73.4,-9.4,-78.9,4.4,-86.5L18.2,-94.1"
              transform="translate(100 100)"
            />
          </svg>

          <div className="relative h-full w-[98%] lg:w-full rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/50 group border-[6px] border-white animate-float">
            <Image
              src="/chairman_betopia.webp"
              alt="Sabina Akter - Chairperson"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              priority
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

            {/* Floating content */}
            <div className="absolute bottom-4 left-4 right-4 lg:bottom-8 lg:left-8 lg:right-8 text-white">
              <div className="backdrop-blur-md bg-white/10 border border-white/20 p-4 lg:p-6 rounded-2xl">
                <p className="font-serif italic text-lg lg:text-xl leading-relaxed mb-4">
                  "True leadership is about creating a platform where others can
                  stand tall."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-gold"></div>
                  <span className="text-xs font-bold tracking-widest text-gold uppercase">
                    Chairperson, Betopia Group
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Left Side: Content (Ordered Second on Mobile) */}
        <div
          className="order-2 lg:order-1 space-y-8 animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          {/* Heading */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              Empowering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600">
                People Through
              </span>{" "}
              <br />
              <span className="font-black text-rose-500 relative italic tracking-wider">
                Innovation.
                <svg
                  className="absolute -bottom-2 lg:-bottom-2 left-0 w-full h-3 text-gold/20"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>
            <p className="text-md md:text-lg text-slate-600 max-w-lg leading-relaxed mx-auto lg:mx-0">
              <strong className="text-slate-900 font-semibold">
                Sabina Akter
              </strong>{" "}
              represents the new era of leadership—combining grace with grit.
              She is dedicated to empowering women and youth, building
              sustainable ecosystems, and driving national growth through the{" "}
              <span className="text-navy-900 font-medium">Betopia Group</span>.
            </p>
          </div>

          {/* Social Links & CTA */}
          <div className="flex flex-col lg:flex-row items-center gap-8 pt-4 justify-center lg:justify-start">
            <a
              href="/contact"
              className="py-4 text-sm font-bold tracking-widest transition-all duration-300"
            >
              Connect With Me
            </a>
            <div className="flex gap-4 lg:border-l border-slate-200 lg:pl-8">
              {socials.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-500 hover:text-gold hover:border-gold transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <item.icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
