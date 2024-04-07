import { transform } from "lodash";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      }, // Add a comma here
      fontFamily: {
        custom_font:
          "SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif",
      },
      backgroundImage: {
        "gradient-custom":
          "linear-gradient(130deg, hsl(142deg 99% 36%) 0%, hsl(152deg 100% 34%) 25%, hsl(163deg 100% 32%) 34%, hsl(175deg 100% 29%) 41%, hsl(188deg 100% 30%) 46%, hsl(198deg 100% 33%) 50%, hsl(205deg 100% 34%) 55%, hsl(210deg 100% 34%) 59%, hsl(215deg 100% 33%) 65%, hsl(219deg 100% 30%) 72%, hsl(226deg 100% 25%) 82%, hsl(240deg 100% 20%) 100%)",
        "gradient-background": "linear-gradient(to right, #c9d6ff, #e2e2e2); ",
      },
    },
  },

  plugins: [],
};

export default config;
