"use client";
import {
  FaUsers,
  FaGlobe,
  FaCheckCircle,
  FaAward,
  FaCalendarAlt,
  FaBriefcase,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: FaUsers,
      value: "5000+",
      label: "Global Talent",
      color: "text-brand-bright-orange",
    },
    {
      icon: FaGlobe,
      value: "22+",
      label: "Countries",
      color: "text-brand-bright-orange",
    },
    {
      icon: FaCheckCircle,
      value: "1200+",
      label: "Empowerment",
      color: "text-brand-bright-orange",
    },
    {
      icon: FaCalendarAlt,
      value: "10+",
      label: "Years Experience",
      color: "text-brand-bright-orange",
    },
    {
      type: "combined",
      items: [
        {
          icon: FaAward,
          value: "20+",
          label: "Awards",
          color: "text-brand-bright-orange",
        },
        {
          icon: FaBriefcase,
          value: "5+",
          label: "Ventures",
          color: "text-brand-bright-orange",
        },
      ],
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Only Text */}
          <div
            className={`space-y-8 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-0.5 w-12 bg-brand-bright-orange"></span>
                <span className="text-brand-bright-orange font-bold uppercase tracking-widest text-sm">
                  About The Leader
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.15]">
                Crafting a Legacy of{" "}
                <span className="text-brand-bright-orange">Impact</span>
              </h2>
            </div>

            {/* Narrative Content */}
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900 font-medium">
                  Sabina Akter
                </strong>{" "}
                is the Chairperson of Betopia Group, dedicated to redefining
                excellence across industries through innovation.
              </p>
              <p>
                As a pioneering Co-Founder of{" "}
                <strong className="text-slate-900 font-medium">
                  Bdcalling IT Ltd.
                </strong>
                , her journey is a testament to resilience—transforming a
                startup into a global powerhouse that creates thousands of
                opportunities for youth and women.
              </p>
              <p>
                Starting with a vision to bridge the digital gap, she has
                successfully led teams to deliver thousands of projects
                globally.
              </p>
            </div>

            {/* Quote Section (Text Only Layout) */}
            <div className="pt-2">
              <blockquote className="border-l-4 border-brand-bright-orange pl-6 py-2">
                <p className="text-xl font-medium italic text-slate-800 mb-2">
                  &ldquo;To empower people and organizations to reach their
                  highest potential.&rdquo;
                </p>
                <cite className="text-sm font-bold text-slate-500 not-italic uppercase tracking-wider">
                  — Betopia Group Mission
                </cite>
              </blockquote>
            </div>
          </div>

          {/* Right Side: 4 Boxes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`bg-white p-8 rounded-xl border border-slate-100 transition-all duration-500 group ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } ${stat.type === "combined" ? "col-span-1 sm:col-span-2" : ""}`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                {stat.type === "combined" ? (
                  <div className="grid grid-cols-2 divide-x divide-slate-100">
                    {stat.items.map((subStat, subIdx) => (
                      <div
                        key={subIdx}
                        className={`flex flex-col items-start ${
                          subIdx === 0 ? "pr-8" : "pl-8"
                        }`}
                      >
                        <div className={`mb-4 ${subStat.color}`}>
                          <subStat.icon size={24} />
                        </div>
                        <h4 className="text-4xl font-bold text-slate-900 mb-2 tracking-tight">
                          {subStat.value}
                        </h4>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                          {subStat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-start">
                    <div className={`mb-4 ${stat.color}`}>
                      <stat.icon size={24} />
                    </div>
                    <h4 className="text-4xl font-bold text-slate-900 mb-2 tracking-wider">
                      {stat.value}
                    </h4>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                      {stat.label}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
