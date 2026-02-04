"use client";
import Link from "next/link";
import React from "react";
import { Flag, Award, Building2, Briefcase, Rocket } from "lucide-react";

const timelineEvents = [
  {
    year: "2014",
    title: "The Inception",
    description: "Started the journey with a vision to create opportunities.",
    fullDescription:
      "Started the journey with a vision to create opportunities and contribute to the digital landscape of Bangladesh.",
    icon: Flag,
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
  },
  {
    year: "2017",
    title: "Co-Founding Bdcalling IT",
    description: "Laid the foundation for a leading IT firm.",
    fullDescription:
      "Co-founded Bdcalling IT Ltd, laying the foundation for what would become one of the nation's largest IT firms.",
    icon: Briefcase,
    color: "from-purple-500 to-pink-500",
    bg: "bg-purple-50",
  },
  {
    year: "2020",
    title: "National Recognition",
    description: "Received the prestigious BASIS National ICT Award.",
    fullDescription:
      "Received the prestigious BASIS National ICT Award for outstanding contribution to the IT industry.",
    icon: Award,
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
  },
  {
    year: "2023",
    title: "Global Expansion",
    description: "Expanded operations to 22+ countries.",
    fullDescription:
      "Expanded operations to 22+ countries, establishing a robust global footprint for Betopia Group.",
    icon: Rocket,
    color: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50",
  },
  {
    year: "2025",
    title: "Chairperson, Betopia Group",
    description: "Leading 3,500+ employees towards Vision 2030.",
    fullDescription:
      "Assumed the role of Chairperson, leading a diversified conglomerate of 3,500+ employees towards 2030 vision.",
    icon: Building2,
    color: "from-rose-500 to-red-500",
    bg: "bg-rose-50",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="relative py-2 bg-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        <div className="absolute top-[20%] right-[5%] w-[500px] h-[500px] bg-slate-100 rounded-full blur-[100px] opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            The Entrepreneur <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-600 to-orange-600">
              Chronicles.
            </span>
          </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl border border-slate-100 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between h-full overflow-hidden"
            >
              {/* Gradient Border Overlay on Hover */}
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-linear-to-r ${event.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
              ></div>

              <div>
                <div className="flex justify-between items-start mb-8">
                  <span className="text-4xl font-extrabold text-slate-200 group-hover:text-slate-900 transition-colors duration-500">
                    {event.year}
                  </span>
                  <div
                    className={`w-14 h-14 ${event.bg} rounded-2xl flex items-center justify-center text-xl shadow-inner group-hover:scale-110 transition-transform duration-500`}
                  >
                    <event.icon
                      className={`w-6 h-6 text-slate-400 group-hover:text-slate-900 transition-colors duration-500`}
                    />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors">
                  {event.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {event.fullDescription}
                </p>
              </div>

              {/* Decorative Circle */}
              <div
                className={`absolute -bottom-10 -right-10 w-32 h-32 bg-linear-to-br ${event.color} rounded-full opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-500 pointer-events-none`}
              ></div>
            </div>
          ))}

          {/* Final "Present" Card */}
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 flex flex-col justify-center items-center text-center group cursor-pointer overflow-hidden relative">
            <div className="absolute inset-0 bg-linear-to-br from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                What&apos;s Next?
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                The journey continues towards 2030.
              </p>
              <div className="inline-flex items-center text-amber-500 font-bold text-xs uppercase tracking-widest border-b border-amber-500 pb-1">
                <Link href="/vision">View Future Vision</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
