/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      'developer': '#6457FA',
      'designer': '#74EC8B',
      'pmaster': '#FFC700',
      'card-bg': '#F1F5FB',
      'tag-bg': '#E8EDF4',
      'white': '#ffffff',
      'black': '#000000',
      'gray': '#cccccc',
      'refGray': '#676767',
      'inputGray':'#DFE1E5'

    }
  },
  plugins: [],
}
