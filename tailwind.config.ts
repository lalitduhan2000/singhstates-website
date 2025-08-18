import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef2ff",
          500: "#1d4ed8",
          600: "#1e40af",
          900: "#0b1b4a"
        },
        gold: "#e6b800"
      },
      boxShadow: {
        soft: "0 10px 25px -10px rgba(0,0,0,.25)"
      }
    }
  },
  plugins: []
} satisfies Config;
