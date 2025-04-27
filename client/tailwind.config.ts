import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../shared/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(240, 5%, 84%)",
        background: "hsl(0, 0%, 100%)", // 🔥 defines 'bg-background'
        foreground: "hsl(222.2, 47.4%, 11.2%)",
        primary: {
          DEFAULT: "hsl(222.2, 47.4%, 11.2%)",
          foreground: "hsl(210, 40%, 98%)",
        },
        secondary: {
          DEFAULT: "hsl(210, 40%, 96.1%)",
          foreground: "hsl(222.2, 47.4%, 11.2%)",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
