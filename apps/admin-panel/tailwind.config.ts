// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        blue: "#4B93FF",
        "blue-light": "#DBE9FF",
        turquoise: "#1EA6D3",
        "turquoise-light": "#D3EDF6",
        yellow: "#F1BE46",
        "yellow-light": "#FCF2DA",
        purple: "#7C6BFF",
        "purple-light": "#E5E1FF",
        error: "#EF4444",
        "error-light": "#FEE2E2",
        success: "#22C55E",
        "success-light": "#DCFCE7",
      },
    },
  },
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], // adjust as needed
  plugins: [],
};
export default config;
