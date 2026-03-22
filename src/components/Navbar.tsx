"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const navItems = [
  { label: "首页", href: "/" },
  {
    label: "所有车型",
    href: "#models",
    children: [
      { label: "新一代小米SU7", href: "#su7" },
      { label: "小米YU7", href: "#yu7" },
      { label: "小米SU7 Ultra", href: "#ultra" },
      { label: "车型对比", href: "#compare" },
    ],
  },
  { label: "定制服务", href: "#customize" },
  {
    label: "核心技术",
    href: "#tech",
    children: [
      { label: "电子电气架构", href: "#ee" },
      { label: "超级电机", href: "#motor" },
      { label: "高压平台", href: "#hv" },
      { label: "超级大压铸", href: "#casting" },
      { label: "辅助驾驶", href: "#adas" },
      { label: "智能座舱", href: "#cabin" },
    ],
  },
  { label: "小米汽车工厂", href: "#factory" },
  { label: "门店查询", href: "#store" },
  {
    label: "服务介绍",
    href: "#service",
    children: [
      { label: "服务保障", href: "#warranty" },
      { label: "充电补能", href: "#charging" },
      { label: "金融试算", href: "#finance" },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
      style={{ height: "var(--nav-height)" }}
    >
      <div className="max-w-[1400px] mx-auto h-full flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="flex items-center gap-1.5">
            <div className="w-7 h-7 bg-[#FF6900] rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs tracking-tighter">MI</span>
            </div>
            <span
              className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                scrolled ? "text-[#1e1e1e]" : "text-white"
              }`}
            >
              小米汽车
            </span>
          </div>
        </Link>

        {/* Nav Items */}
        <ul className="hidden lg:flex items-center gap-1 h-full">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative h-full flex items-center"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a
                href={item.href}
                className={`flex items-center gap-0.5 px-3 py-1 text-sm font-medium transition-colors duration-200 rounded hover:bg-white/10 ${
                  scrolled ? "text-[#1e1e1e] hover:bg-black/5" : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
                {item.children && (
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-200 ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </a>

              {/* Dropdown */}
              {item.children && openDropdown === item.label && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-1 animate-in fade-in slide-in-from-top-2 duration-150"
                  style={{ animation: "dropdownIn 0.15s ease forwards" }}
                >
                  <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[160px] overflow-hidden">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-[#1e1e1e] hover:bg-gray-50 transition-colors whitespace-nowrap"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#app"
          className={`hidden lg:block text-xs px-4 py-2 rounded-full font-medium transition-all duration-200 ${
            scrolled
              ? "bg-[#FF6900] text-white hover:bg-[#e65c00]"
              : "btn-glass text-sm"
          }`}
        >
          去APP购车登录
        </a>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2 rounded-md transition-colors ${
            scrolled ? "text-[#1e1e1e]" : "text-white"
          }`}
          aria-label="Menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className="block w-5 h-0.5 bg-current" />
            <span className="block w-5 h-0.5 bg-current" />
            <span className="block w-4 h-0.5 bg-current" />
          </div>
        </button>
      </div>
    </nav>
  );
}
