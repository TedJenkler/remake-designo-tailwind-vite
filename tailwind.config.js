/** @type {import('tailwindcss').Config} */heroab
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern-mobile': "url('./herobg-mobile.png')",
        'hero-pattern-tablet': "url('./herobg-tablet.png')",
        'hero-pattern-desktop': "url('./herobg-desktop.png')",
        'plink1': "url('./plink1.jpg')",
        'plink2': "url('./plink2.jpg')",
        'plink3': "url('./plink3.jpg')",
        'plink1-tablet': "url('./plink1-tablet.jpg')",
        'plink2-tablet': "url('./plink2-tablet.jpg')",
        'plink3-tablet': "url('./plink3-tablet.jpg')",
        'plink1-desktop': "url('./plink1-desktop.png')",
        'plink2-desktop': "url('./plink2-desktop.jpg')",
        'plink3-desktop': "url('./plink3-desktop.jpg')",
        'plink1-desktop-h': "url('./plink1-desktop-h.svg')",
        'plink2-desktop-h': "url('./plink2-desktop-h.png')",
        'plink3-desktop-h': "url('./plink3-desktop-h.svg')",
        'plink1-s': "url('./plink1-s.png')",
        'plink2-s': "url('./plink2-s.png')",
        'plink3-s': "url('./plink3-s.png')",
        'keyoval1': "url('./keyoval1.png')",
        'keyoval2': "url('./keyoval2.png')",
        'keyoval3': "url('./keyoval3.png')",
        'herofooter': "url('./herofooter.png')",
        'herofooter-tablet': "url('./herofooter-tablet.png')",
        'herofooter-desktop': "url('./herofooter-desktop.png')",
        'locationoval': "url('./locationoval.png')",
        'locationoval-tablet': "url('./locationoval-tablet.png')",
        'heroaboutbg': "url('./abouthero.png')",
        'heroaboutbg-tablet': "url('./heroaboutbg-tablet.png')",
        'heroaboutbg-desktop': "url('./heroaboutbg-desktop.png')",
        'infoabout': "url('./infoabout.png')",
        'infoabout-tablet': "url('./infoabout-tablet.png')",
        'herotemplate': "url('./herotemplate.png')",
        'herotemplate-tablet': "url('./herotemplate-tablet.png')",
        'herotemplate-desktop': "url('./herotemplate-desktop.png')",
        'formbg': "url('./formbg.png')",
        'formbg-tablet': "url('./formbg-tablet.png')",
        'formbg-desktop': "url('./formbg-desktop.png')",
      },
      colors: {
        'peach': '#E7816B',
        'black': '#1D1C1E',
        'white': '#FFFFFF',
        'light-peach': '#FFAD9B',
        'dark-grey': '#333136',
        'light-grey': '#F1F3F5',
        'bg': '#FDF3F0',
      },
    },
  },
  plugins: [],
}
