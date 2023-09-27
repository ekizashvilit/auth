/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        main: "#F1F2F6",
        fb: "#1877F2",
        ln: "#007EBB",
      },
      textColor: {
        grRed: "#ED1A25",
        grGrey: "#707070",
      },
    },
  },
  plugins: [],
};
