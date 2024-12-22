/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors:{
        primary: '#F5CC49',
        text_grey: '#272727',
        light_grey: '#403E3E',
        dark: '#222222', 
        light: '#F7F7F7',
        subTitle: '#979797'
      },
      fontFamily:{
        'poppins': ["Poppins", 'sans-serif']
      },
      backgroundImage: {
        'hero': "url('/src/assets/Images/banner.png')",
        'appbanner': "url('/src/assets/Images/app-banner.png')",
      },
      
    },
  },
  plugins: [],
}