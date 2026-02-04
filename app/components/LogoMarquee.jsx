"use client";

import Image from "next/image";

const logos = [
  { name: "Softvence", src: "/logo/softvence@4x.png" },
  { name: "Sparktech", src: "/logo/sparktechAgency@4x.png" },
  { name: "SM Technology", src: "/logo/smTechonology@4x.png" },
  { name: "JVAI", src: "/logo/JVai@4x.png" },
  { name: "ZenexCloud", src: "/logo/zenexcloud@4x.png" },
  { name: "Back Bencher Studio", src: "/logo/backBencherStudio@4x.png" },
  { name: "ScaleUp", src: "/logo/scaleUp@4x.png" },
  { name: "Bdcalling Academy", src: "/logo/BDcallingAcademy@4x.png" },
  { name: "Betopia PulseGrid", src: "/logo/pulseGrid@4x.png" },
  { name: "Bdcalling Enterprise", src: "/logo/bdcallingEnterprise@4x.png" },
  { name: "Data Insight", src: "/logo/dataInsight@4x.png" },
  { name: "Fire AI", src: "/logo/fireAi@4x.png" },
  { name: "Clay Stone", src: "/logo/clayStone@4x.png" },
  { name: "Opsoriegro", src: "/logo/opsoriegro@4x.png" },
  { name: "Pixelors Studio", src: "/logo/pixelorsStudio@4x.png" },
  { name: "BeUp", src: "/logo/beUp@4x.png" },
];

export default function LogoMarquee() {
  return (
    <section className="py-8 bg-white overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-6 relative z-10">
        <div className="relative flex overflow-x-hidden group">
          {/* Gradient Masks */}
          <div className="absolute top-0 left-0 z-10 w-24 md:w-40 h-full bg-gradient-to-r from-white via-white/90 to-transparent"></div>
          <div className="absolute top-0 right-0 z-10 w-24 md:w-40 h-full bg-gradient-to-l from-white via-white/90 to-transparent"></div>

          {/* Marquee Track - Controlled by global CSS (120s duration, group hover pause) */}
          <div className="flex animate-scroll items-center">
            {/* First Set */}
            <div className="flex gap-5 items-center px-10 shrink-0">
              {logos.map((logo, index) => (
                <div
                  key={`logo-1-${index}`}
                  className="relative h-20 w-48 flex items-center justify-center cursor-pointer"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Second Set */}
            <div className="flex gap-5 items-center px-10 shrink-0">
              {logos.map((logo, index) => (
                <div
                  key={`logo-2-${index}`}
                  className="relative h-20 w-48 flex items-center justify-center cursor-pointer"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
