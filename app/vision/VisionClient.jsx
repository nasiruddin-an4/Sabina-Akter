"use client";
import React from "react";
import Image from "next/image";
import CountUp from "react-countup";
import {
  Target,
  Users,
  Network,
  Globe,
  ArrowRight,
  TrendingUp,
  Lightbulb,
  Zap,
} from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function VisionClient() {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const visionPillars = [
    {
      icon: <Users size={32} />,
      title: "Human Empowerment",
      desc: "Creating a platform where 30,000 talents can thrive, innovate, and lead global projects.",
      color: "from-blue-500 to-cyan-500",
      bg: "bg-blue-50",
      accent: "text-blue-600",
    },
    {
      icon: <Network size={32} />,
      title: "Sustainable Ecosystem",
      desc: "Building a interconnected network of SBUs that support and uplift each other organically.",
      color: "from-emerald-500 to-teal-500",
      bg: "bg-emerald-50",
      accent: "text-emerald-600",
    },
    {
      icon: <Globe size={32} />,
      title: "Global Integration",
      desc: "Positioning Bangladesh as a key player in the global technology and service export market.",
      color: "from-indigo-500 to-purple-500",
      bg: "bg-indigo-50",
      accent: "text-indigo-600",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 overflow-hidden font-sans">
      {/* Immersive Hero Section - Light Theme */}
      <section
        ref={heroRef}
        className="relative pt-40 pb-32 lg:pt-52 lg:pb-40 bg-white overflow-hidden"
      >
        {/* Ambient Background */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute -top-[10%] -right-[5%] w-[700px] h-[700px] bg-amber-50 rounded-full blur-[100px] opacity-60 mix-blend-multiply"></div>
          <div className="absolute top-[30%] -left-[10%] w-[600px] h-[600px] bg-blue-50 rounded-full blur-[80px] opacity-60 mix-blend-multiply"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div
              className={`lg:col-span-7 transition-all duration-1000 transform ${
                heroInView
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-50 border border-slate-100 mb-8 shadow-sm">
                <Target className="text-amber-600" size={16} />
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-500">
                  The Blueprint 2030
                </span>
              </div>

              <h1 className="text-6xl lg:text-9xl font-black text-slate-900 mb-8 leading-[0.9] tracking-tight">
                Visionary <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-600 to-orange-600">
                  Impact.
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-slate-500 font-light leading-relaxed max-w-2xl mb-12">
                &quot;Leadership is not about being in charge. It is about
                taking care of those in your charge.&quot; –{" "}
                <span className="font-semibold text-slate-900">
                  Sabina Akter&apos;s
                </span>{" "}
                driving philosophy for 2030.
              </p>

              <div className="flex items-center gap-4 px-6 border-l border-slate-200">
                <div className="text-3xl font-bold text-slate-900">12%</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-widest leading-tight">
                  Current Progress <br /> Towards Goal
                </div>
              </div>
            </div>

            {/* Right Visualization - Clean Circular & Light */}
            <div
              className={`lg:col-span-5 relative transition-all duration-1000 delay-300 transform ${
                heroInView
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="relative w-full aspect-square flex items-center justify-center">
                {/* Rotating Rings */}
                <div className="absolute inset-0 border border-dashed border-slate-200 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-10 border border-amber-100 rounded-full animate-reverse-spin-slow"></div>

                {/* Central Counter */}
                <div className="relative z-20 text-center bg-white/80 backdrop-blur-3xl p-12 lg:p-16 rounded-full border border-white shadow-2xl shadow-slate-200/50">
                  <div className="text-[10px] text-amber-600 font-bold tracking-[0.4em] uppercase mb-4">
                    Target Talents
                  </div>
                  <div className="text-8xl lg:text-9xl font-black tracking-tighter mb-2 text-slate-900">
                    {heroInView ? <CountUp end={30} duration={3} /> : "0"}
                    <span className="text-amber-500">K</span>
                  </div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                    By year 2030
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Philosophy & Pillars - Premium Light Cards */}
      <section id="details" className="py-20 relative bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-slate-900">
              Built on a Foundation of{" "}
              <span className="font-serif italic text-amber-600">Trust.</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed font-light">
              Our vision isn&apos;t just a number. It&apos;s about creating a
              sustainable future where every individual has the opportunity to
              be their best self.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visionPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="group relative p-8 bg-white rounded-[1rem] border border-slate-100 duration-500 overflow-hidden"
              >
                {/* Hover Gradient */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${pillar.color} blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-700`}
                ></div>

                <div className="relative text-center flex flex-col items-center">
                  <div
                    className={`w-20 h-20 ${pillar.bg} rounded-3xl flex items-center justify-center ${pillar.accent} mb-8 group-hover:scale-110 transition-transform duration-500`}
                  >
                    {pillar.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Progress Stats Section - Clean & Modern */}
      <section
        ref={statsRef}
        className="py-20 relative bg-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            {/* Stats Left */}
            <div
              className={`space-y-12 transition-all duration-1000 ${
                statsInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div>
                <h4 className="text-amber-600 text-xs font-bold tracking-[0.4em] uppercase mb-4">
                  Strategic Goals
                </h4>
                <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  The Roadmap <br /> To{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-600 to-orange-600 font-serif italic pr-2">
                    30,000.
                  </span>
                </h2>
              </div>

              <div className="space-y-10">
                {[
                  {
                    label: "Talent Acquisition",
                    value: 45,
                    color: "bg-blue-500",
                  },
                  {
                    label: "Infrastructure Readiness",
                    value: 30,
                    color: "bg-amber-500",
                  },
                  {
                    label: "Global Partnership",
                    value: 65,
                    color: "bg-emerald-500",
                  },
                ].map((stat, idx) => (
                  <div key={idx} className="space-y-4">
                    <div className="flex justify-between text-xs font-bold tracking-widest uppercase text-slate-900">
                      <span>{stat.label}</span>
                      <span className="text-slate-400">
                        {stat.value}% Committed
                      </span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${stat.color} transition-all duration-1000 delay-500 ease-out`}
                        style={{ width: statsInView ? `${stat.value}%` : "0%" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 flex items-start gap-6 hover:bg-slate-100 transition-colors">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-amber-600 shrink-0 shadow-sm border border-slate-100">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-slate-900 text-lg">
                      Steady Growth Curve
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      We are currently maintaining a 28% year-on-year growth
                      rate in our talent pool, putting us exactly on track for
                      our 2030 target.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Right */}
            <div
              className={`relative transition-all duration-1000 delay-300 ${
                statsInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="relative h-[650px] w-full rounded-[3.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 group">
                <Image
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
                  alt="Strategic Planning"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent"></div>

                {/* Floating Content Box */}
                <div className="absolute bottom-8 left-8 right-8 p-8 bg-white/90 backdrop-blur-xl rounded-[2.5rem] border border-white/50 shadow-lg">
                  <p className="text-lg font-serif italic text-slate-800 leading-relaxed mb-6">
                    &quot;We are building more than a business; we are building
                    a legacy of opportunity for the next generation of
                    Bangladesh.&quot;
                  </p>
                  <div className="flex items-center gap-4 border-t border-slate-200 pt-6">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-xs">
                      SA
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                        Sabina Akter
                      </div>
                      <div className="text-[10px] font-bold tracking-widest uppercase text-slate-500">
                        Founder & Group CEO
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
