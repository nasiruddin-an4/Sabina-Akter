"use client";
import { FaQuoteLeft } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function ChairmanMessage() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <FaQuoteLeft className="text-4xl text-gold mx-auto mb-8 opacity-50" />

        <div className="text-3xl md:text-5xl font-serif leading-tight text-slate-900 mb-10 min-h-[150px]">
          <TypeAnimation
            sequence={[
              '"Human potential is the most powerful force behind progress. Our mission is not just business growth—it is to create jobs, empower youth, and champion women’s leadership."',
              1000,
            ]}
            wrapper="span"
            speed={65}
            style={{ display: "inline-block" }}
            cursor={true}
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="h-1 w-20 bg-slate-900 rounded-full mb-4"></div>
          <h4 className="text-xl font-bold text-slate-900 uppercase tracking-widest">
            Sabina Akter
          </h4>
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-[0.2em]">
            Chairperson, Betopia Group
          </p>
        </div>
      </div>

      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-bold text-slate-900/[0.03] select-none pointer-events-none whitespace-nowrap">
        BETOPIA
      </div>
    </section>
  );
}
