"use client";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-slate-900 text-gold shadow-2xl border border-slate-800 transition-all duration-500 transform hover:scale-110 hover:bg-gold hover:text-slate-900 group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      aria-label="Back to Top"
    >
      <div className="relative z-10">
        <FaArrowUp className="w-5 h-5 group-hover:animate-bounce" />
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-gold/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </button>
  );
}
