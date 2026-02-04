"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Flag,
  Award,
  Building2,
  Briefcase,
  Rocket,
  Globe,
  Users,
  ArrowRight,
  Calendar,
  Star,
  Zap,
} from "lucide-react";
import { useInView } from "react-intersection-observer";

const timelineEvents = [
  {
    year: "2014",
    title: "The Inception",
    tagline: "A Seed of Vision",
    description:
      "The journey began in a small room with a massive vision. Sabina Akter identified the untapped potential in Bangladesh's digital landscape, focusing on skill development and core IT services.",
    icon: Flag,
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    details: [
      "Initial core team formation",
      "Market research & strategy",
      "First service deployment",
    ],
    color: "from-blue-500/20 to-transparent",
    accent: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    year: "2017",
    title: "Bdcalling IT Ltd",
    tagline: "Scaling New Heights",
    description:
      "Co-founding Bdcalling IT marked a pivotal shift from local services to global scale. We established rigorous quality standards that would soon make us a household name in IT exports.",
    icon: Briefcase,
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop",
    details: [
      "International client acquisition",
      "100+ Team members",
      "State-of-the-art workspace",
    ],
    color: "from-amber-500/10 to-transparent",
    accent: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    year: "2020",
    title: "National ICT Award",
    tagline: "Excellence Recognized",
    description:
      "Winning the BASIS National ICT Award solidified our position as industry leaders. It was a moment of national pride and a validation of our commitment to technological innovation.",
    icon: Award,
    image:
      "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=2070&auto=format&fit=crop",
    details: [
      "National industry recognition",
      "Innovator of the year nominee",
      "Advocacy for Tech education",
    ],
    color: "from-emerald-500/10 to-transparent",
    accent: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    year: "2023",
    title: "The Global Footprint",
    tagline: "Beyond Borders",
    description:
      "Expanding to 22+ countries, Betopia Group became a truly global entity. We diversified into Fintech, Real Estate, and AI, proving that Bangladeshi leadership has no limits.",
    icon: Globe,
    image:
      "https://images.unsplash.com/photo-1529400971008-f56fa2379d38?q=80&w=2070&auto=format&fit=crop",
    details: [
      "Operations in 22+ Countries",
      "Diverse Business SBU formation",
      "Global partnership networks",
    ],
    color: "from-purple-500/10 to-transparent",
    accent: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
  {
    year: "2025",
    title: "Chairperson's Era",
    tagline: "Leading the Conglomerate",
    description:
      "Assuming the role of Chairperson, Sabina Akter now leads 5,000+ employees. The focus is now on 'Vision 2030'—a blueprint for national impact and global tech dominance.",
    icon: Building2,
    image: "https://i.postimg.cc/P5R6X9q2/chairman_betopia.webp",
    details: [
      "Directing 20+ Business Units",
      "5,000+ Job creation impact",
      "Vision 2030 Strategic Lead",
    ],
    color: "from-slate-900/40 to-transparent",
    accent: "text-slate-900",
    bg: "bg-slate-50",
    border: "border-slate-200",
  },
];

export default function JourneyClient() {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });
  const { ref: nextRef, inView: nextInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Editorial Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 bg-white overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute -top-[10%] -right-[5%] w-[600px] h-[600px] bg-amber-50 rounded-full blur-[100px] opacity-60 mix-blend-multiply"></div>
          <div className="absolute top-[30%] -left-[10%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-[80px] opacity-60 mix-blend-multiply"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div
            className={`transition-all duration-1000 cubic-bezier(0.23, 1, 0.32, 1) text-center ${
              heroInView
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-amber-500"></span>
              <span className="text-amber-600 text-xs font-bold tracking-[0.5em] uppercase">
                Sabina Akter
              </span>
              <span className="h-px w-12 bg-amber-500"></span>
            </div>

            <h1 className="text-6xl lg:text-9xl font-bold text-slate-900 mb-8 leading-[0.9] tracking-tight">
              Legacy of <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-600 to-orange-600">
                Resilience.
              </span>
            </h1>

            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl mx-auto">
              From a humble beginning to leading a global conglomerate. Explore
              the milestones that define the Entrepreneur saga of Sabina Akter.
            </p>
          </div>
        </div>
      </section>

      {/* Box-Type Grid Layout */}
      <section className="py-20 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {timelineEvents.map((event, index) => (
              <TimelineCard key={index} event={event} index={index} />
            ))}

            {/* "What's Next" Card */}
            <div
              ref={nextRef}
              className={`group relative bg-slate-900 rounded-xl p-10 flex flex-col justify-center items-center text-center overflow-hidden h-full min-h-[400px] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                nextInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${timelineEvents.length * 100}ms` }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-amber-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center text-amber-400 mb-8 mx-auto group-hover:scale-110 transition-transform duration-500">
                  <Rocket size={32} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  What&apos;s Next?
                </h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  The vision extends far beyond today. We are building the
                  foundations for 2030 and beyond.
                </p>
                <Link
                  href="/vision"
                  className="inline-flex items-center gap-2 text-white font-bold border-b border-amber-500 pb-1 hover:text-amber-400 transition-colors"
                >
                  View Vision 2030 <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 mx-auto mb-6">
            <Star size={24} />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            &quot;Every milestone is just a stepping stone to the next great
            challenge.&quot;
          </h2>
          <p className="text-slate-500 uppercase tracking-widest font-bold text-xs">
            - Sabina Akter
          </p>
        </div>
      </section>
    </div>
  );
}

function TimelineCard({ event, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`group relative bg-white rounded-xl p-8 border border-slate-200 shadow-lg shadow-slate-100/50 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full overflow-hidden ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Background Gradient */}
      <div
        className={`absolute top-0 right-0 w-64 h-64 bg-linear-to-br ${event.color} rounded-full blur-[60px] -mr-20 -mt-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
      ></div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-8">
          <span className="text-5xl font-black text-slate-100 group-hover:text-slate-900 transition-colors duration-500 select-none">
            {event.year}
          </span>
          <div
            className={`w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 transition-transform duration-500 group-hover:scale-110`}
          >
            <event.icon size={24} />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
          {event.title}
        </h3>
        <p className="text-xs font-bold text-slate-400 tracking-widest uppercase mb-6">
          {event.tagline}
        </p>

        <p className="text-slate-500 leading-relaxed mb-8 flex-grow">
          {event.description}
        </p>

        {/* Micro Details */}
        <div className="space-y-3 pt-6 border-t border-slate-50">
          {event.details.map((detail, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 text-sm text-slate-600"
            >
              <div className={`w-1.5 h-1.5 rounded-full bg-amber-600`}></div>
              {detail}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
