import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A10",
        surface: "rgba(255, 255, 255, 0.05)",
        primary: "#FF0080", // Pink neon
        secondary: "#00F0FF", // Cyan neon
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        neonPink: "0 0 10px rgba(255, 0, 128, 0.8), 0 0 30px rgba(255, 0, 128, 0.4), 0 0 50px rgba(255, 0, 128, 0.2)",
        neonCyan: "0 0 10px rgba(0, 240, 255, 0.8), 0 0 30px rgba(0, 240, 255, 0.4), 0 0 50px rgba(0, 240, 255, 0.2)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
