"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const techs = [
  {
    title: "800V 高压平台",
    desc: "超高压充电，补能更高效",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&q=80&auto=format&fit=crop",
    href: "#hv",
    gradient: "linear-gradient(160deg, #0a1628 0%, #0f2744 60%, #1a3a5c 100%)",
  },
  {
    title: "小米超级电机",
    desc: "自研定子绕组，极致功率密度",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80&auto=format&fit=crop",
    href: "#motor",
    gradient: "linear-gradient(160deg, #0d0d0d 0%, #1f1f1f 60%, #2d2d2d 100%)",
  },
  {
    title: "澎湃智能座舱",
    desc: "HyperOS 驱动的车机系统",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop",
    href: "#cabin",
    gradient: "linear-gradient(160deg, #0a0a1e 0%, #10103a 60%, #1a1a50 100%)",
  },
  {
    title: "小米辅助驾驶",
    desc: "全场景智能辅助驾驶能力",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80&auto=format&fit=crop",
    href: "#adas",
    gradient: "linear-gradient(160deg, #0a1a10 0%, #0f2818 60%, #1a3a20 100%)",
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
      style={{ transitionDelay: `${index * 0.1}s`, background: tech.gradient }}
    >
      {/* Background image with gradient fallback */}
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
