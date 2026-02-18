"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CalendarDays, Newspaper } from "lucide-react";
import { useState } from "react";

export default function NewsFeed({ initialNews }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories and remove any empty ones
  const categories = [
    "All",
    ...new Set(
      initialNews
        .map((item) => item.category)
        .filter((c) => c && c.trim() !== ""),
    ),
  ];

  // Filter news based on selected category
  const filteredNews =
    selectedCategory === "All"
      ? initialNews
      : initialNews.filter((item) => item.category === selectedCategory);

  return (
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
                key={item._id}
                href={`/news/${item._id}`}
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
                      {item.category || "News"}
                    </span>
                  </div>

                  <div className="p-8 flex-grow flex flex-col">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-4">
                      <CalendarDays size={14} />
                      <span>
                        {new Date(item.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
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
  );
}
