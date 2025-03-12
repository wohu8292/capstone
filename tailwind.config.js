/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        first_color: 'rgb(105, 140, 70)',
        second_color: 'rgb(92, 115, 70)',
        third_color: 'rgb(189, 217, 130)',
        fourth_color: 'rgb(237, 242, 194)',
        fifth_color: 'rgb(64, 39, 30)',

      },

        fontFamily: {
            arimo: ["Arimo", "serif"]
        }
    }
},
  plugins: [],
}