"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setAboutDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const aboutSubLinks = [
    { name: "Profile", href: "/about" },
    { name: "Vision", href: "/vision" },
    { name: "Journey", href: "/journey" },
    { name: "Business Unit", href: "/ecosystem" },
  ];

  const mainNavLinks = [
    { name: "HOME", href: "/" },
    { name: "NEWS", href: "/news" },
    { name: "FORMAL PHOTO", href: "/gallery" },
  ];

  const isAboutActive = aboutSubLinks.some((link) => pathname === link.href);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo Section */}
          <Link href="/" className="group z-50 relative">
            <div className="flex flex-col">
              <Image
                src="/sabinaAkter.png"
                alt="Logo"
                width={300}
                height={300}
                className="w-[150px] lg:w-[250px] h-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Home Link */}
            <Link
              href="/"
              className={`text-sm font-bold tracking-widest transition-colors uppercase relative group
                ${pathname === "/" ? "text-amber-600" : "text-slate-600 hover:text-amber-600"}
              `}
            >
              HOME
              {pathname === "/" && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-amber-600 rounded-full"></span>
              )}
            </Link>

            {/* About Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setAboutDropdown(true)}
              onMouseLeave={() => setAboutDropdown(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-bold tracking-widest transition-colors uppercase relative group
                  ${isAboutActive ? "text-amber-600" : "text-slate-600 hover:text-amber-600"}
                `}
              >
                ABOUT
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    aboutDropdown ? "rotate-180" : ""
                  }`}
                />
                {isAboutActive && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-amber-600 rounded-full"></span>
                )}
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 w-56 transition-all duration-300 origin-top ${
                  aboutDropdown
                    ? "opacity-100 scale-100 visible"
                    : "opacity-0 scale-95 invisible pointer-events-none"
                }`}
              >
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden py-2">
                  {aboutSubLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`block px-6 py-3 text-sm font-semibold transition-colors ${
                        pathname === link.href
                          ? "bg-amber-50 text-amber-600"
                          : "text-slate-600 hover:bg-slate-50 hover:text-amber-600"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* News Link */}
            <Link
              href="/news"
              className={`text-sm font-bold tracking-widest transition-colors uppercase relative group
                ${pathname === "/news" ? "text-amber-600" : "text-slate-600 hover:text-amber-600"}
              `}
            >
              NEWS
              {pathname === "/news" && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-amber-600 rounded-full"></span>
              )}
            </Link>

            {/* Formal Photo Link */}
            <Link
              href="/gallery"
              className={`text-sm font-bold tracking-widest transition-colors uppercase relative group
                ${pathname === "/gallery" ? "text-amber-600" : "text-slate-600 hover:text-amber-600"}
              `}
            >
              FORMAL PHOTO
              {pathname === "/gallery" && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-amber-600 rounded-full"></span>
              )}
            </Link>

            {/* Book a Meeting Button */}
            <Link
              href="/contact"
              className="px-6 py-3 bg-amber-600 text-white text-xs font-bold tracking-widest rounded-full hover:bg-slate-900 transition-colors duration-300"
            >
              BOOK A MEETING
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-slate-900 z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <HiX size={28} className="text-slate-900" />
            ) : (
              <HiMenuAlt3 size={28} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Side Drawer */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-[80%] max-w-[400px] bg-white z-50 shadow-2xl transform transition-transform duration-500 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full relative">
          {/* Close Button Area */}
          <div className="flex justify-end p-6">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <HiX size={24} className="text-slate-900" />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4 px-8 mt-4 overflow-y-auto max-h-[70vh]">
            {/* Home */}
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`group flex items-center gap-3 border-b border-slate-100 pb-4 ${
                pathname === "/" ? "border-amber-100" : ""
              }`}
            >
              {pathname === "/" && (
                <div className="w-1.5 h-6 bg-amber-600 rounded-full"></div>
              )}
              <span
                className={`text-2xl font-bold transition-colors ${
                  pathname === "/"
                    ? "text-amber-600"
                    : "text-slate-900 group-hover:text-amber-600"
                }`}
              >
                HOME
              </span>
            </Link>

            {/* About with Accordion */}
            <div className="border-b border-slate-100 pb-4">
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className={`w-full flex items-center justify-between ${
                  isAboutActive ? "text-amber-600" : "text-slate-900"
                }`}
              >
                <div className="flex items-center gap-3">
                  {isAboutActive && (
                    <div className="w-1.5 h-6 bg-amber-600 rounded-full"></div>
                  )}
                  <span className="text-2xl font-bold">ABOUT</span>
                </div>
                <ChevronDown
                  size={24}
                  className={`transition-transform duration-300 ${
                    mobileAboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Submenu */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileAboutOpen ? "max-h-60 mt-4" : "max-h-0"
                }`}
              >
                <div className="pl-6 space-y-3">
                  {aboutSubLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block text-lg font-semibold py-2 px-4 rounded-xl transition-colors ${
                        pathname === link.href
                          ? "bg-amber-50 text-amber-600"
                          : "text-slate-600 hover:bg-slate-50 hover:text-amber-600"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* News */}
            <Link
              href="/news"
              onClick={() => setIsOpen(false)}
              className={`group flex items-center gap-3 border-b border-slate-100 pb-4 ${
                pathname === "/news" ? "border-amber-100" : ""
              }`}
            >
              {pathname === "/news" && (
                <div className="w-1.5 h-6 bg-amber-600 rounded-full"></div>
              )}
              <span
                className={`text-2xl font-bold transition-colors ${
                  pathname === "/news"
                    ? "text-amber-600"
                    : "text-slate-900 group-hover:text-amber-600"
                }`}
              >
                NEWS
              </span>
            </Link>

            {/* Formal Photo */}
            <Link
              href="/gallery"
              onClick={() => setIsOpen(false)}
              className={`group flex items-center gap-3 border-b border-slate-100 pb-4 ${
                pathname === "/gallery" ? "border-amber-100" : ""
              }`}
            >
              {pathname === "/gallery" && (
                <div className="w-1.5 h-6 bg-amber-600 rounded-full"></div>
              )}
              <span
                className={`text-2xl font-bold transition-colors ${
                  pathname === "/gallery"
                    ? "text-amber-600"
                    : "text-slate-900 group-hover:text-amber-600"
                }`}
              >
                FORMAL PHOTO
              </span>
            </Link>

            {/* Book a Meeting Button */}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-6 w-full py-4 bg-amber-600 text-white text-center text-sm font-bold tracking-widest rounded-xl hover:bg-slate-900 transition-colors"
            >
              BOOK A MEETING
            </Link>
          </div>

          {/* Decorative Foot */}
          <div className="mt-auto p-8 bg-slate-50 border-t border-slate-100">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-1">
              Sabina Akter
            </h4>
            <p className="text-[10px] text-slate-500">
              Chairperson, Betopia Group
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
