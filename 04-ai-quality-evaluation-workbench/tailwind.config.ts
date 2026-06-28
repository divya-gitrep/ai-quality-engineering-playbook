import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#13243a",
        navy: "#0b1f36",
        mist: "#f4f7fa",
        teal: {
          50: "#eefbf8",
          100: "#d5f5ed",
          500: "#168f7a",
          600: "#087463",
          700: "#075d51"
        }
      },
      boxShadow: {
        panel: "0 16px 48px -28px rgba(15, 39, 66, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
