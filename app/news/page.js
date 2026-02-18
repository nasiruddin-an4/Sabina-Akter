import News from "@/models/News";
import dbConnect from "@/lib/db";
import NewsFeed from "./NewsFeed";

async function getNews() {
  await dbConnect();
  const news = await News.find({}).sort({ createdAt: -1 }).lean();
  return JSON.parse(JSON.stringify(news));
}

export default async function NewsArchive() {
  const newsItems = await getNews();

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
      <NewsFeed initialNews={newsItems} />
    </main>
  );
}
