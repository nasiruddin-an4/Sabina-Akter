"use client";

import { useInView } from "react-intersection-observer";

const sectors = [
  {
    title: "IT & Software",
    description:
      "Leading the digital revolution with cutting-edge software solutions, AI innovations, and scalable cloud architectures.",
    delay: 100,
  },
  {
    title: "Education & Skills",
    description:
      "Empowering the next generation through world-class training, coding academies, and skill development programs.",
    delay: 200,
  },
  {
    title: "Creative & Media",
    description:
      "Crafting compelling narratives and visual experiences through digital media, branding, and design studios.",
    delay: 300,
  },
  {
    title: "Business Enterprise",
    description:
      "Driving economic growth with strategic business ventures, consultancy, and sustainable enterprise solutions.",
    delay: 400,
  },
];

export default function BetopiaGroupOverview() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-slate-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-0.5 w-12 bg-brand-bright-orange"></span>
            <span className="text-brand-bright-orange font-bold uppercase tracking-widest text-sm">
              Our Ecosystem
            </span>
            <span className="h-0.5 w-12 bg-brand-bright-orange"></span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Betopia Group Overview
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            A diverse conglomerate driving innovation across technology,
            education, and media. We are united by a singular vision: to empower
            potential and build a sustainable future.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 border border-slate-100 shadow-lg shadow-slate-100/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group flex flex-col items-start h-full
                ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${sector.delay}ms` }}
            >
              {/* Text */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-bright-orange transition-colors">
                {sector.title}
              </h3>
              <p className="text-slate-500 leading-relaxed mb-6 grow">
                {sector.description}
              </p>

              {/* Action - visual only for now */}
              <div className="mt-auto flex items-center text-sm font-bold text-slate-400 group-hover:text-brand-bright-orange transition-colors cursor-pointer">
                Learn more{" "}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA / Highlight */}
        <div
          className={`mt-20 p-10 rounded-3xl bg-slate-900 relative overflow-hidden text-center transition-all duration-700 delay-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Building the Future, Today.
            </h3>
            <p className="text-slate-300 max-w-2xl mb-8">
              From startups to global enterprises, Betopia Group fosters a
              culture of excellence and integrity in every venture we undertake.
            </p>
            <button className="px-8 py-4 bg-brand-bright-orange text-white font-bold rounded-xl shadow-lg shadow-orange-500/30 hover:bg-orange-600 hover:shadow-orange-600/40 hover:-translate-y-1 transition-all duration-300">
              Explore Our Ventures
            </button>
          </div>

          {/* Decorative gradients */}
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-indigo-900/50 via-slate-900 to-indigo-900/50"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-bright-orange opacity-20 blur-3xl rounded-full"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
