/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern-mobile': "url('./src/assets/herobg-mobile.png')",
        'plink1': "url('./src/assets/plink1.jpg')",
        'plink2': "url('./src/assets/plink2.jpg')",
        'plink3': "url('./src/assets/plink3.jpg')",
      },
      colors: {
        'peach': '#E7816B',
        'black': '#1D1C1E',
        'white': '#FFFFFF',
        'light-peach': '#FFAD9B',
        'dark-grey': '#333136',
        'light-grey': '#F1F3F5',
      },
    },
  },
  plugins: [],
}
