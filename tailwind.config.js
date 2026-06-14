/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef8f1",
          100: "#d8efe0",
          500: "#1f8f4d",
          700: "#146337",
          900: "#0b301d"
        }
      }
    }
  },
  plugins: []
};
