import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import dbConnect from "@/lib/db";
import News from "@/models/News";
import Link from "next/link";
import { Plus } from "lucide-react";
import NewsList from "./NewsList";

async function getNews() {
  await dbConnect();
  // Sort by created date descending
  const news = await News.find({}).sort({ createdAt: -1 });
  // Serialize for client component
  return JSON.parse(JSON.stringify(news));
}

export default async function NewsManagement() {
  const session = await getServerSession(authOptions);
  const newsItems = await getNews();

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">News Management</h1>
          <p className="text-slate-500">
            Create, edit, and manage your news articles.
          </p>
        </div>
        <Link
          href="/admin/news/add"
          className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
        >
          <Plus size={20} />
          Add New Article
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <NewsList initialNews={newsItems} />
      </div>
    </div>
  );
}
