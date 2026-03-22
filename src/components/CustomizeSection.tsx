"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function CustomizeSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".reveal").forEach((child) => child.classList.add("visible"));
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="customize"
      className="relative h-[600px] md:h-[700px] overflow-hidden"
      ref={ref}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://s1.xiaomiev.com/activity-outer-assets/0328/images/customize/pc/1-new.jpg)`,
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 max-w-2xl">
        <p className="reveal text-white/50 text-xs tracking-widest uppercase mb-3 reveal-delay-1">
          Customization Service
        </p>
        <h2 className="reveal text-white text-3xl md:text-5xl font-light mb-3 leading-tight reveal-delay-2">
          小米定制服务
        </h2>
        <p className="reveal text-white/60 text-lg mb-2 reveal-delay-2">YU7 Max | SU7 Ultra</p>
        <p className="reveal text-white/50 text-sm mb-10 max-w-md reveal-delay-3">
          专属定制方案，打造属于您的专属小米汽车。从外观到内饰，每一个细节都精心雕琢。
        </p>

        <div className="reveal flex flex-wrap gap-4 reveal-delay-4">
          <a
            href="#book"
            className="group inline-flex items-center gap-2 px-7 py-3 bg-white text-[#12151a] text-sm font-medium rounded-sm hover:bg-white/90 transition-colors"
          >
            预约咨询
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#configure"
            className="inline-flex items-center gap-2 px-7 py-3 btn-glass text-sm font-medium rounded-sm"
          >
            开始选配
          </a>
        </div>
      </div>
    </section>
  );
}
