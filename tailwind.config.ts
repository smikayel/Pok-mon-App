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
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray_500: "#D9D9D9"
      },
      boxShadow:{
        primary_shadow: "0px 4px 29px 0px rgba(0, 0, 0, 0.1)"
      }
    },
  },
  plugins: [],
};
export default config;
