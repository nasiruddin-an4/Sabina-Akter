"use client";

import { useInView } from "react-intersection-observer";

const roles = [
  {
    title: "Chairperson",
    organization: "Betopia Group",
    period: "2018 - Present",
    description:
      "Leading the conglomerate's strategic vision, overseeing multiple subsidiaries across IT, Education, and Media sectors.",
  },
  {
    title: "Co-Founder",
    organization: "Bdcalling IT Ltd.",
    period: "2016 - Present",
    description:
      "Spearheaded the growth of one of the largest IT firms, focusing on creating employment opportunities for youth and women.",
  },
  {
    title: "Director",
    organization: "Bdcalling Academy",
    period: "2019 - Present",
    description:
      "Driving skill development initiatives to bridge the gap between academic knowledge and industry requirements.",
  },
];

const achievements = [
  {
    title: "Women Business Leader Award",
    organization: "Global Business Summit",
    year: "2023",
    color: "text-yellow-600",
    bg: "bg-yellow-50",
  },
  {
    title: "Best IT Entrepreneur",
    organization: "Tech Innovation Awards",
    year: "2022",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Employment Creator of the Year",
    organization: "National SME Foundation",
    year: "2021",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    title: "Excellence in Digital Innovation",
    organization: "Future Tech Forum",
    year: "2020",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

export default function ProfessionalAchievements() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`mb-6 md:mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="h-0.5 w-10 bg-brand-bright-orange"></span>
            <span className="text-brand-bright-orange font-bold uppercase tracking-widest text-sm">
              Leadership & Accolades
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Professional Leadership & <br />
            <span className="text-brand-bright-orange">Achievements</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column: Professional Leadership (Timeline) */}
          <div
            className={`transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
              Professional Roles
            </h3>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              {roles.map((role, index) => (
                <div key={index} className="relative flex items-start group">
                  {/* Timeline Node */}
                  <div className="absolute left-0 top-1 mt-1 ml-2.5 h-5 w-5 rounded-full border-4 border-white bg-slate-300 transition-colors duration-500 group-hover:bg-brand-bright-orange group-hover:scale-125 z-10"></div>

                  {/* Content */}
                  <div className="pl-12 w-full">
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 transition-all duration-300 hover:-translate-y-1">
                      <div className="flex flex-wrap justify-between items-start mb-2">
                        <h4 className="text-lg font-bold text-slate-900 group-hover:text-brand-bright-orange transition-colors">
                          {role.title}
                        </h4>
                        <span className="text-xs font-bold text-brand-bright-orange bg-orange-50 px-3 py-1 rounded-full">
                          {role.period}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-slate-500 mb-3">
                        {role.organization}
                      </p>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {role.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Achievements & Recognition (Grid) */}
          <div
            className={`transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
              Achievements & Recognition
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl border border-slate-100 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 leading-snug mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-500 font-medium">
                      {item.organization}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Year
                    </span>
                    <span className="text-sm font-bold text-slate-900">
                      {item.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Highlight Box */}
            <div className="mt-8 bg-brand-bright-orange p-6 rounded-2xl text-white relative overflow-hidden">
              <div className="relative z-10 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-100 uppercase tracking-widest font-bold mb-1">
                    Featured In
                  </p>
                  <p className="text-lg font-medium leading-relaxed">
                    Recognized by top industry publications for contribution to
                    Tech & Women Empowerment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
