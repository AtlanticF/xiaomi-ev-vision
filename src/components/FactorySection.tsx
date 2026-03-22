"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function FactorySection() {
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
    <section className="py-20 bg-[#f6f7f8]" id="factory" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="reveal text-gray-400 text-xs tracking-widest uppercase mb-3 reveal-delay-1">
              Manufacturing
            </p>
            <h2 className="reveal text-[#1e1e1e] text-3xl md:text-4xl font-light mb-4 leading-tight reveal-delay-2">
              了解小米汽车工厂
            </h2>
            <p className="reveal text-gray-500 text-sm leading-relaxed mb-8 max-w-md reveal-delay-3">
              「数字化」驱动先进制造工艺，实现整车高品质生产与交付。
              每一辆小米汽车都在这里诞生，匠心铸就每一个细节。
            </p>

            <a
              href="#factory-detail"
              className="reveal inline-flex items-center gap-2 text-sm font-medium text-[#1e1e1e] hover:text-brand-blue transition-colors group reveal-delay-4"
            >
              探索工厂
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Stats grid */}
          <div className="reveal grid grid-cols-2 gap-4 reveal-delay-3">
            {[
              { value: "2000+", label: "机器人协作工位" },
              { value: "720°", label: "全流程质检覆盖" },
              { value: "99.9%", label: "整车下线直通率" },
              { value: "3min", label: "整车生产节拍" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-sm p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-2xl md:text-3xl font-light text-[#1e1e1e] mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
