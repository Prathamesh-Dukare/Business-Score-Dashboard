/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      's-mobile':"380px",
      'm-mobile':"491px",
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors:{
        "bgmain": "#212426",
        "bg-light": "#333333",
        "bg-dark": "#191B1C",
        "light-text": "#BFBFBF",
        "card-bg":"#ffffff0d",
        "primary-blue":"#426BB6"
      }
    },
  },
  plugins: [],
}
