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
        'hero-pattern-tablet': "url('./src/assets/herobg-tablet.png')",
        'plink1': "url('./src/assets/plink1.jpg')",
        'plink2': "url('./src/assets/plink2.jpg')",
        'plink3': "url('./src/assets/plink3.jpg')",
        'plink1-tablet': "url('./src/assets/plink1-tablet.jpg')",
        'plink2-tablet': "url('./src/assets/plink2-tablet.jpg')",
        'plink3-tablet': "url('./src/assets/plink3-tablet.jpg')",
        'keyoval1': "url('./src/assets/keyoval1.png')",
        'keyoval2': "url('./src/assets/keyoval2.png')",
        'keyoval3': "url('./src/assets/keyoval3.png')",
        'herofooter': "url('./src/assets/herofooter.png')",
        'herofooter-tablet': "url('./src/assets/herofooter-tablet.png')",
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
