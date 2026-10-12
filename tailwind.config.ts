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
        brand: {
          red: "#A31D33",
          "red-dark": "#8A1829",
        },
        text: {
          body: "#333333",
          heading: "#111111",
          muted: "#666666",
        },
        product: {
          ancho: "#1F6B4F",
          cayenne: "#E0A82E",
          birdseye: "#A31D33",
          habanero: "#E8672A",
          "scotch-bonnet": "#4B2A7B",
          "naga-ghost": "#7A1A2B",
        },
        eco: {
          green: "#1E7A5C",
        },
        forest: {
          dark: "#12241D",
        },
        heading: {
          green: "#1E4D3C",
        },
        surface: {
          soft: "#F5F5F5",
          divider: "#B8D4E8",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: [
          "clamp(2.25rem, 4vw, 3.5rem)",
          { lineHeight: "1.1", letterSpacing: "0.01em" },
        ],
        h2: [
          "clamp(1.5rem, 2.5vw, 2rem)",
          { lineHeight: "1.2", letterSpacing: "0.02em" },
        ],
        "product-title": [
          "clamp(1rem, 1.5vw, 1.125rem)",
          { lineHeight: "1.3", letterSpacing: "0.04em" },
        ],
        tagline: [
          "clamp(0.9375rem, 1.2vw, 1.0625rem)",
          { lineHeight: "1.4" },
        ],
        body: ["clamp(0.8125rem, 1vw, 0.875rem)", { lineHeight: "1.6" }],
        caption: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.01em" }],
        button: [
          "0.6875rem",
          { lineHeight: "1", letterSpacing: "0.08em" },
        ],
        nav: ["0.6875rem", { lineHeight: "1", letterSpacing: "0.12em" }],
      },
      maxWidth: {
        container: "1200px",
        about: "1080px",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      boxShadow: {
        pack: "0 12px 40px rgba(0, 0, 0, 0.12)",
        portrait: "0 8px 28px rgba(0, 0, 0, 0.12)",
      },
      transitionDuration: {
        DEFAULT: "250ms",
      },
    },
  },
  plugins: [],
};

export default config;
