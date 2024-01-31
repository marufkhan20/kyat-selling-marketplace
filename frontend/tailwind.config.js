/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3898E2",
        "primary-light": "#F0F6FE",
        heading: "#17171d",
        body: "#3c3c3c",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
