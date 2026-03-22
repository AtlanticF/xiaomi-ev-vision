"use client";

import { useEffect, useRef } from "react";
import { Smartphone, QrCode } from "lucide-react";

export default function AppSection() {
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

  const features = [
    "配置定购",
    "车辆控制",
    "最新资讯",
    "车友社区",
  ];

  return (
    <section className="py-20 bg-white" id="app" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left: Text */}
          <div className="max-w-lg">
            <p className="reveal text-gray-400 text-xs tracking-widest uppercase mb-3 reveal-delay-1">
              Mobile App
            </p>
            <h2 className="reveal text-[#1e1e1e] text-3xl md:text-4xl font-light mb-4 leading-tight reveal-delay-2">
              小米汽车 APP
            </h2>
            <p className="reveal text-gray-500 text-sm mb-6 reveal-delay-2">
              小米汽车科技有限公司 · Android / iOS
            </p>

            {/* Feature list */}
            <div className="reveal grid grid-cols-2 gap-3 mb-8 reveal-delay-3">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                  {f}
                </div>
              ))}
            </div>

            {/* App download buttons */}
            <div className="reveal flex flex-wrap gap-3 reveal-delay-4">
              <a
                href="#ios"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#12151a] text-white rounded-sm text-sm font-medium hover:bg-[#1f2430] transition-colors"
              >
                <Smartphone size={16} />
                iOS 下载
              </a>
              <a
                href="#android"
                className="flex items-center gap-2 px-5 py-2.5 border border-[#12151a] text-[#12151a] rounded-sm text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                <Smartphone size={16} />
                Android 下载
              </a>
            </div>
          </div>

          {/* Right: QR Codes */}
          <div className="reveal flex gap-8 reveal-delay-3">
            {[
              { label: "App 下载", sub: "扫码下载小米汽车APP" },
              { label: "小程序", sub: "微信扫码即可使用" },
            ].map((qr) => (
              <div key={qr.label} className="flex flex-col items-center gap-3">
                {/* QR placeholder with CSS-generated pattern */}
                <div className="w-32 h-32 bg-[#f6f7f8] border border-gray-200 rounded-sm flex items-center justify-center relative overflow-hidden">
                  <QrCode size={64} className="text-[#12151a] opacity-80" />
                  {/* Corner decorations */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-[#12151a]" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-[#12151a]" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-[#12151a]" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-[#12151a]" />
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium text-[#1e1e1e]">{qr.label}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{qr.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
