"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { ExternalLink, User, LogOut, ChevronDown, Bell } from "lucide-react";

export default function AdminHeader() {
  const { data: session } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white border-b border-slate-100 sticky top-0 z-40 px-8 py-4 flex items-center justify-between shadow-sm">
      {/* Left side - could be breadcrumbs or just spacing */}
      <div>
        <h2 className="text-lg font-semibold text-slate-800">Overview</h2>
      </div>

      {/* Right side - Actions */}
      <div className="flex items-center gap-6">
        <Link
          href="/"
          target="_blank"
          className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors bg-slate-50 hover:bg-orange-50 px-4 py-2 rounded-full border border-slate-200"
        >
          <ExternalLink size={16} />
          Visit Website
        </Link>

        {/* Optional Notification Bell - Visual only for now */}
        <button className="relative text-slate-400 hover:text-slate-600 transition-colors">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="h-8 w-px bg-slate-200 mx-2"></div>

        {/* Profile Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-3 focus:outline-none group"
          >
            <div className="w-10 h-10 rounded-full bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 group-hover:bg-orange-200 transition-colors">
              <User size={20} />
            </div>
            <ChevronDown
              size={16}
              className={`text-slate-400 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
            />
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-2 animate-in fade-in slide-in-from-top-2">
              <div className="px-4 py-3 border-b border-slate-50">
                <p className="text-sm font-semibold text-slate-900">
                  {session?.user?.email}
                </p>
                <p className="text-xs text-slate-400">Administrator</p>
              </div>

              <Link
                href="/admin/settings"
                className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-orange-600 transition-colors"
              >
                <User size={16} />
                My Profile
              </Link>

              <div className="my-1 border-t border-slate-50"></div>

              <button
                onClick={() => signOut({ callbackUrl: "/admin/login" })}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors text-left"
              >
                <LogOut size={16} />
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
