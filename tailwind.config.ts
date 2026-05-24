import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#060608",
        "off-white": "#f2ede6",
        "blue-nova": "#3b82f6",
        "purple-nova": "#8b5cf6",
        "blue-dark": "#1d4ed8",
        "mid": "#888888",
      },
      fontFamily: {
        bebas: ["var(--font-bebas)"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
