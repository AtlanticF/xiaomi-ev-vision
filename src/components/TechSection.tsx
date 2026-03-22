"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const techs = [
  {
    title: "800V 高压平台",
    desc: "超高压充电，补能更高效",
    image: "https://s1.xiaomiev.com/activity-outer-assets/0328/images/home/section3_1.jpg",
    href: "#hv",
  },
  {
    title: "小米超级电机",
    desc: "自研定子绕组，极致功率密度",
    image: "https://s1.xiaomiev.com/activity-outer-assets/0328/images/home/section3_2.jpg",
    href: "#motor",
  },
  {
    title: "澎湃智能座舱",
    desc: "HyperOS 驱动的车机系统",
    image: "https://s1.xiaomiev.com/activity-outer-assets/0328/images/home/section3_3.jpg",
    href: "#cabin",
  },
  {
    title: "小米辅助驾驶",
    desc: "全场景智能辅助驾驶能力",
    image: "https://s1.xiaomiev.com/activity-outer-assets/0328/images/home/section3_4.jpg",
    href: "#adas",
  },
];

function TechCard({ tech, index }: { tech: typeof techs[0]; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      ref={ref}
      href={tech.href}
      className="reveal group relative overflow-hidden aspect-[3/4] md:aspect-auto md:h-[480px] block"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${tech.image})` }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(21,25,31,0.3)] to-[rgba(21,25,31,0.85)]" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-white text-xl font-medium mb-1">{tech.title}</h3>
        <p className="text-white/60 text-sm mb-4">{tech.desc}</p>
        <div className="flex items-center gap-1.5 text-white/70 text-sm group-hover:text-white transition-colors">
          <span>了解更多</span>
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </div>
      </div>

      {/* Top-right accent line */}
      <div className="absolute top-0 right-0 w-0 h-0.5 bg-brand-blue group-hover:w-full transition-all duration-500 delay-100" />
    </a>
  );
}

export default function TechSection() {
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-[#12151a]" id="tech">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Heading */}
        <div ref={headingRef} className="reveal text-center mb-14">
          <p className="text-white/40 text-xs tracking-widest uppercase mb-3">Core Technology</p>
          <h2 className="text-white text-3xl md:text-4xl font-light mb-4">核心技术</h2>
          <div className="w-12 h-px bg-brand-blue mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {techs.map((tech, i) => (
            <TechCard key={tech.title} tech={tech} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
