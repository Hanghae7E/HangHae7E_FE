module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'pc': '360px',
    }
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
