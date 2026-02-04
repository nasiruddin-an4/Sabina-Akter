"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaUsers, FaRocket, FaHandHoldingHeart, FaBullseye } from "react-icons/fa";
import Image from "next/image";

export default function Vision() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section id="vision" className="relative py-32 bg-slate-950 overflow-hidden text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="https://i.postimg.cc/3xcL8VRr/betopiaCity.png"
          alt="Betopia City Vision"
          fill
          className="object-cover opacity-40 mix-blend-luminosity"
          priority
        />
        {/* Gradients to fade image into background and ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50"></div>
      </div>

      {/* Abstract Background Shapes (Subtle underneath) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
              <FaBullseye className="text-gold" />
              <span className="text-xs font-bold tracking-[0.2em] text-white uppercase">
                Vision 2030
              </span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-bold leading-tight drop-shadow-2xl">
              Empowering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                30,000 Talent
              </span> <br />
              <span className="text-4xl lg:text-6xl text-white">Within 2030</span>
            </h2>

            <p className="text-lg text-slate-300 font-light leading-relaxed max-w-lg drop-shadow-md">
              A future-ready metropolis of innovation and entrepreneurship. By 2030, our goal is to empower <strong>30,000 Talents</strong>, creating a sustainable ecosystem where human potential meets global opportunity.
            </p>


            <div className="pt-8 w-full max-w-sm">
              <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden relative">
                <div className="absolute top-0 left-0 h-full w-[12%] bg-gradient-to-r from-teal-500 to-emerald-400">
                  <div className="absolute top-0 right-0 h-full w-2 bg-white/50 blur-[2px]"></div>
                </div>
              </div>
              <div className="flex justify-between mt-2 text-xs font-mono text-slate-400">
                <span>2026 (Current)</span>
                <span>2030 (Goal)</span>
              </div>
            </div>
          </div>

          {/* Right Visual / Circular Progress */}
          <div className="relative flex justify-center items-center lg:justify-end">
            {/* Glass Card for Counter */}
            <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px]">

              {/* Spinning Rings */}
              <div className="absolute inset-0 rounded-full border border-teal-500/20 animate-spin-slow"></div>
              <div className="absolute inset-4 rounded-full border border-white/10 border-dashed animate-reverse-spin-slow"></div>

              {/* Central Circle */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/80 backdrop-blur-xl rounded-full shadow-2xl border border-white/10 p-10 text-center z-10">
                <span className="text-sm text-slate-400 uppercase tracking-widest mb-2">Impact Goal</span>
                <div className="text-9xl font-bold text-white mb-4 font-sans tracking-tighter drop-shadow-lg">
                  {inView ? <CountUp end={30} duration={3} /> : "0"}
                  <span className="text-teal-400">k</span>
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full border border-teal-500/30">
                  Talents Empowered
                </span>
              </div>

              {/* Floating Labels */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 bg-slate-900/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold border border-slate-700 text-teal-400 shadow-xl z-20">
                Limitless Possibilities
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
