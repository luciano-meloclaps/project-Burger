/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {  
        'varia' : ['Rawbeat', 'sans-serif'],                                       
      },
      colors:{
        "pink-user" : ["#00A082"],
        "red-user" : ["#f2bc47"],
        "black-user" : ["#0a0908"],
        "gray-user" : ["#747474"],
        "white-user" : ["#ecf1fe"],
        "found-user" : ["rgb(243 244 246)"],

      }
    },
  },
  plugins: [],
}
