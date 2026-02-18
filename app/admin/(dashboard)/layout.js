import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";

import AuthProvider from "@/app/components/AuthProvider";

export default async function AdminDashboardLayout({ children }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <AuthProvider session={session}>
      <div className="flex min-h-screen bg-slate-50">
        <AdminSidebar />
        <div className="flex-1 ml-64 flex flex-col">
          <AdminHeader />
          <main className="flex-1 p-8 animate-in fade-in duration-500">
            <div className="max-w-7xl mx-auto">{children}</div>
          </main>
        </div>
      </div>
    </AuthProvider>
  );
}
