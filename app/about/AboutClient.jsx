"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaQuoteLeft,
  FaGlobe,
  FaUniversity,
  FaChartLine,
  FaFacebookF,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export default function AboutClient() {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
  });
  const { ref: journeyRef, inView: journeyInView } = useInView({
    triggerOnce: true,
  });
  const { ref: leadershipRef, inView: leadershipInView } = useInView({
    triggerOnce: true,
  });
  const { ref: academicRef, inView: academicInView } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Background Doodles */}
      <div className="fixed top-0 right-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-amber-100 rounded-full blur-[100px] opacity-40 mix-blend-multiply"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-[80px] opacity-40 mix-blend-multiply"></div>
      </div>

      {/* ========== SECTION 1: HERO (Full Width, Text Only) ========== */}
      <section
        ref={headerRef}
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-slate-50 overflow-hidden"
      >
        <div
          className={`max-w-7xl mx-auto px-6 relative z-10 text-center transition-all duration-1000 ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center gap-4 mb-8 justify-center">
            <span className="h-px w-12 bg-amber-500"></span>
            <span className="text-amber-600 text-xs font-bold tracking-[0.4em] uppercase">
              About Sabina Akter
            </span>
            <span className="h-px w-12 bg-amber-500"></span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-slate-900 mb-8 leading-[0.95] tracking-tight max-w-4xl mx-auto">
            Architect of <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-600 to-orange-600">
              Possibility.
            </span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Chairperson of Betopia Group & Bdcalling IT. Transforming the
            digital landscape of Bangladesh through visionary leadership and
            human-centric innovation.
          </p>
        </div>
      </section>

      {/* ========== SECTION 2: CONTENT (Sticky Image Left + Scrolling Text Right) ========== */}
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* LEFT COLUMN: Sticky Image (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="sticky top-28 h-fit">
              <div className="relative aspect-[3/4] w-full rounded-[1rem] overflow-hidden shadow">
                <Image
                  src="https://i.postimg.cc/P5R6X9q2/chairman_betopia.webp"
                  alt="Sabina Akter"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="mt-8 bg-white p-8 rounded-[1rem] border border-slate-100 space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
                    <FaMapMarkerAlt size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Location
                    </p>
                    <p className="text-sm font-semibold text-slate-700 leading-snug">
                      Level 6, Lotus Kamal Tower-2, Gulshan, Dhaka.
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
                    <FaEnvelope size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:contact@sabinaakter.com"
                      className="text-sm font-semibold text-slate-700 hover:text-amber-600 transition-colors"
                    >
                      contact@sabinaakter.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
                    <FaPhoneAlt size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Phone
                    </p>
                    <p className="text-sm font-semibold text-slate-700">
                      +880 1XXX-XXXXXX
                    </p>
                  </div>
                </div>

                <div className="w-full h-px bg-slate-100 my-6"></div>

                {/* Socials */}
                <div className="flex justify-center gap-3">
                  <SocialButton
                    href="https://www.facebook.com/sabina.bdcalling/"
                    icon={FaFacebookF}
                  />
                  <SocialButton
                    href="https://www.linkedin.com/company/betopiagroup/posts/?feedView=all"
                    icon={FaLinkedin}
                  />
                  <SocialButton
                    href="https://twitter.com/yourprofile"
                    icon={FaTwitter}
                  />
                  <SocialButton
                    href="https://www.youtube.com/"
                    icon={FaYoutube}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Only Image */}
          <div className="lg:hidden relative aspect-[4/5] w-full rounded-[1rem] overflow-hidden shadow-2xl shadow-slate-200/50">
            <Image
              src="https://i.postimg.cc/P5R6X9q2/chairman_betopia.webp"
              alt="Sabina Akter"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* RIGHT COLUMN: Scrolling Content */}
          <div className="lg:col-span-7 flex flex-col gap-20 lg:gap-28">
            {/* 1. JOURNEY */}
            <div
              ref={journeyRef}
              className={`transition-all duration-1000 ${journeyInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h4 className="text-amber-600 text-xs font-bold tracking-[0.3em] uppercase mb-4">
                The Journey
              </h4>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                From Inception to <br />
                <span className="text-amber-600 font-serif italic">
                  Global Impact.
                </span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-12">
                <p>
                  Sabina Akter&apos;s Entrepreneur path began in 2014 with a
                  singular vision: to create opportunities where none existed.
                  What started as a modest initiative has blossomed into a
                  digital empire.
                </p>
                <p>
                  By co-founding <strong>Bdcalling IT</strong> in 2017, she laid
                  the groundwork for what would become one of the nation&apos;s
                  premier IT service providers. Today, her journey is marked by
                  the empowerment of over 3,500 professionals and operations
                  spanning 22 countries.
                </p>
              </div>

              {/* Stats Card */}
              <div className="">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-white rounded-2xl shadow">
                    <div className="text-3xl font-bold text-slate-900 mb-1">
                      10+
                    </div>
                    <div className="text-[10px] md:text-xs text-slate-500 uppercase tracking-wider">
                      Years Excellence
                    </div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-2xl shadow">
                    <div className="text-3xl font-bold text-slate-900 mb-1">
                      5k+
                    </div>
                    <div className="text-[10px] md:text-xs text-slate-500 uppercase tracking-wider">
                      Jobs Created
                    </div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-2xl shadow">
                    <div className="text-3xl font-bold text-slate-900 mb-1">
                      22+
                    </div>
                    <div className="text-[10px] md:text-xs text-slate-500 uppercase tracking-wider">
                      Global Markets
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. ENTERPRISE LEADERSHIP (Dark Card) */}
            <div
              ref={leadershipRef}
              className={`bg-brand-dark-gray text-white p-8 md:p-12 rounded-xl relative overflow-hidden transition-all duration-1000 ${leadershipInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="relative z-10">
                <h4 className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">
                  Enterprise Leadership
                </h4>
                <h2 className="text-3xl md:text-4xl font-bold mb-10">
                  Values that Drive <br />{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-400">
                    The Ecosystem.
                  </span>
                </h2>

                <div className="space-y-8">
                  <div className="flex gap-6 items-start">
                    <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold shrink-0 mt-1">
                      01
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        Integrity First
                      </h3>
                      <p className="text-slate-400 leading-relaxed text-sm">
                        Upholding the highest ethical standards in every
                        business dealing.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold shrink-0 mt-1">
                      02
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Innovation</h3>
                      <p className="text-slate-400 leading-relaxed text-sm">
                        Constantly challenging the status quo to bring
                        groundbreaking solutions.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold shrink-0 mt-1">
                      03
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Empowerment</h3>
                      <p className="text-slate-400 leading-relaxed text-sm">
                        Creating pathways for young talent to thrive and lead in
                        the digital era.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. ACADEMIC */}
            <div
              ref={academicRef}
              className={`transition-all duration-1000 ${academicInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h4 className="text-amber-600 text-xs font-bold tracking-[0.3em] uppercase mb-4">
                Academic Foundation
              </h4>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-8">
                Rooted in{" "}
                <span className="font-serif italic text-amber-600">
                  Knowledge.
                </span>
              </h2>

              <div className="space-y-6">
                <div className="flex gap-6 items-center bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-900 font-bold border border-slate-100">
                    01
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      B.Sc. in Computer Science (Ongoing)
                    </h3>
                    <p className="text-sm text-slate-500">
                      Daffodil International University
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-center bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-900 font-bold border border-slate-100">
                    02
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Diploma in Computer Technology
                    </h3>
                    <p className="text-sm text-slate-500">
                      Brahmanbaria Polytechnic Institute
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. PHILOSOPHY */}
            <div className="text-center bg-amber-50/50 p-12 rounded-[3rem]">
              <FaQuoteLeft className="text-4xl text-amber-200 mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-serif italic text-slate-800 leading-tight mb-8">
                &quot;True leadership aligns vision with action. It&apos;s about
                creating a harmony between business growth and social
                impact.&quot;
              </h2>
              <div className="inline-flex flex-col items-center">
                <div className="w-12 h-1 bg-amber-500 rounded-full mb-3"></div>
                <h4 className="text-lg font-bold text-slate-900 uppercase tracking-widest">
                  Sabina Akter
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const SocialButton = ({ href, icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-400 hover:text-white hover:bg-amber-600 hover:border-amber-600 transition-all duration-300 shadow-sm"
  >
    <Icon size={18} />
  </a>
);
