import dbConnect from "@/lib/db";
import News from "@/models/News";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CalendarDays, ExternalLink, Newspaper } from "lucide-react";

async function getNewsItem(id) {
  await dbConnect();
  try {
    const item = await News.findById(id).lean();
    return item ? JSON.parse(JSON.stringify(item)) : null;
  } catch (e) {
    return null;
  }
}

async function getRelatedNews(excludeId) {
  await dbConnect();
  const items = await News.find({ _id: { $ne: excludeId } })
    .sort({ createdAt: -1 })
    .limit(2)
    .lean();
  return JSON.parse(JSON.stringify(items));
}

export default async function NewsDetail({ params }) {
  const { id } = await params;
  const newsItem = await getNewsItem(id);

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

  const relatedNews = await getRelatedNews(newsItem._id);

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
              {new Date(newsItem.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl font-black text-slate-900 leading-[1.5] mb-8">
            {newsItem.title}
          </h1>

          <p className="text-xl lg:text-2xl text-slate-500 font-light leading-relaxed border-l-4 border-amber-500 pl-6">
            {newsItem.summary}
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-lg border border-slate-100 mb-16 group">
          <Image
            src={newsItem.image}
            alt={newsItem.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            priority
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg prose-slate max-w-none mb-16 font-light text-slate-600 text-[18px] md:text-[24px]">
          {/* Use content if available, otherwise fallback to summary */}
          <p>{newsItem.content || newsItem.summary}</p>
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

        {/* Related News removed as per request to show only one image */}
      </div>
    </main>
  );
}
