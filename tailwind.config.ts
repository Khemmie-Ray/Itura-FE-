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
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkBg: "#030A04",
        gradientYellow: "#F8C238",
        gradientRed: "#F83838",
        orange: "#FF6B00",
        lightOrange: "#FF9E58",
        footerBg: "#161320",
        textGrey: "#A39EB6",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        dmSans: ['DM Sans', 'sans-serif'],
        instrumentSerif: ['Instrument Serif', 'serif'],
      }
    },
  },
  plugins: [],
};
export default config;
