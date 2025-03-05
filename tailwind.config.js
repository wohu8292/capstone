/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryGold: 'rgb(207, 184, 124)',
        secondaryGold: 'rgb(141, 115, 52)',
        primaryDarkgray: 'rgb(86, 90, 92)',
        primaryLightGray: 'rgb(162, 164, 163)',
      },

        fontFamily: {
            arimo: ["Arimo", "serif"]
        }
    }
},
  plugins: [],
}