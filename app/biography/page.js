"use client";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

export default function BiographyPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Bio Header */}
      <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden rounded-b-[4rem]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/10 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h4 className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">
            The Journey of a Visionary
          </h4>
          <h1 className="text-5xl lg:text-7xl font-bold mb-8">Sabina Akter</h1>
          <p className="text-xl text-slate-300 leading-relaxed font-light">
            Chairperson, Betopia Group | Co-Founder & Chairperson, Bdcalling IT
            Ltd. <br />
            <span className="italic text-base mt-2 block text-slate-400">
              Born 1994, Kishoreganj | Visionary IT Leader
            </span>
          </p>
        </div>
      </section>

      {/* Content Columns */}
      <div className="max-w-5xl mx-auto px-6 -mt-12 relative z-20">
        <div className="bg-white rounded-[2rem] shadow-xl p-8 lg:p-12 border border-slate-100 ">
          {/* Profile Overview */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-gold rounded-full"></span>
              Profile Overview
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              Sabina Akter is the Chairperson of Betopia Group (since 2025) and
              Co-Founder & Chairperson of Bdcalling IT Ltd. Widely recognized as
              one of Bangladesh’s most influential women leaders in technology
              and business, she has dedicated her career to creating jobs,
              empowering youth, and advancing women’s leadership.
              <br />
              <br />
              Under her leadership, Betopia Group has growing into a diversified
              conglomerate that has created more than{" "}
              <strong className="text-slate-900">3,500 jobs</strong> and
              counting across its businesses and SBUs, spanning IT, fintech,
              cloud, real estate, education, and supply chain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Early Life */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Early Life & Education
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Born in 1994 in Chouddoshata, Kishoreganj Sadar, Sabina grew up
                in a family that valued resilience and hard work. Her father,
                Mohammad Mustafa, and mother, Mina Akter, instilled in her the
                principles of dedication and integrity that shaped her journey.
              </p>
              <p className="text-slate-600 leading-relaxed">
                She completed her Diploma in Computer Technology Engineering
                from Brahmanbaria Polytechnic Institute and is currently
                pursuing her B.Sc. in Computer Science & Engineering (CSE) at a
                private university.
              </p>
            </div>

            {/* Personal Life */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Personal Life
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Sabina Akter is a mother of four sons and one daughter,
                balancing family life with her leadership responsibilities. She
                shares this journey with her husband, Muhammad Monir Hossain
                (Founder & Group CEO of Betopia Group), and together they have
                built an ecosystem dedicated to empowering people.
              </p>
            </div>
          </div>

          <hr className="my-12 border-slate-100" />

          {/* Philosophy/Chairman Statement */}
          <div className="relative bg-slate-50 p-8 rounded-2xl border border-slate-200/60">
            <FaQuoteLeft className="text-4xl text-gold/20 absolute top-6 left-6" />
            <div className="relative z-10 text-center max-w-2xl mx-auto space-y-6">
              <h3 className="text-sm font-bold tracking-widest text-slate-400 uppercase">
                Chairman's Statement
              </h3>
              <p className="text-xl lg:text-2xl font-serif italic text-slate-800 leading-relaxed">
                "To me, prosperity is measured by the opportunities we create,
                the lives we uplift, and the confidence we inspire in people to
                achieve their best. Together, we move forward limitless."
              </p>
              <div className="font-bold text-slate-900">– Sabina Akter</div>
            </div>
          </div>

          <hr className="my-12 border-slate-100" />

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-gold rounded-full"></span>
              Achievements & Recognition
            </h3>
            <ul className="space-y-4">
              {[
                "BASIS National ICT Award (2020) for outstanding contributions to Bangladesh’s IT industry.",
                "Credited with fostering thousands of jobs and career opportunities for young professionals.",
                "Advocates for women’s leadership in technology and entrepreneurship.",
                "Featured in national media, including Maasranga Television, Bangladesh Television, Daily Kalbela, Dhaka Post, and Kholakagoj.",
                "Active member of Rotary International, focusing on community development.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0"></span>
                  <p className="text-slate-600">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
