/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fcd5c7",

          secondary: "#fcb3c6",

          accent: "#f718a2",

          neutral: "#2B2735",

          "base-100": "#F4F4F6",

          info: "#67C4E9",

          success: "#80E5C0",

          warning: "#FBC851",

          error: "#F0757D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
