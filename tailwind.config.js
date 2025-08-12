// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F172A",
        textColor: "#F8FAFC",
        primary: "#38BDF8",
        secondary: "#64748B",
        accent: "#F59E0B",
      },
    },
  },
  plugins: [],
};
