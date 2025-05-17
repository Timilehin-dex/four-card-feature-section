/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        red: "hsl(0, 78%, 62%)",
        cyan: "hsl(180, 62%, 55%)",
        orange: "hsl(34, 97%, 64%)",
        blue: "hsl(212, 86%, 64%)",

        // Neutral Colors
        veryDarkBlue: "hsl(234, 12%, 34%)",
        grayishBlue: "hsl(229, 6%, 66%)",
        veryLightGray: "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        base: "15px", // Set base body copy font size
      },
      boxShadow: {
        custom: "0px 10px 10px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
