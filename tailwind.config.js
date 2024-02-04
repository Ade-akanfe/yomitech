/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        deep_blue: "#080531",
        purple: "#EB00FF",
        white: "#fff",
        red: "#7c2d14",
        dark_purple: "#670370",
        border_blue: "#0B0088",
      },
      borderRadius: {
        roundedem: "5rem",
      },

      height: {
        screenVal: "calc(100vh - 8rem)",
      },
    },
  },
  plugins: [],
};
