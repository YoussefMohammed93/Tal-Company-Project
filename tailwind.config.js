module.exports = {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "light-streak": "light-streak 0.5s ease-out forwards",
      },
      keyframes: {
        "light-streak": {
          "0%": { left: "-100%", opacity: 0.2 },
          "50%": { left: "50%", opacity: 0.6 },
          "100%": { left: "200%", opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
