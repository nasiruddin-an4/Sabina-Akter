"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  CalendarDays,
  ExternalLink,
  Newspaper,
  Clock,
} from "lucide-react";
import newsData from "../../data/News.json";

export default function NewsDetail() {
  const params = useParams();
  const newsItem = newsData.newsItems.find((item) => item.id === params.id);

  if (!newsItem) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center font-sans selection:bg-orange-500 selection:text-white">
        <div className="text-center p-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 border border-slate-100 mb-6 text-slate-300">
            <Newspaper size={24} />
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-4">
            News Not Found
          </h1>
          <p className="text-slate-500 mb-8 max-w-md mx-auto font-light">
            The news article you&apos;re looking for doesn&apos;t exist or has
            been moved.
          </p>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-amber-600 transition-colors shadow-lg shadow-slate-200/50"
          >
            <ArrowLeft size={14} /> Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-orange-500 selection:text-white pt-24 pb-20">
      {/* Ambient Background */}
      <div className="fixed top-0 right-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-amber-50 rounded-full blur-[100px] opacity-60 mix-blend-multiply"></div>
        <div className="absolute top-[40%] left-[5%] w-[400px] h-[400px] bg-blue-50 rounded-full blur-[80px] opacity-60 mix-blend-multiply"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Breadcrumb / Back */}
        <div className="mb-12">
          <Link
            href="/news"
            className="group inline-flex items-center gap-2 text-slate-500 hover:text-amber-600 transition-colors font-bold text-xs uppercase tracking-widest"
          >
            <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:border-amber-200 group-hover:bg-white trantision-all duration-300">
              <ArrowLeft size={12} />
            </div>
            Back to News
          </Link>
        </div>

        {/* Article Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-6 mb-8 text-xs font-bold uppercase tracking-widest text-slate-500">
            <span className="flex items-center gap-2 text-amber-600">
              <CalendarDays size={14} />
              {newsItem.date}
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <span className="px-3 py-1 bg-slate-100 rounded-full text-slate-600">
              {newsItem.category}
            </span>
          </div>

          <h1 className="text-4xl font-black text-slate-900 leading-[1.5] mb-8">
            {newsItem.title}
          </h1>

          <p className="text-xl lg:text-2xl text-slate-500 font-light leading-relaxed border-l-4 border-amber-500 pl-6">
            {newsItem.summary}
          </p>
        </div>

        {/* Formal Photo Grid - Replacing Single Featured Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 h-auto lg:h-[600px]">
          {/* Large Main Image */}
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 relative rounded-3xl overflow-hidden shadow-lg border border-slate-100 group">
            <Image
              src={newsItem.image}
              alt={newsItem.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>

          {/* Secondary Vertical Image 1 */}
          <div className="hidden md:block relative rounded-3xl overflow-hidden shadow-lg border border-slate-100 group lg:row-span-2">
            <Image
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000"
              alt="Formal Session"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Small Grid Images */}
          <div className="grid grid-rows-2 gap-4 lg:col-span-1 lg:row-span-2">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-100 group h-48 lg:h-auto">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000"
                alt="Meeting"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-100 group h-48 lg:h-auto">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000"
                alt="Office"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg prose-slate max-w-none mb-16 font-light leading-loose text-slate-600 text-[24px]">
          {/* Note: In a real app, this would probably be dangerous HTML or rich text. 
                 Since we just have a summary for now, we'll repeat it as a placeholder for full content 
                 to simulate a real article body. */}
          <p>{newsItem.summary}</p>
        </div>

        {/* External Link Card */}
        {newsItem.externalLink && (
          <div className="group bg-slate-50 rounded-[2rem] p-10 border border-slate-200 hover:border-amber-200 transition-all duration-300 mb-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-full blur-[50px] opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

            <h3 className="text-xl font-bold text-slate-900 mb-2 relative z-10">
              Read the full story
            </h3>
            <p className="text-slate-500 mb-6 font-light relative z-10">
              View the original article on the publisher&apos;s website.
            </p>

            <a
              href={newsItem.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white bg-slate-900 px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-amber-600 transition-colors shadow-lg shadow-slate-900/10 relative z-10"
            >
              View Source
              <ExternalLink size={14} />
            </a>
          </div>
        )}

        <hr className="border-slate-100 mb-16" />

        {/* Related News */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-slate-900">More Insights</h2>
            <Link
              href="/news"
              className="text-xs font-bold uppercase tracking-widest text-amber-600 hover:text-amber-700 transition-colors hidden md:block"
            >
              View Archive
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsData.newsItems
              .filter((item) => item.id !== newsItem.id)
              .slice(0, 2)
              .map((item) => (
                <Link
                  key={item.id}
                  href={`/news/${item.id}`}
                  className="group block"
                >
                  <div className="bg-white rounded-[1rem] overflow-hidden border border-slate-100 hover:border-amber-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 h-full flex flex-col">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-500"></div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-3">
                        <CalendarDays size={12} />
                        <span>{item.date}</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors leading-tight mb-4 line-clamp-2">
                        {item.title}
                      </h3>

                      <div className="mt-auto flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest group-hover:text-slate-900 transition-colors">
                        Read Now <ArrowLeft className="rotate-180" size={12} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/news"
              className="text-xs font-bold uppercase tracking-widest text-amber-600 hover:text-amber-700 transition-colors"
            >
              View Archive
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
