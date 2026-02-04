"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CalendarDays, Newspaper } from "lucide-react";
import newsData from "../data/News.json";
import { useState } from "react";

export default function NewsArchive() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories
  const categories = [
    "All",
    ...new Set(newsData.newsItems.map((item) => item.category)),
  ];

  // Filter news based on selected category
  const filteredNews =
    selectedCategory === "All"
      ? newsData.newsItems
      : newsData.newsItems.filter((item) => item.category === selectedCategory);

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-orange-500 selection:text-white">
      {/* Header Section */}
      <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 bg-slate-50 overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute -top-[10%] -right-[5%] w-[600px] h-[600px] bg-amber-100 rounded-full blur-[100px] opacity-60 mix-blend-multiply"></div>
          <div className="absolute top-[30%] -left-[10%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-[80px] opacity-60 mix-blend-multiply"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-6 leading-[0.9] tracking-tight">
              News &
              <span className="text-transparent ml-2 bg-clip-text bg-linear-to-r from-amber-600 to-orange-600">
                Insights.
              </span>
            </h1>
            <p className="text-xl text-slate-500 font-light leading-relaxed max-w-2xl">
              Stay updated with the latest announcements, press releases, and
              thought leadership from Sabina Akter and the Betopia Group.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category Filter */}
          <div className="mb-16 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 border ${
                  selectedCategory === category
                    ? "bg-slate-900 text-white border-slate-900 shadow-lg"
                    : "bg-white text-slate-500 border-slate-200 hover:border-amber-500 hover:text-amber-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.length > 0 ? (
              filteredNews.map((item) => (
                <Link
                  key={item.id}
                  href={`/news/${item.id}`}
                  className="group block h-full"
                >
                  <article className="h-full flex flex-col bg-white rounded-[2rem] border border-slate-100 shadow-lg shadow-slate-100/50 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                    {/* Image Container */}
                    <div className="relative h-72 w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <span className="absolute top-6 left-6 z-20 px-4 py-2 bg-white/90 backdrop-blur-md text-slate-900 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-sm">
                        {item.category}
                      </span>
                    </div>

                    <div className="p-8 flex-grow flex flex-col">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-4">
                        <CalendarDays size={14} />
                        <span>{item.date}</span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-amber-600 transition-colors duration-300 line-clamp-2">
                        {item.title}
                      </h3>

                      <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow font-light">
                        {item.summary}
                      </p>

                      <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                        <span className="tracking-widest uppercase">
                          Read Article
                        </span>
                        <span className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                          <ArrowUpRight size={14} />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 border border-slate-100 mb-4 text-slate-300">
                  <Newspaper size={24} />
                </div>
                <p className="text-slate-500 text-lg">
                  No news found in this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
