import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"MiSans VF"', "MiSans", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          blue: "#277af7",
          yellow: "#ffce00",
          green: "#00975d",
          sand: "#c6a571",
          dark: "#12151a",
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-in-left": "slideInLeft 0.8s ease forwards",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideInLeft: {
          from: { opacity: "0", transform: "translateX(-30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
