/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}",],
  
  theme: {
    extend: {
      colors: {
        primary: "#0C0C3A",
        secondary: "#7a7add",
        // accent: "#374151",
        // danger: "#DC2626",
        // success: "#10B981",
        // warning: "#F59E0B",
        // info: "#3B82F6",
      },
      fontFamily: {
        quicksand: ["Rubik-Bold"],

      },
      screens: {
        'md': '720px',
        // => @media (min-width: 720px) { ... }
  
        'mc': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'mb': '1920px',
        // => @media (min-width: 1920px) { ... }
      },
    },
  },
  plugins: [],
}

