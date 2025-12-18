/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary: '#3b82f6', // example blue
        PrimaryDark: '#1e3a8a', // example dark blue
      },
      container: {
        center: true,
        padding:{
          DEFAULT: '1rem',
          sm: '2rem'
        }
      },
    },
    plugins: [],
  }
}