import type { Config } from "tailwindcss";

export default {
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
        // colors
        sedieBlue: "#9CC6D3",
        sedieLightBlue: "#9BD1E5",
        sediePurple: "#A267A2",
        sedieLightPurple: "#BD93BD",
        sedieYellow: "#F6AE2D",
        sedieLightYellow: "#F8C462",
      },
    },
  },
  plugins: [],
} satisfies Config;
