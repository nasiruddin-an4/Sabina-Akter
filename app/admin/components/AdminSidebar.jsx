"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Newspaper,
  Image,
  User,
  Info,
  MessageSquareQuote,
  Target,
  Rocket,
  Award,
  Settings,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
  { icon: User, label: "Hero Section", href: "/admin/hero" },
  {
    icon: MessageSquareQuote,
    label: "Chairman Message",
    href: "/admin/chairman-message",
  },
  { icon: Target, label: "Vision Section", href: "/admin/vision" },
  {
    icon: Rocket,
    label: "Vision to Venture",
    href: "/admin/vision-to-venture",
  },
  { icon: Award, label: "Achievements", href: "/admin/achievements" },
  { icon: Info, label: "About Section", href: "/admin/about" },
  { icon: Newspaper, label: "News Management", href: "/admin/news" },
  { icon: Image, label: "Gallery", href: "/admin/gallery" },
  { icon: Settings, label: "Site Information", href: "/admin/site-info" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-slate-900 text-white shadow-xl z-50 flex flex-col">
      <div className="p-6 border-b border-slate-800">
        <h2 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
          Admin Panel
        </h2>
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? "bg-orange-600 text-white shadow-lg"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
