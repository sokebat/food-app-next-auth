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
        primary : "#F8B602",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'circle-gradient': 'linear-gradient(173.01deg, #FFFFFF -74.62%, rgba(255, 255, 255, 0.892708) -56.47%, rgba(255, 255, 255, 0) 94.54%, rgba(255, 255, 255, 0) 94.54%)',
      },
    },
  },
  plugins: [],
};
export default config;
