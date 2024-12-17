/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        responsiveText: "clamp(25px,4vw,40px)"
      },
      screens: {
        pc: {max: "906px"},
        tablet: {max: "768px"},
        mobileTab: {max: "620px"},
        mobile: {max: "425px"},
        phone: {max: "375px"},
        radio: {max: "320px"},
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      backgroundImage: {
        'hero': "url(../../assets/children.png)"
      },
      gridTemplateColumns: {
        cardGrid: "repeat(auto-fill, minmax(300px, 1fr))",
        InfoGrid: "repeat(auto-fill, minmax(200px, 1fr))",
        mediaGrid: "repeat(auto-fill, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [],
}
