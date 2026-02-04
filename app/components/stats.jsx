"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const statsData = [
  {
    id: 1,
    value: 5000,
    suffix: "+",
    label: "Jobs Created",
    description: "Contributing to the national economy",
  },
  {
    id: 2,
    value: 1200,
    suffix: "+",
    label: "Women Empowered",
    description: "Fostering leadership & independence",
  },
  {
    id: 3,
    value: 22,
    suffix: "+",
    label: "Global Presence",
    description: "Countries with active operations",
  },
  {
    id: 4,
    value: 20,
    suffix: "",
    label: "Industry Awards",
    description: "Recognizing excellence & innovation",
  },
];

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="py-12 bg-slate-50 relative overflow-hidden" ref={ref}>
      {/* Decorative Background Mesh */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/20 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-yellow-100/20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-0 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center text-center space-y-4 transition-all duration-500"
            >
              <div className="space-y-2">
                <div className="flex items-baseline justify-center text-5xl lg:text-6xl font-bold text-gray-600 transition-colors duration-300">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2.5}
                      separator=","
                    />
                  ) : (
                    "0"
                  )}
                  <span className="text-5xl lg:text-6xl ml-1 text-gray-600">
                    {stat.suffix}
                  </span>
                </div>
              </div>

              <h3 className="text-md tracking-[0.2em] text-gray-600 transition-colors duration-300">
                {stat.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
