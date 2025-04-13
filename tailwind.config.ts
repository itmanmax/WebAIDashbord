import type { Config } from "tailwindcss"
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0ea5e9", // Sky blue
          foreground: "#ffffff",
          light: "#38bdf8",
          dark: "#0284c7",
        },
        secondary: {
          DEFAULT: "#10b981", // Emerald
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#f59e0b", // Amber
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#f1f5f9",
          foreground: "#64748b",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#0f172a",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#0f172a",
        },
        dark: "#0f172a", // Slate 900
        light: "#f8fafc",
        gray: {
          DEFAULT: "#64748b",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        card: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        premium: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        glow: "0 0 15px rgba(14, 165, 233, 0.5)",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
        "gradient-dark": "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        "gradient-accent": "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
        "gradient-secondary": "linear-gradient(135deg, #10b981 0%, #059669 100%)",
        "gradient-premium": "linear-gradient(135deg, #0f172a 0%, #334155 100%)",
        "gradient-glass": "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
        "gradient-artistic": "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 50%, #10b981 100%)",
        "gradient-creative": "linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #3b82f6 100%)",
        "gradient-vibrant": "linear-gradient(45deg, #f59e0b 0%, #ef4444 50%, #ec4899 100%)",
        "gradient-cool": "linear-gradient(to right, #0ea5e9, #8b5cf6)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
