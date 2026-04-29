import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#FBF6EF",
          100: "#F5E9D5",
          200: "#EBD5B0",
          300: "#E0BE89",
          400: "#D4A574",
          500: "#C28C5A",
          600: "#A2714A",
        },
        silicon: {
          50: "#F4F6F8",
          100: "#E2E6EC",
          200: "#C2CAD4",
          300: "#9AA5B3",
          400: "#6E7C8C",
          500: "#4A5560",
          600: "#2E353F",
          700: "#1B2028",
          800: "#0F131A",
          900: "#0A0E14",
        },
        circuit: {
          400: "#3FA9FF",
          500: "#0A84FF",
          600: "#0066CC",
          700: "#004999",
        },
        chip: {
          gold: "#E0B83A",
          neon: "#7CFFB2",
          plasma: "#B388FF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(110, 124, 140, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(110, 124, 140, 0.07) 1px, transparent 1px)",
        "circuit-glow":
          "radial-gradient(circle at 50% 50%, rgba(10, 132, 255, 0.15), transparent 70%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "circuit-flow": "circuitFlow 3s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        circuitFlow: {
          "0%": { strokeDashoffset: "100" },
          "100%": { strokeDashoffset: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
