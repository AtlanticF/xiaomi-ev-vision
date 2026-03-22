"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: "su7",
    model: "新一代小米SU7",
    tagline: "优雅运动，不止于此",
    price: "21.99万起",
    theme: "blue",
    accentColor: "#277af7",
    bg: "linear-gradient(135deg, #0a0a1a 0%, #1a1a2e 40%, #16213e 70%, #0f3460 100%)",
    carImage: "https://s1.xiaomiev.com/activity-outer-assets/0328/images/su7/home.jpg",
  },
  {
    id: "yu7",
    model: "小米YU7",
    tagline: "御风而行",
    price: "25.35万起",
    theme: "green",
    accentColor: "#00975d",
    bg: "linear-gradient(135deg, #0a1a10 0%, #0d2818 40%, #0f3520 70%, #1a4a2a 100%)",
    carImage: "https://s1.xiaomiev.com/activity-outer-assets/0328/images/yu7/home.jpg",
  },
  {
    id: "ultra",
    model: "小米SU7 Ultra",
    tagline: "自信驾驭强大",
    price: "",
    theme: "yellow",
    accentColor: "#FFD145",
    bg: "linear-gradient(135deg, #0a0800 0%, #1a1500 40%, #251e00 70%, #3a2f00 100%)",
    carImage: "https://s1.xiaomiev.com/activity-outer-assets/0328/images/Ultra_U/home.jpg",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${current}`}
          className="absolute inset-0"
          style={{ background: slide.bg }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      {/* Car Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`car-${current}`}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.carImage}
            alt={slide.model}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to gradient only on image error
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 hero-overlay" />
        </motion.div>
      </AnimatePresence>

      {/* Decorative metallic accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 opacity-60"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${slide.accentColor} 40%, ${slide.accentColor} 60%, transparent 100%)`,
          transition: "background 0.8s ease",
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end pb-24 px-8 md:px-16 lg:px-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-xl"
          >
            {/* Model name */}
            <p className="text-white/60 text-sm font-medium tracking-widest uppercase mb-2">
              {slide.id === "yu7" ? "SUV" : slide.id === "ultra" ? "PERFORMANCE" : "SEDAN"}
            </p>

            {/* Title */}
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-2">
              {slide.model}
            </h1>

            {/* Tagline */}
            <p className="text-white/70 text-xl md:text-2xl font-light mb-4">
              {slide.tagline}
            </p>

            {/* Price */}
            {slide.price && (
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-white/50 text-sm">指导价</span>
                <span
                  className="text-2xl md:text-3xl font-medium"
                  style={{ color: slide.accentColor }}
                >
                  {slide.price}
                </span>
              </div>
            )}
            {!slide.price && <div className="mb-8" />}

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href={`#${slide.id}`}
                className="px-6 py-3 rounded-sm text-sm font-medium text-white border border-white/30 hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
              >
                了解详情
              </a>
              <a
                href="#test-drive"
                className="px-6 py-3 rounded-sm text-sm font-medium btn-glass"
              >
                预约试驾
              </a>
              <a
                href="#configure"
                className="px-6 py-3 rounded-sm text-sm font-medium text-[#12151a]"
                style={{ background: slide.accentColor }}
              >
                开始选配
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6">
        {/* Prev */}
        <button
          onClick={prev}
          className="w-9 h-9 rounded-full btn-glass flex items-center justify-center hover:bg-white/20 transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft size={16} className="text-white" />
        </button>

        {/* Dots */}
        <div className="flex gap-2 items-center">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === current ? "24px" : "6px",
                height: "6px",
                background: i === current ? slides[current].accentColor : "rgba(255,255,255,0.4)",
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={next}
          className="w-9 h-9 rounded-full btn-glass flex items-center justify-center hover:bg-white/20 transition-colors"
          aria-label="Next"
        >
          <ChevronRight size={16} className="text-white" />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-12 bg-white/60" />
        <span className="text-white text-[10px] tracking-widest rotate-90 origin-center translate-x-4 uppercase">Scroll</span>
      </div>
    </section>
  );
}
