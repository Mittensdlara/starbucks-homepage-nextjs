/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      Pink: "#fdd8f7",
      DarkGreen: "#1e3932",
      Green: "#cfd84d",
      DarkPink: "#552200",
      Grass: "#006241",
      Purple: "#efabfc",
      DarkPurple: "#1e3932",
      Orenge:"#e99264",
      Blue: "#337481",
      White:"#fff"
    },
  },
  plugins: [require("daisyui")],
};
