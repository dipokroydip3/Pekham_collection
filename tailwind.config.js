/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define a custom color
        'secondary-bgc': '#DC2626', // Replace with your desired hex code
        'primary-bgc': '#F2F2F7', // Replace with your desired hex code
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    }
  },
  plugins: [],
}