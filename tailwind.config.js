/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],  
  theme: {
    extend: {
      fontFamily: {
        'logo' : ['Yellowtail','cursive'],
        'title' : ['Staatliches', 'cursive'],
        'body' : ['Montserrat', 'sans-serif'],
      },
      colors:{ 
        "pink-user" : ["#0d0d0d"],
        "red-user" : [" #f6ca19"],
        "black-user" : ["#0a0908"],
        "gray-user" : ["#747474"],
        "white-user" : ["white"],
        "found-user" : ["#e0e0e0"],
      }
      },
  },
  darkMode: "class",
  plugins: [nextui()]
}