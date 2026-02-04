"use client";
import Link from "next/link";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";
import newsData from "../data/News.json";
import Image from "next/image";

const NewsItems = newsData.newsItems;

export default function NewsSection() {
  return (
    <section
      id="news"
      className="py-10 md:py-24 bg-white relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-50/50 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              News &{" "}
              <span className="text-brand-bright-orange font-serif italic">
                Insights
              </span>
            </h2>
            <p className="text-slate-500 leading-relaxed text-sm md:text-base">
              Stay updated with the latest announcements, press releases, and
              thought leadership from Sabina Akter and the Betopia Group.
            </p>
          </div>
          <Link
            href="/news"
            className="group flex items-center gap-3 text-xs font-bold tracking-widest text-slate-900 hover:text-gold transition-colors border-b border-slate-200 pb-1 hover:border-gold"
          >
            VIEW ARCHIVE
            <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NewsItems.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.id}`}
              className="group block h-full"
            >
              <article className="h-full flex flex-col bg-white rounded-[1rem] border border-slate-100 hover:border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                {/* Image Container with Zoom Effect */}
                <div className="relative h-64 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60 z-10"></div>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <span className="absolute top-6 left-6 z-20 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-bold tracking-wider text-white uppercase shadow-lg">
                    {item.category}
                  </span>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-gold uppercase tracking-widest mb-4">
                    <FaCalendarAlt />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-gold transition-colors duration-300 line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
                    {item.summary}
                  </p>

                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-gold transition-colors">
                    <span className="tracking-widest">READ STORY</span>
                    <span className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-all duration-300">
                      <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
