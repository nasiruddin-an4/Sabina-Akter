"use client";
import { FaUsers, FaGlobe, FaCalendarAlt, FaBriefcase } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export default function About({ data }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Fallback data
  const content = data || {
    badge: "About The Leader",
    titlePrefix: "Crafting a Legacy of",
    titleHighlight: "Impact",
    paragraphs: [],
    quote: "",
    quoteAuthor: "",
    stats: [],
  };

  const iconMap = {
    "Global Talent": FaUsers,
    Countries: FaGlobe,
    Experience: FaCalendarAlt,
    Ventures: FaBriefcase,
  };

  return (
    <section
      id="about"
      className="py-24 bg-slate-50 relative px-2 md:px-6 lg:px-0"
      ref={ref}
    >
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
                  {content.badge}
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.15]">
                {content.titlePrefix}{" "}
                <span className="text-brand-bright-orange">
                  {content.titleHighlight}
                </span>
              </h2>
            </div>

            {/* Narrative Content */}
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              {content.paragraphs &&
                content.paragraphs.map((p, idx) => <p key={idx}>{p}</p>)}
            </div>

            {/* Quote Section (Text Only Layout) */}
            <div className="pt-2">
              <blockquote className="border-l-4 border-brand-bright-orange pl-6 py-2">
                <p className="text-xl font-medium italic text-slate-800 mb-2">
                  &ldquo;{content.quote}&rdquo;
                </p>
                <cite className="text-sm font-bold text-slate-500 not-italic uppercase tracking-wider">
                  {content.quoteAuthor}
                </cite>
              </blockquote>
            </div>
          </div>

          {/* Right Side: 4 Boxes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {content.stats &&
              content.stats.map((stat, idx) => {
                const Icon = iconMap[stat.label] || FaUsers;
                return (
                  <div
                    key={idx}
                    className={`bg-white p-8 rounded-xl border border-slate-100 transition-all duration-500 group ${
                      inView
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${idx * 150}ms` }}
                  >
                    <div className="flex flex-col items-start">
                      <div className="mb-4 text-brand-bright-orange">
                        <Icon size={24} />
                      </div>
                      <h4 className="text-4xl font-bold text-slate-900 mb-2 tracking-wider">
                        {stat.value}
                      </h4>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
