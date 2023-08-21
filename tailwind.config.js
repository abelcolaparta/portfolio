/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#082f49",
        gray: "#e5e7eb",
        dark: "#0f172a",
        secondary: "#64748b",
        client: "#7D9D9C",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
