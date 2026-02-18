import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Welcome back, Admin
        </h1>
        <p className="text-slate-500">
          Here's what's happening on your website today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold text-slate-700 mb-2">
            Total News
          </h3>
          <p className="text-4xl font-bold text-orange-600">0</p>
          <p className="text-sm text-slate-400 mt-2">published articles</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold text-slate-700 mb-2">
            Gallery Items
          </h3>
          <p className="text-4xl font-bold text-blue-600">0</p>
          <p className="text-sm text-slate-400 mt-2">photos & videos</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold text-slate-700 mb-2">
            Quick Action
          </h3>
          <button className="w-full bg-slate-900 text-white py-2 rounded-lg mt-2 hover:bg-slate-800 text-sm">
            Add New Content
          </button>
        </div>
      </div>
    </div>
  );
}
