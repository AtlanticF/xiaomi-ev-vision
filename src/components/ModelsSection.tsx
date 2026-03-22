"use client";

import { useEffect, useRef } from "react";

const models = [
  {
    id: "su7",
    name: "新一代小米SU7",
    type: "轿车",
    price: "21.99万起",
    range: "902km",
    power: "220kW",
    accentColor: "#277af7",
    darkText: false,
    bg: "#0f0f18",
    tagline: "优雅运动，豪华纯电轿跑",
    image: "https://s1.xiaomiev.com/activity-outer-assets/0328/images/su7/home.jpg",
    specs: [
      { label: "CLTC续航", value: "902km" },
      { label: "零百加速", value: "2.78s" },
      { label: "最高车速", value: "265km/h" },
    ],
  },
  {
    id: "yu7",
    name: "小米YU7",
    type: "SUV",
    price: "25.35万起",
    range: "835km",
    power: "400kW",
    accentColor: "#00975d",
    darkText: false,
    bg: "#081510",
    tagline: "御风而行，全能智能SUV",
    image: "https://s1.xiaomiev.com/activity-outer-assets/0328/images/yu7/home.jpg",
    specs: [
      { label: "CLTC续航", value: "835km" },
      { label: "风阻系数", value: "0.245Cd" },
      { label: "前备厢", value: "141L" },
    ],
  },
  {
    id: "ultra",
    name: "小米SU7 Ultra",
    type: "性能轿车",
    price: "联系门店",
    range: "630km",
    power: "1548kW",
    accentColor: "#FFD145",
    darkText: true,
    bg: "#100e00",
    tagline: "自信驾驭强大",
    image: "https://s1.xiaomiev.com/activity-outer-assets/0328/images/Ultra_U/home.jpg",
    specs: [
      { label: "综合功率", value: "1548kW" },
      { label: "零百加速", value: "1.98s" },
      { label: "最高车速", value: "350km/h" },
    ],
  },
];

function ModelCard({ model, index }: { model: typeof models[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

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
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="reveal group relative overflow-hidden rounded-sm"
      style={{ transitionDelay: `${index * 0.15}s`, background: model.bg }}
    >
      {/* Car image */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={model.image}
          alt={model.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).style.opacity = "0";
          }}
        />
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        {/* Type badge */}
        <div
          className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium"
          style={{
            background: `${model.accentColor}22`,
            color: model.accentColor,
            border: `1px solid ${model.accentColor}44`,
          }}
        >
          {model.type}
        </div>
      </div>

      {/* Info */}
      <div className="p-6 md:p-8">
        <h3 className="text-white text-xl md:text-2xl font-medium mb-1">{model.name}</h3>
        <p className="text-white/50 text-sm mb-4">{model.tagline}</p>

        {/* Price */}
        <div className="flex items-baseline gap-1 mb-6">
          <span className="text-white/40 text-xs">指导价</span>
          <span className="text-2xl font-medium" style={{ color: model.accentColor }}>
            {model.price}
          </span>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-white/10">
          {model.specs.map((spec) => (
            <div key={spec.label} className="text-center">
              <div className="text-white text-base font-medium">{spec.value}</div>
              <div className="text-white/40 text-xs mt-1">{spec.label}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex gap-3">
          <a
            href={`#${model.id}`}
            className="flex-1 text-center py-2.5 text-sm font-medium text-white border border-white/20 rounded-sm hover:bg-white/5 transition-colors"
          >
            了解详情
          </a>
          <a
            href="#configure"
            className="flex-1 text-center py-2.5 text-sm font-medium rounded-sm transition-colors"
            style={{
              background: model.accentColor,
              color: model.darkText ? "#12151a" : "#fff",
            }}
          >
            开始选配
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ModelsSection() {
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
    <section className="py-20 bg-white" id="models">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Heading */}
        <div ref={headingRef} className="reveal text-center mb-14">
          <p className="text-gray-400 text-xs tracking-widest uppercase mb-3">All Models</p>
          <h2 className="text-[#1e1e1e] text-3xl md:text-4xl font-light mb-4">所有车型</h2>
          <div className="w-12 h-px bg-brand-blue mx-auto" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {models.map((model, i) => (
            <ModelCard key={model.id} model={model} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
