"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  FaGlobe,
  FaArrowRight,
  FaRocket,
  FaShieldAlt,
  FaLightbulb,
  FaTools,
  FaUsers,
  FaLeaf,
  FaDatabase,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const ventures = [
  {
    name: "Bdcalling IT Ltd",
    role: "Parent Company",
    desc: "The flagship IT powerhouse dealing with ERP, specialized software, and large-scale digital transformation projects.",
    category: "IT & Software",
    url: "https://bdcalling.com",
    domain: "bdcalling.com",
    imageUrl: "/logo/bLogo@4x.png",
  },
  {
    name: "Bdcalling Enterprise",
    role: "Strategic Unit",
    desc: "Specializing in government tenders, OEM supply, and turnkey solutions serving Bangladesh’s infrastructure sectors.",
    category: "Government",
    url: "https://bdcallingenterprise.com",
    domain: "bdcallingenterprise.com",
    imageUrl: "/logo/bdcallingEnterprise@4x.png",
  },
  {
    name: "Bdcalling Academy",
    role: "Education Initiative",
    desc: "Shaping the future workforce with advanced IT training, scholarships, and career placement services.",
    category: "Education",
    url: "https://bdcalling.com",
    domain: "bdcalling.com",
    imageUrl: "/logo/BDcallingAcademy@4x.png",
  },
  {
    name: "ZenexCloud",
    role: "Cloud Infrastructure",
    desc: "Providing secure hosting, dedicated servers, and cloud solutions as the digital backbone for businesses.",
    category: "Cloud Services",
    url: "https://zenexcloud.com",
    domain: "zenexcloud.com",
    imageUrl: "/logo/zenexcloud@4x.png",
  },
  {
    name: "Softvence LLC",
    role: "Creative Agency",
    desc: "A full-service digital agency crafting sleek web experiences, branding, and mobile applications.",
    category: "Creative Agency",
    url: "https://softvence.agency",
    domain: "softvence.agency",
    imageUrl: "/logo/softvence@4x.png",
  },
  {
    name: "Sparktech Agency",
    role: "Tech Innovations",
    desc: "Blending creativity with technology to build games, AI tools, and next-gen interactive platforms.",
    category: "Game & AI",
    url: "https://sparktech.agency",
    domain: "sparktech.agency",
    imageUrl: "/logo/sparktechAgency@4x.png",
  },
  {
    name: "SM Technology",
    role: "Software Solutions",
    desc: "Delivering robust software solutions, from enterprise management tools to custom AI applications.",
    category: "Technology",
    url: "https://smtech24.com",
    domain: "smtech24.com",
    imageUrl: "/logo/smTechonology@4x.png",
  },
  {
    name: "Backbencher Studio",
    role: "Visual Storytelling",
    desc: "A premium design studio focused on motion graphics, branding strategies, and visual storytelling.",
    category: "Design Studio",
    url: "https://backbencher.studio",
    domain: "backbencher.studio",
    imageUrl: "/logo/backBencherStudio@4x.png",
  },
  {
    name: "JVAI",
    role: "AI & Automation",
    desc: "Revolutionizing industries with smart chatbots, automation tools, and machine learning models.",
    category: "AI Solutions",
    url: "https://joinventureai.com",
    domain: "joinventureai.com",
    imageUrl: "/logo/JVai@4x.png",
  },
  {
    name: "ScaleUp",
    role: "Digital Growth",
    desc: "Data-driven marketing agency helping brands scale through SEO, PPC, and social media strategies.",
    category: "Marketing",
    url: "https://scaleupadsagency.com",
    domain: "scaleupadsagency.com",
    imageUrl: "/logo/scaleUp@4x.png",
  },
  {
    name: "Opsori Holdings",
    role: "Real Estate",
    desc: "Developing next-generation commercial spaces and retail hubs built for sustainability and innovation.",
    category: "Real Estate",
    url: "https://opsori.com",
    domain: "opsori.com",
    imageUrl: "/logo/opsoriegro@4x.png",
  },
  {
    name: "Betopia PulseGrid",
    role: "Energy Solutions",
    desc: "Delivering smart grid systems, power generation solutions, and industrial energy support.",
    category: "Energy",
    url: "https://betopiapulsegrid.com",
    domain: "betopiapulsegrid.com",
    imageUrl: "/logo/pulseGrid@4x.png",
  },
  {
    name: "Fire AI",
    role: "Artificial Intelligence",
    desc: "Advanced AI research and development lab focused on predictive analytics and neural networks.",
    category: "AI Solutions",
    url: "#",
    domain: "fireai.io",
    imageUrl: "/logo/fireAi@4x.png",
  },
  {
    name: "Data Insight",
    role: "Data Analytics",
    desc: "Transforming raw data into actionable business intelligence for smarter decision making.",
    category: "Analytics",
    url: "#",
    domain: "datainsight.io",
    imageUrl: "/logo/dataInsight@4x.png",
  },
  {
    name: "Clay Stone",
    role: "Construction",
    desc: "Premium construction material supply and engineering consultancy for mega projects.",
    category: "Construction",
    url: "#",
    domain: "claystone.com",
    imageUrl: "/logo/clayStone@4x.png",
  },
  {
    name: "Pixelors Studio",
    role: "Digital Art",
    desc: "A creative hub for digital art, NFT collections, and high-end graphic assets.",
    category: "Design Studio",
    url: "#",
    domain: "pixelors.com",
    imageUrl: "/logo/pixelorsStudio@4x.png",
  },
  {
    name: "BeUp",
    role: "Startup Accelerator",
    desc: "Empowering early-stage startups with mentorship, funding, and strategic guidance.",
    category: "Incubator",
    url: "#",
    domain: "beup.io",
    imageUrl: "/logo/beUp@4x.png",
  },
];

export default function EcosystemClient() {
  const [activeTab, setActiveTab] = useState("All");
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
  });

  // Unique categories
  const categories = ["All", ...new Set(ventures.map((v) => v.category))];

  const filteredVentures =
    activeTab === "All"
      ? ventures
      : ventures.filter((v) => v.category === activeTab);

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* 1. HERO SECTION - Premium & Clean */}
      <section
        ref={headerRef}
        className="relative pt-40 pb-32 lg:pt-52 lg:pb-40 bg-slate-50 overflow-hidden"
      >
        {/* Abstract Blooms */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute -top-[10%] -right-[5%] w-[600px] h-[600px] bg-amber-100 rounded-full blur-[100px] opacity-60 mix-blend-multiply"></div>
          <div className="absolute top-[30%] -left-[10%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-[80px] opacity-60 mix-blend-multiply"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div
            className={`transition-all duration-1000 ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
          >
            <div className="inline-flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-amber-500"></span>
              <span className="text-amber-600 text-xs font-bold tracking-[0.4em] uppercase">
                The Conglomerate
              </span>
              <span className="h-px w-12 bg-amber-500"></span>
            </div>

            <h1 className="text-6xl lg:text-8xl font-bold text-slate-900 mb-8 leading-[0.9] tracking-tight">
              Betopia <br />
              <span className="text-transparent font-black bg-clip-text bg-linear-to-r from-amber-600 to-orange-600">
                Ecosystem
              </span>
            </h1>

            <p className="text-slate-500 max-w-3xl mx-auto text-xl lg:text-2xl font-light leading-relaxed">
              A synergistic network of{" "}
              <span className="text-amber-600 font-medium">17+ ventures</span>{" "}
              spanning diverse industries, unified by a single vision: Building
              a future-ready Bangladesh.
            </p>
          </div>
        </div>
      </section>

      {/* 3. VENTURES GRID */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header & Filter */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Our Concerns
              </h2>
              <p className="text-slate-500 text-lg">
                Detailed insights into our subsidiary companies and strategic
                units.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.slice(0, 6).map(
                (
                  cat, // Showing limited categories to avoid clutter
                ) => (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 border ${
                      activeTab === cat
                        ? "bg-slate-900 text-white border-slate-900"
                        : "bg-white text-slate-500 border-slate-200 hover:border-amber-500 hover:text-amber-600"
                    }`}
                  >
                    {cat}
                  </button>
                ),
              )}
              {categories.length > 6 && (
                <button
                  onClick={() => setActiveTab("All")}
                  className="px-4 py-2 text-[11px] font-bold text-amber-600 uppercase tracking-wider underline underline-offset-4"
                >
                  + More
                </button>
              )}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredVentures.map((venture, idx) => (
              <VentureCard key={idx} venture={venture} index={idx} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function VentureCard({ venture, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <a
      href={venture.url}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      className={`group block bg-white rounded-[1rem] p-8 border border-slate-200 hover:border-amber-200 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col h-full transform ${inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="w-full h-24 flex items-center justify-center mb-6 relative">
        <Image
          src={venture.imageUrl}
          alt={venture.name}
          fill
          className="object-contain px-4 group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="flex-grow flex flex-col items-center text-center">
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
          {venture.name}
        </h3>

        <p className="text-sm text-slate-500 leading-relaxed line-clamp-4">
          {venture.desc}
        </p>
      </div>

      <div className="w-full mt-4 pt-2 border-t border-slate-100">
        <span className="text-[10px] font-bold text-slate-400 group-hover:text-amber-600 transition-colors uppercase tracking-widest flex items-center gap-2">
          Visit Website
        </span>
      </div>
    </a>
  );
}
