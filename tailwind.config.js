/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        "dark-grey": "#ececec",
        "black": "black",
        "light-grey": "white"
      },
    },
  },
  plugins: [],
  extend: {
    borderRadius: {
      'lg': '5rem', // Puedes ajustar el valor según el radio deseado
    },
  },

};
