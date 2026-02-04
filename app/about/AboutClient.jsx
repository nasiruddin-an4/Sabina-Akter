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
  FaFacebookF,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaAward,
  FaBriefcase,
  FaUsers,
  FaLightbulb,
  FaGraduationCap,
  FaBuilding,
  FaRocket,
  FaHandshake,
  FaChevronRight,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export default function AboutClient() {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
  });
  const { ref: profileRef, inView: profileInView } = useInView({
    triggerOnce: true,
  });
  const { ref: achievementsRef, inView: achievementsInView } = useInView({
    triggerOnce: true,
  });
  const { ref: venturesRef, inView: venturesInView } = useInView({
    triggerOnce: true,
  });
  const { ref: globalRef, inView: globalInView } = useInView({
    triggerOnce: true,
  });
  const { ref: philosophyRef, inView: philosophyInView } = useInView({
    triggerOnce: true,
  });
  const { ref: educationRef, inView: educationInView } = useInView({
    triggerOnce: true,
  });
  const { ref: statementRef, inView: statementInView } = useInView({
    triggerOnce: true,
  });

  const achievements = [
    "Recipient of the BASIS National ICT Award (2020) for contributions to Bangladesh's ICT sector",
    "Credited with enabling thousands of sustainable careers for young professionals",
    "A consistent advocate for women's leadership and entrepreneurship in technology",
    "Featured across leading national media platforms, including Maasranga Television, Bangladesh Television, Daily Kalbela, Dhaka Post, and Kholakagoj",
    "Active member of Rotary International, supporting community development initiatives",
  ];

  const ventures = [
    "Betopia Limited",
    "Bdcalling IT Ltd.",
    "Softvence",
    "SM Technology",
    "JVAI",
    "Scaleup",
    "Sparktech",
    "Back Bencher Studio",
  ];

  const globalServices = [
    "Digital Public Infrastructure & Institutional Platforms",
    "Cloud Modernization & Managed Services",
    "Cybersecurity & Compliance Solutions",
    "Data, AI & Advanced Analytics Engineering",
    "B2B White-Label Technology & Enterprise Solutions",
  ];

  const leadershipValues = [
    {
      title: "Employment Creation",
      desc: "As a driver of sustainable growth",
    },
    {
      title: "Youth Empowerment",
      desc: "Through skills, mentorship, and opportunity",
    },
    {
      title: "Women's Leadership",
      desc: "As a catalyst for innovation and inclusive progress",
    },
    {
      title: "Responsible Business",
      desc: "Balancing commercial success with societal impact",
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Background Doodles */}
      <div className="fixed top-0 right-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-amber-100 rounded-full blur-[100px] opacity-40 mix-blend-multiply"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-[80px] opacity-40 mix-blend-multiply"></div>
      </div>

      {/* ========== SECTION 1: HERO ========== */}
      <section
        ref={headerRef}
        className="relative pt-32 pb-10 lg:pt-40 lg:pb-28 bg-slate-50 overflow-hidden"
      >
        <div
          className={`max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-center transition-all duration-1000 ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center gap-4 mb-4 justify-center">
            <span className="h-px w-12 bg-amber-500"></span>
            <span className="text-amber-600 text-xs font-bold tracking-[0.2em] uppercase">
              Corporate Profile
            </span>
            <span className="h-px w-12 bg-amber-500"></span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 mb-6 leading-[0.95] tracking-tight max-w-4xl mx-auto">
            Sabina Akter
          </h1>
          <div className="space-y-2 mb-8">
            <p className="text-xl md:text-2xl text-slate-700 font-medium">
              Chairperson, Betopia Group
            </p>
            <p className="text-lg text-slate-600">
              Co-Founder & Chairperson, Bdcalling IT Ltd.
            </p>
          </div>
        </div>
      </section>

      {/* ========== SECTION 2: CONTENT ========== */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 lg:py-32">
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
                    href="https://www.youtube.com/@BetopiaGroup"
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
            {/* 1. CORPORATE PROFILE OVERVIEW */}
            <div
              ref={profileRef}
              className={`transition-all duration-1000 ${profileInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h4 className="text-amber-600 text-xs font-bold tracking-[0.3em] uppercase mb-4">
                Corporate Profile Overview
              </h4>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Leading Bangladesh&apos;s{" "}
                <span className="text-amber-600 font-serif italic">
                  Digital Revolution.
                </span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-12">
                <p>
                  <strong className="text-slate-900">Sabina Akter</strong> is
                  the Chairperson of Betopia Group and Co-Founder & Chairperson
                  of Bdcalling IT Ltd., and is widely recognized as a leading
                  figure in Bangladesh&apos;s technology and entrepreneurship
                  ecosystem. Her leadership is defined by long-term value
                  creation, inclusive growth, and a strong commitment to
                  employment generation, youth development, and women&apos;s
                  leadership in technology.
                </p>
                <p>
                  Under her strategic direction, Betopia Group has grown into a
                  diversified enterprise operating across IT services, fintech,
                  cloud solutions, education, real estate, and supply chain
                  operations. The group has collectively generated over{" "}
                  <strong className="text-slate-900">
                    5,000 employment opportunities
                  </strong>
                  , contributing significantly to Bangladesh&apos;s digital
                  economy and workforce advancement.
                </p>
              </div>

              {/* Stats Card */}
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

            {/* 2. ACHIEVEMENTS & RECOGNITION */}
            <div
              ref={achievementsRef}
              className={`transition-all duration-1000 ${achievementsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h4 className="text-amber-600 text-xs font-bold tracking-[0.3em] uppercase mb-4">
                Achievements & Recognition
              </h4>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                A Legacy of{" "}
                <span className="text-amber-600 font-serif italic">
                  Excellence.
                </span>
              </h2>
              <div className="space-y-4">
                {achievements.map((achievement, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 items-start bg-slate-50 p-5 rounded-xl border border-slate-100"
                  >
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 shrink-0 mt-0.5">
                      <FaAward size={14} />
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. PROFESSIONAL LEADERSHIP */}
            <div className="bg-brand-dark-gray text-white p-8 md:p-12 rounded-xl relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">
                  Professional Leadership
                </h4>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Chairperson,{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-400">
                    Betopia Group
                  </span>
                </h2>
                <p className="text-slate-300 leading-relaxed text-lg">
                  Provides strategic governance and vision for a fast-growing
                  conglomerate, guiding multi-sector expansion while
                  prioritizing ethical growth, innovation, and large-scale job
                  creation.
                </p>
              </div>
            </div>

            {/* 4. BETOPIA GROUP VENTURES */}
            <div
              ref={venturesRef}
              className={`transition-all duration-1000 ${venturesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h4 className="text-amber-600 text-xs font-bold tracking-[0.3em] uppercase mb-4">
                Betopia Group
              </h4>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Building a{" "}
                <span className="text-amber-600 font-serif italic">
                  Global Enterprise.
                </span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Betopia Group has evolved into a diversified, future-focused
                conglomerate comprising 22+ specialized ventures across
                technology, fintech, energy, supply chain, education, and
                creative industries. Each business unit operates with
                domain-specific expertise while aligning with a unified
                governance structure, strategic direction, and global vision.
              </p>

              <h5 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                Notable Ventures Include:
              </h5>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                {ventures.map((venture, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-slate-100 p-4 rounded-xl text-center"
                  >
                    <p className="text-sm font-semibold text-slate-700">
                      {venture}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. GLOBAL EXPANSION */}
            <div
              ref={globalRef}
              className={`bg-gradient-to-br from-amber-50 to-orange-50 p-8 md:p-10 rounded-xl transition-all duration-1000 ${globalInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <FaGlobe className="text-amber-600 text-2xl" />
                <h3 className="text-2xl font-bold text-slate-900">
                  Global Expansion & Service Capabilities
                </h3>
              </div>
              <p className="text-slate-700 leading-relaxed mb-6">
                Through Betopia Limited, the Group is actively expanding
                operations across the{" "}
                <strong>
                  United States, United Kingdom, Australia, Canada, Japan,
                  Philippines, Brazil, and Eastern Europe.
                </strong>
              </p>

              <h5 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                Core Global Service Pillars:
              </h5>
              <div className="space-y-3">
                {globalServices.map((service, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <FaChevronRight className="text-amber-500 text-xs" />
                    <p className="text-slate-700">{service}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. LEADERSHIP PHILOSOPHY */}
            <div
              ref={philosophyRef}
              className={`transition-all duration-1000 ${philosophyInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h4 className="text-amber-600 text-xs font-bold tracking-[0.3em] uppercase mb-4">
                Leadership Philosophy & Vision
              </h4>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Human Potential as the{" "}
                <span className="text-amber-600 font-serif italic">
                  Strongest Force.
                </span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Sabina Akter&apos;s leadership philosophy is grounded in the
                belief that human potential is the most valuable asset in
                economic development. She champions:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {leadershipValues.map((value, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-slate-100 p-6 rounded-xl shadow-sm"
                  >
                    <h4 className="font-bold text-slate-900 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-sm text-slate-600">{value.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-slate-900 text-white p-8 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <FaRocket className="text-amber-400 text-xl" />
                  <h4 className="font-bold text-lg">Betopia City Vision</h4>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Her long-term vision includes the development of{" "}
                  <strong className="text-white">Betopia City</strong> - a
                  future-focused hub for innovation, entrepreneurship, and
                  inclusive opportunity, designed to inspire the next generation
                  of leaders and create equitable pathways for women.
                </p>
              </div>
            </div>

            {/* 7. EDUCATION */}
            <div
              ref={educationRef}
              className={`transition-all duration-1000 ${educationInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h4 className="text-amber-600 text-xs font-bold tracking-[0.3em] uppercase mb-4">
                Education
              </h4>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                Rooted in{" "}
                <span className="font-serif italic text-amber-600">
                  Knowledge.
                </span>
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex gap-6 items-center bg-slate-50 p-5 rounded-2xl border border-slate-100">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-amber-600 border border-slate-100">
                    <FaGraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      B.Sc. in Computer Science & Engineering (Ongoing)
                    </h3>
                    <p className="text-sm text-slate-500">
                      Reflecting her continued commitment to technical
                      excellence and lifelong learning
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-center bg-slate-50 p-5 rounded-2xl border border-slate-100">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-amber-600 border border-slate-100">
                    <FaGraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Diploma in Computer Technology Engineering
                    </h3>
                    <p className="text-sm text-slate-500">
                      Brahmanbaria Polytechnic Institute
                    </p>
                  </div>
                </div>
              </div>

              {/* Early Life */}
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-3">
                  Early Life & Leadership Foundation
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Raised in Kishoreganj, Sabina Akter&apos;s formative years
                  instilled in her a strong sense of discipline, resilience, and
                  responsibility. Growing up beyond major urban centers shaped
                  her grounded understanding of opportunity, access, and the
                  role of employment in social mobility—perspectives that
                  continue to inform her people-centric and impact-driven
                  leadership approach.
                </p>
              </div>
            </div>

            {/* 8. CHAIRPERSON'S STATEMENT */}
            <div
              ref={statementRef}
              className={`text-center bg-amber-50/50 p-10 md:p-12 rounded-[2rem] transition-all duration-1000 ${statementInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h4 className="text-amber-600 text-xs font-bold tracking-[0.3em] uppercase mb-6">
                Chairperson&apos;s Statement
              </h4>
              <FaQuoteLeft className="text-4xl text-amber-200 mx-auto mb-6" />
              <div className="space-y-4 mb-8">
                <p className="text-xl md:text-2xl font-serif italic text-slate-800 leading-relaxed">
                  &quot;At Betopia Group, we believe human potential is the
                  strongest force behind progress. Our mission extends beyond
                  business growth to creating opportunities, empowering youth,
                  and advancing women&apos;s leadership.&quot;
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Since our journey began in 2014, we have remained committed to
                  building employment, fostering innovation, and contributing
                  meaningfully to Bangladesh&apos;s economic development. True
                  prosperity is measured by the opportunities we create and the
                  lives we uplift.
                </p>
              </div>
              <div className="inline-flex flex-col items-center">
                <div className="w-12 h-1 bg-amber-500 rounded-full mb-3"></div>
                <h4 className="text-lg font-bold text-slate-900">
                  — Sabina Akter
                </h4>
                <p className="text-sm text-slate-600">
                  Chairperson, Betopia Group
                </p>
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
