"use client";

import { useState } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export default function VisionToVenture({ data }) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Fallback defaults
  const content = data || {
    titlePrefix: "From Vision to",
    titleHighlight: "Venture",
    description:
      "Sabina Akter is a firm believer that a disciplined life is the ultimate competitive advantage. She treats her health with the same strategic precision as her business—prioritizing physical fitness and mental clarity to sustain the high-pressure demands of global leadership.",
    videoUrl: "r2nfZB5Q5Bs", // Default Video ID
  };

  // Helper to extract YouTube ID if full URL is stored
  const getYouTubeId = (url) => {
    if (!url) return "r2nfZB5Q5Bs";
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : url;
  };

  const videoId = getYouTubeId(content.videoUrl);

  return (
    <section className="py-24 bg-white relative overflow-hidden ">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Heading */}
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              {content.titlePrefix} <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
                {content.titleHighlight}
              </span>
            </h2>

            {/* Styled Paragraph */}
            <div className="flex gap-6">
              <div className="w-1.5 bg-amber-300 shrink-0 self-stretch rounded-full"></div>
              <p className="text-slate-600 text-lg leading-relaxed">
                {content.description}
              </p>
            </div>
          </div>

          {/* Right Video */}
          <div className="order-1 lg:order-2 relative rounded-xl overflow-hidden group h-full min-h-[300px] lg:min-h-[400px]">
            {isPlaying ? (
              <iframe
                className="w-full h-full absolute inset-0"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div
                className="absolute inset-0 cursor-pointer"
                onClick={() => setIsPlaying(true)}
              >
                {/* YouTube Thumbnail */}
                <Image
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  alt="Video thumbnail"
                  fill
                  className="object-cover"
                  unoptimized // YouTube thumbnails are external
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Animate Ping */}
                    <div className="absolute inset-0 bg-amber-500 rounded-full animate-ping opacity-75"></div>
                    <div className="relative w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center text-white text-3xl shadow-lg ring-8 ring-amber-500/30 group-hover:ring-amber-500/50 group-hover:scale-110 transition-all duration-300">
                      <FaPlay className="ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
